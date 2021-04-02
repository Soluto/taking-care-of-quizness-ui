import { Box, LinearProgress, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "30px",
    "& h2, & p": {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

function QuizHeader({ categoryName, currentQuestionNumber, totalQuestions }) {
  const classes = useStyles();

  return <></>;
}

export default QuizHeader;
