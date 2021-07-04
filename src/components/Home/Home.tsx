import { Typography } from "@material-ui/core";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles((theme) => ({
  name: { color: "rgba(255, 255, 255, 0.87)" },
  text: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.87)",
  },
  Desc: {
    textAlign: "center",
    maxWidth: 600,
    margin: theme.spacing(1, "auto", 2),
    color: "rgba(255, 255, 255, 0.6)",
  },
  Box: {
    margin: theme.spacing(24, 0),
    textAlign: "center",
  },
  Contact: {
    margin: theme.spacing(2, "auto"),
    display: "flex",
    justifyContent: "center",
  },
  Icon: {
    margin: theme.spacing(0, 2),
  },
  Link: {
    display: "block",
    padding: 2,
  },
}));

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.Box}>
      <Typography variant="h3" className={classes.text}>
        Hi there! I'm <span className={classes.name}>Charitya</span>
      </Typography>
      <Typography variant="h5" className={classes.Desc}>
        I am a currently pursuing my bachelors degree in ICT. I am currently interested in web technologies
        like React, TypeScript, Node.js.
      </Typography>
      <div className={classes.Contact}>
        <a href="https://github.com/charitya1602" className={classes.Link}>
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.Icon}
            color="white"
            size="3x"
          />
        </a>
        <a href="mailto:charitya1602@gmail.com" className={classes.Link}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={classes.Icon}
            color="white"
            size="3x"
          />
        </a>
        <a
          href="https://linkedin.com/in/charitya-dhedhi-a9a76b201"
          className={classes.Link}
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={classes.Icon}
            color="white"
            size="3x"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
