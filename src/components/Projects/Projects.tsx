import "./projects.css";
import burguerOrder from "../../assets/images/burguer_order.png";
import bookingWebsite from "../../assets/images/booking_project.png";
import githubProject from "../../assets/images/github_project.png";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2 className="projectTitle">Projetos</h2>
        <span className="projectDescription">
          Segue abaixo aplicação reais desenvolvidas com o intuito de
          aprendizado, e buscando aprimorar meus conhecimentos em tecnologia.
        </span>
        <div className="projectImgs">
          <a href="https://burguer-order-menu.netlify.app" target="_blank">
            <img
              src={burguerOrder}
              alt="burguer-order"
              className="projectImg"
            />
          </a>
          <a href="https://booking-rent.netlify.app" target="_blank">
            <img
              src={bookingWebsite}
              alt="booking-project"
              className="projectImg"
            />
          </a>
          <a href="https://githubfinder-api.netlify.app" target="_blank">
            <img
              src={githubProject}
              alt="github-finder"
              className="projectImg"
            />
          </a>
        </div>
        <a href="https://github.com/matheushenriquecsb" target="_blank">
          <button className="projectMoreButton">Veja Mais</button>
        </a>
      </section>
    </div>
  );
};

export default Projects;
