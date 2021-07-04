import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Home, Code } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  actions: { marginLeft: "auto" },
  root: {
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "rgb(30, 30, 30)",
  },
  active:{
    borderBottom: "2px solid rgba(255, 255, 255, 0.87)",
    borderRadius: 0,
  },
  subRoot: { width: "100%", display: "flex", alignItems: "center" },
  brand:{}
}));

const Navbar: FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <Container maxWidth="xl" className={classes.subRoot}>
          <div className={classes.actions}>
            <Button
              exact
              to="/"
              color="inherit"
              component={NavLink}
              activeClassName={classes.active}
              startIcon={<Home />}
            >
              Home
            </Button>
            <Button
              to="/projects"
              color="inherit"
              component={NavLink}
              activeClassName={classes.active}
              startIcon={<Code />}
            >
              Projects
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
