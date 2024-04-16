import "./projects.css";
import burguerOrder from "../../assets/images/burguer_order.png";
import bookingWebsite from "../../assets/images/booking_project.png";
import githubProject from "../../assets/images/github_project.png";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2 className="projectTitle">Projects</h2>
        <span className="projectDescription">
          Below is a real application developed with the aim of learning, and
          seeking to improve my knowledge in technology.
        </span>
        <div className="projectImgs">
          <a href="https://burguer-order-menu.netlify.app" target="_blank">
            <img
              src={burguerOrder}
              alt="burguer-order"
              className="projectImg"
            />
            <h4>Vue.js | Laravel</h4>
          </a>

          <a href="https://booking-rent.netlify.app" target="_blank">
            <img
              src={bookingWebsite}
              alt="booking-project"
              className="projectImg"
            />
            <h4>ReactJS | NestJS</h4>
          </a>
          <a href="https://githubfinder-api.netlify.app" target="_blank">
            <img
              src={githubProject}
              alt="github-finder"
              className="projectImg"
            />
            <h4>ReactJS | Axios</h4>
          </a>
        </div>
        <a href="https://github.com/matheushenriquecsb" target="_blank">
          <button className="projectMoreButton">See More</button>
        </a>
      </section>
    </div>
  );
};

export default Projects;
