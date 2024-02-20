import "./frontend.css";
import { SiTailwindcss } from "react-icons/si";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";

function Frontend() {
  return (
    <div className="skills-container">
      <h2 className="tech-subtitle">Frontend</h2>
      <div className="article-container">
        <article>
          <i className="tech-icons">
            <DiHtml5 />
            <p>HTML5</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <DiCss3 />
            <p>CSS3</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <DiReact />
            <p>ReactJS</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <FaVuejs />
            <p>VueJS</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <SiTailwindcss />
            <p>Tailwind</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <SiAuth0 />
            <p>Auth0</p>
          </i>
        </article>
      </div>
    </div>
  );
}

export default Frontend;
