import bookingWebsite from "../../assets/images/booking_project.png";
import burguerOrder from "../../assets/images/burguer_order.png";
import foodOrderProject from "../../assets/images/food-order-delivery.png";
import githubProject from "../../assets/images/github_project.png";
import { Button, Container, Image, Title, Wrapper } from "./styles";

const Projects = () => {
  return (
    <div>
      <Container id="projects">
        <Title>Projetos</Title>
        <Wrapper>
          <a href="https://booking-rent.netlify.app" target="_blank">
            <h3>Booking Clone Fullstack</h3>
            <h4>ReactJS | NestJS | MongoDB</h4>
            <Image src={bookingWebsite} alt="booking-project" />
          </a>
          <a href="https://delivery-food-order.netlify.app" target="_blank">
            <h3>Food Order Delivery FullStack</h3>
            <h4>ReactJS | Nestjs | PostgreSQL </h4>
            <Image src={foodOrderProject} alt="food-project" />
          </a>
          <a href="https://burguer-order-menu.netlify.app" target="_blank">
            <h3>Burguer Order Fullstack</h3>
            <h4>Vue.js | CSS | NodeJS</h4>
            <Image src={burguerOrder} alt="burguer-order" />
          </a>
          <a href="https://githubfinder-api.netlify.app" target="_blank">
            <h3>Github Finder</h3>
            <h4>ReactJS | CSS | Axios</h4>
            <Image src={githubProject} alt="github-finder" />
          </a>
        </Wrapper>
        <Button
          href="https://github.com/mButtontheushenriquecsb"
          target="_blank"
        >
          <button>Veja mais</button>
        </Button>
      </Container>
    </div>
  );
};

export default Projects;
