import { Container, makeStyles } from "@material-ui/core";

import NewQuestionFormHeader from "./NewQuestionFormHeader";
import NewQuestionForm from "./NewQuestionForm";

const useStyles = makeStyles((theme) => ({
  Container: {},
}));

function NewQuestion() {
  const classes = useStyles();

  return (
    <Container className={classes.Container} maxWidth="sm">
      <NewQuestionFormHeader />
      <NewQuestionForm />
    </Container>
  );
}

export default NewQuestion;
