import { Card, CardContent, makeStyles } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  Project: {
    backgroundColor: "rgba(30, 30, 30)",
    width: "100%",
    height: 160,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Brand: {
    height: "1rem",
    display: "block",
    width: "60%",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  Body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%"
  },
  Description: {
    height: "1rem",
    display: "block",
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
}));

const EmptyCard: FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.Project}>
      <CardContent className={classes.Body}>
        <span className={classes.Brand}></span>
        <span className={classes.Description}></span>
        <span className={classes.Description}></span>
      </CardContent>
    </Card>
  );
};

export default EmptyCard;
