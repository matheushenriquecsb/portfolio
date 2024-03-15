import "./navbar.css";
import { Link } from "react-scroll";
import chat from "../../assets/icons/chat-icon.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <span className="navbarTitle">Portfolio</span>
        <div className="navbarMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="navbarMenuItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={0}
            smooth={true}
            duration={500}
            className="navbarMenuItem"
          >
            Tech Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            offset={30}
            smooth={true}
            duration={500}
            className="navbarMenuItem"
          >
            Projetos
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={0}
            smooth={true}
            duration={500}
            className="navbarMenuItem"
          >
            Contato
          </Link>
        </div>
        <button
          className="navbarMenuButton"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={chat} className="navbarContactImg" />
          Entre em contato
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
