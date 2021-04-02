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
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (!answers.includes(correctAnswer)) {
    return (
      <>
        Something went wrong. There is no correct answer configured for this
        question. 😜
      </>
    );
  }

  return (
    <Grid container spacing={2}>
      {answers.map((answer) => (
        <Grid item xs={12} sm={6} key={answer}>
          <ThemeProvider
            theme={answer === correctAnswer ? correctTheme : incorrectTheme}
          >
            <Button
              disableElevation
              className={classes.answer}
              color={answer === selectedAnswer ? "primary" : "secondary"}
              variant={answer === selectedAnswer ? "contained" : "outlined"}
              onClick={() => setSelectedAnswer(answer)}
            >
              {answer}
            </Button>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}

export default QuizAnswers;
