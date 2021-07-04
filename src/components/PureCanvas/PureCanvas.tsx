import { makeStyles } from "@material-ui/core";
import React, { FC } from "react";

type PropType = {
  contextRef: any;
}

const useStyles = makeStyles((theme) => ({
  Canvas:{
    zIndex:-1,
    position: "fixed",
    top:0,
    left:0,
  }
}));

const PureCanvas: FC<PropType> = (props) => {
  const classes = useStyles();
  return (
    <canvas
      className={classes.Canvas}
      ref={(node) =>
        node ? props.contextRef(node.getContext("2d")) : null
      }
    />
  );
};

export default React.memo(PureCanvas);
