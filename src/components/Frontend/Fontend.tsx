import "./frontend.css";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";

function Frontend() {
  return (
    <div className="skills-container">
      <h2 className="tech-subtitle">Frontend</h2>
      <div className="article-container">
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>React</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>CSS</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Tailwind</h3>
            <p>Básico</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Bootstrap</h3>
            <p>Básico</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>HTML</h3>
            <p>Experienced</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Frontend;
