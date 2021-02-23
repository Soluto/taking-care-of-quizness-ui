import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root, & .MuiButtonBase-root": {
      margin: theme.spacing(1),
      flex: 1,
    },
  },
}));

function NewQuestionForm() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Category" variant="filled" />
      <TextField
        id="filled-basic"
        label="Question"
        variant="filled"
        rows={4}
        rowsMax={10}
        multiline
      />
      <TextField id="filled-basic" label="Correct Answer" variant="filled" />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 1"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 2"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 3"
        variant="filled"
      />
      <Button variant="outlined" color="primary">
        Add Question
      </Button>
    </form>
  );
}

export default NewQuestionForm;