import { useParams } from "react-router-dom";
import { projectLists } from "../../helpers/ProjectList";
import "./projectDisplay.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/icons-material/Computer";
import "./projectDisplay.css";

function Project() {
  const { id } = useParams<{ id: string }>();
  const project = projectLists[Number(id)];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <div className="social_links">
        <a href={project.link} target="_blank">
          <GitHubIcon />
        </a>
        <a href={project.link} target="_blank">
          <Link />
        </a>
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
  );
}

export default Project;
