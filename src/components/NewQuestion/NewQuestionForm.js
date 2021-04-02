import { useState } from "react";
import { Button, TextField, makeStyles, Divider } from "@material-ui/core";
import { Auth } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root, & .MuiButtonBase-root": {
      margin: theme.spacing(1),
      flex: 1,
    },
  },
  divider: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  bottomSpace: {
    paddingBottom: "3em",
  },
}));

function NewQuestionForm() {
  const classes = useStyles();

  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");

  const setDefaultState = () => {
    setCategory("");
    setQuestion("");
    setCorrectAnswer("");
    setIncorrectAnswer1("");
    setIncorrectAnswer2("");
    setIncorrectAnswer3("");
  };

  const submitQuestion = async (event) => {
    event.preventDefault();
    const accessToken = (await Auth.currentSession())
      .getIdToken()
      .getJwtToken();
    console.log((await Auth.currentSession()).getIdToken().getJwtToken());
    try {
      await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          questionText: question,
          answers: {
            correctAnswer: correctAnswer,
            incorrectAnswers: [
              incorrectAnswer1,
              incorrectAnswer2,
              incorrectAnswer3,
            ],
          },
        }),
      });
      setDefaultState();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={submitQuestion}
    >
      <TextField
        id="filled-basic"
        label="Category"
        variant="filled"
        className={classes.bottomSpace}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Question"
        variant="filled"
        rows={4}
        rowsMax={10}
        multiline
        className={classes.bottomSpace}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Correct Answer"
        variant="filled"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 1"
        variant="filled"
        value={incorrectAnswer1}
        onChange={(e) => setIncorrectAnswer1(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 2"
        variant="filled"
        value={incorrectAnswer2}
        onChange={(e) => setIncorrectAnswer2(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 3"
        variant="filled"
        value={incorrectAnswer3}
        onChange={(e) => setIncorrectAnswer3(e.target.value)}
      />
      <Divider className={classes.divider} />
      <Button type="submit" variant="outlined" color="primary">
        Add Question
      </Button>
    </form>
  );
}

export default NewQuestionForm;
