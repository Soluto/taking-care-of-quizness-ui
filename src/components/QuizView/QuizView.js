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
  const [questions, setQuestions] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const accessToken = (await Auth.currentSession())
        .getIdToken()
        .getJwtToken();
      const res = await fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      });
      const json = (await res.json()).body;
      const parsed = JSON.parse(json);
      setQuestions(parsed);
    };
    fetchQuestions();
  }, []);

  const onClickNext = () =>
    setQuestionIndex((currentIndex) => (currentIndex + 1) % questions.length);
  const onClickPrevious = () =>
    setQuestionIndex(
      (currentIndex) => (currentIndex - 1 + questions.length) % questions.length
    );

  const renderQuiz = () => {
    console.log("in renderQuiz");
    console.log(questions);
    const question = questions[questionIndex];
    console.log(question);
    const { correctAnswer, incorrectAnswers } = question.answers;
    const answers = shuffle([correctAnswer, ...incorrectAnswers]);

    return (
      <>
        <QuizHeader
          categoryName={question.category}
          currentQuestionNumber={questionIndex + 1}
          totalQuestions={questions.length}
        />
        <QuizCard question={question.questionText} />
        <QuizAnswers answers={answers} correctAnswer={correctAnswer} />
        <QuizNav onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
      </>
    );
  };

  const renderLoading = () => {
    return (
      <Box className={classes.spinnerBox}>
        <CircularProgress color="primary" />
      </Box>
    );
  };

  return (
    <Container maxWidth="md">
      {questions ? renderQuiz() : renderLoading()}
    </Container>
  );
}

export default QuizView;
