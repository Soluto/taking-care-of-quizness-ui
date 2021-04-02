import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  nav: {
    paddingTop: "3em",
    placeContent: "space-between",
  },
  previous: {
    width: "100%",
    justifyItem: "flex-start",
  },
  next: {
    width: "100%",
    alignItems: "flex-end",
  },
});

function QuizNav({ onClickPrevious, onClickNext }) {
  const classes = useStyles();

  return <></>;
}

export default QuizNav;
