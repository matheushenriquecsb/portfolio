import "./projectItem.css";

interface ProjectItemProps {
  image: string;
  name: string;
}

function ProjectItem({ image, name }: ProjectItemProps) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
