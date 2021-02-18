import {
  Button,
  Container,
  TextField,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";

import { theme } from "./theme";

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

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
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
          <TextField
            id="filled-basic"
            label="Correct Answer"
            variant="filled"
          />
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
            Add Another Question
          </Button>
          <Button variant="outlined" color="secondary">
            Done
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
