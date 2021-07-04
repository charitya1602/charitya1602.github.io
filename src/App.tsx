import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Container, makeStyles } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";
import Projects from "./container/Projects/Projects";
import Animation from "./container/Animatior/Animation";

const useStyles = makeStyles((theme) => ({
  offset: {
    paddingTop: 75,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={classes.offset}>
        <Animation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </>
  );
}

export default App;
