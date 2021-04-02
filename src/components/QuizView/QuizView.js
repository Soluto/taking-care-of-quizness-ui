import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  makeStyles,
} from "@material-ui/core";
import { Auth } from "aws-amplify";
import shuffle from "array-shuffle";

import QuizHeader from "./QuizHeader";
import QuizCard from "./QuizCard";
import QuizAnswers from "./QuizAnswers";
import QuizNav from "./QuizNav";

const useStyles = makeStyles({
  spinnerBox: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
});

function QuizView() {
  const classes = useStyles();

  const renderLoading = () => {
    return (
      <Box className={classes.spinnerBox}>
        <CircularProgress color="primary" />
      </Box>
    );
  };

  return <></>;
}

export default QuizView;
