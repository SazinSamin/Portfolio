import ProjectCard3 from "./Cards/ProjectCard3";
import ProjectCard2 from "./Cards/ProjectCard2";
import style from "./project.module.css";
import ProjectCard4 from "./Cards/ProjectCard4";
import ProjectCard5 from "./Cards/ProjectCard5";
import ProjectCard6 from "./Cards/ProjectCard6";

const Projects = () => {
  return (
    <div className={style.Project}>
      <h1>Projects</h1>
      <div className={style.Projects}>
        <ProjectCard2 />
        <ProjectCard3 />
        <ProjectCard4 />
        <ProjectCard5 />
        <ProjectCard6 />
      </div>
    </div>
  );
};

export default Projects;
