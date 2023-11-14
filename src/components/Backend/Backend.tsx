import "./backend.css";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";

function Backend() {
  return (
    <div className="skills-container">
      <h2 className="tech-subtitle">Backend</h2>
      <div className="article-container">
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Javascript</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Typescript</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>NestJs</h3>
            <p>Avançado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>NodeJs</h3>
            <p>Avançado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Docker</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>PostgreSQL</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>SQLServer</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>MongoDB</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Redis</h3>
            <p>Moderado</p>
          </div>
        </article>
        <article>
          <CheckBoxOutlined />
          <div>
            <h3>Amazon AWS</h3>
            <p>Básico</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Backend;
