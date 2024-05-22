import "./projects.css";
import burguerOrder from "../../assets/images/burguer_order.png";
import bookingWebsite from "../../assets/images/booking_project.png";
import githubProject from "../../assets/images/github_project.png";
import foodOrderProject from "../../assets/images/food-order-delivery.png";

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
          <a href="https://booking-rent.netlify.app" target="_blank">
            <h3>Booking Clone Fullstack</h3>
            <h4>ReactJS | NodeJS | MongoDB</h4>
            <img
              src={bookingWebsite}
              alt="booking-project"
              className="projectImg"
            />
          </a>
          <a href="https://delivery-food-order.netlify.app" target="_blank">
            <h3>Food Order Delivery FullStack</h3>
            <h4>ReactJS | NodeJS | PostgreSQL </h4>
            <img
              src={foodOrderProject}
              alt="food-project"
              className="projectImg"
            />
          </a>
          <a href="https://burguer-order-menu.netlify.app" target="_blank">
            <h3>Burguer Order Fullstack</h3>
            <h4>Vue.js | NodeJS</h4>
            <img
              src={burguerOrder}
              alt="burguer-order"
              className="projectImg"
            />
          </a>
          <a href="https://githubfinder-api.netlify.app" target="_blank">
            <h3>Github Finder</h3>
            <h4>ReactJS</h4>
            <img
              src={githubProject}
              alt="github-finder"
              className="projectImg"
            />
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
