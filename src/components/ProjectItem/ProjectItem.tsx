import { useNavigate } from "react-router-dom";
import "./projectItem.css";

interface ProjectItemProps {
  image: string;
  name: string;
  id: number;
}

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
