import ProjectCard from "../../components/Projects/ProjectCard";
import { FC } from "react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import EmptyCard from "../../components/Projects/EmptyCard";

type Project = {
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  homepage?: string;
};

const Projects: FC = () => {
  const [apiData, setApiData] = useState<Project[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/charitya1602/repos")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
  let list: JSX.Element[];
  if (apiData.length) {
    list = apiData.map((item, i) => (
      <Grid item xs={12} md={6} key={item.name}>
        <ProjectCard key={i} {...item} />
      </Grid>
    ));
  } else {
    list = [...new Array(6)].map((item, i) => (
      <Grid container item xs={12} md={6} key={i}>
        <EmptyCard key={i} />
      </Grid>
    ));
  }
  return (
    <Grid container spacing={2}>
      {list}
    </Grid>
  );
};

export default Projects;
