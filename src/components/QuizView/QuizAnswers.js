import { useState } from "react";
import {
  Button,
  createMuiTheme,
  Grid,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";

import { theme } from "../../theme";

const useStyles = makeStyles(() => ({
  answer: { width: "100%" },
}));

const correctTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: { main: "#C8FFF4" },
  },
});

const incorrectTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: { main: "#F5DBDB" },
  },
});

function QuizAnswers({ answers, correctAnswer }) {
  const classes = useStyles();

  return <></>;
}

export default QuizAnswers;
