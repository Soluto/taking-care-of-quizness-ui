import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "4em",
    marginBottom: "2em",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25em",
  },
});

function QuizCard({ question }) {
  const classes = useStyles();

  return <></>;
}

export default QuizCard;
