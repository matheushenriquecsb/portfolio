import ProjectItem from "../components/ProjectItem/ProjectItem";
import "../components/ProjectItem/projectItem.css";
import { projectLists } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1> Personal Projects</h1>
      <div className="projectList">
        {projectLists.map((projects, index) => {
          return (
            <ProjectItem
              id={index}
              name={projects.name}
              image={projects.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
