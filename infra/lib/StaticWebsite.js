const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
const route53 = require("@aws-cdk/aws-route53");
const certificatemanager = require("@aws-cdk/aws-certificatemanager");
const targets = require("@aws-cdk/aws-route53-targets");
const cloudfront = require("@aws-cdk/aws-cloudfront");
const deployment = require("@aws-cdk/aws-s3-deployment");

class StaticWebsite extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    let aliasConfiguration;
    let domain;
    let zone;

    if (props.hostedZone) {
      zone = route53.HostedZone.fromLookup(this, "Zone", {
        domainName: props.hostedZone,
      });

      domain = props.subDomain
        ? `${props.subDomain}.${props.hostedZone}`
        : props.hostedZone;

      aliasConfiguration = {
        acmCertRef: new certificatemanager.DnsValidatedCertificate(
          this,
          "SiteCertificate",
          {
            domainName: domain,
            hostedZone: zone,
            region: "us-east-1",
          }
        ).certificateArn,
        names: [domain],
        sslMethod: cloudfront.SSLMethod.SNI,
        securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,
      };
    }

    const defaultRootObject = props.defaultRootObject
      ? props.defaultRootObject
      : "index.html";

    const oai = new cloudfront.OriginAccessIdentity(
      this,
      `CloudFrontOriginAccessIdentity`
    );

    const bucket = new s3.Bucket(this, "S3Bucket", {
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    bucket.grantRead(oai);

    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "CloudFrontDistribution",
      {
        defaultRootObject,
        aliasConfiguration,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: oai,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: `/${defaultRootObject}`,
          },
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: `/${defaultRootObject}`,
          },
        ],
      }
    );

    if (domain && zone) {
      new route53.ARecord(this, "SiteAliasRecord", {
        recordName: domain,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
        zone,
      });
    }

    new deployment.BucketDeployment(this, "DeployWithInvalidation", {
      sources: [deployment.Source.asset("../build")],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });
  }
}

module.exports = StaticWebsite;
