export const AuthConfig = {
  region: "us-east-1",
  userPoolId: "us-east-1_S09Gmpa92",
  userPoolWebClientId: "u66u9e9tj602nh6csd73psk76",
  oauth: {
    scope: ["aws.cognito.signin.user.admin", "openid"],
    redirectSignIn: `${window.location.protocol}//${window.location.host}/login`,
    redirectSignOut: `${window.location.protocol}//${window.location.host}/logout`,
    responseType: "code",
  },
};
