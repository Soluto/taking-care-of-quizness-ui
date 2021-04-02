import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  makeStyles,
} from "@material-ui/core";
import { Auth } from "aws-amplify";
import shuffle from "array-shuffle";

const useStyles = makeStyles({
  spinnerBox: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
});

function QuizView() {
  const classes = useStyles();

  return <></>;
}

export default QuizView;
