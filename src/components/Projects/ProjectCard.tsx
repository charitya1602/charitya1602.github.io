import { Button, CardActions } from "@material-ui/core";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { CloudQueue, Code } from "@material-ui/icons";
import { FC } from "react";

type PropType = {
  name: string;
  description?: string;
  html_url: string;
  language?: string;
  homepage?: string;
};
const useStyle = makeStyles((theme) => ({
  Project: {
    backgroundColor: "rgb(30,30,30)",
    minHeight: 160,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  Name:{
    color: "rgba(255,255,255,0.87)",
  },
  Desc:{
    color: "rgba(255,255,255,0.6)",
  },
  Link: {
    color: "rgb(150, 200, 255)"
  }
}));
const ProjectCard: FC<PropType> = (props) => {
  const classes = useStyle();
  let description: String;
  if (props.description && props.description.length > 100)
    description = props.description?.slice(0, 100) + "...";
  else description = props.description || "No Description";
  return (
    <Card className={classes.Project} elevation={3}>
      <CardContent>
        <Typography variant="h5" className={classes.Name}>{props.name}</Typography>
        <Typography variant="body1" className={classes.Desc}>{description}</Typography>
      </CardContent>
      <CardActions>
        {props.homepage && (
          <Button
            startIcon={<CloudQueue />}
            href={props.homepage}
            size="small"
            className={classes.Link}
          >
            Visit
          </Button>
        )}
        <Button
          startIcon={<Code />}
          href={props.html_url}
          size="small"
          className={classes.Link}
        >
          Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
