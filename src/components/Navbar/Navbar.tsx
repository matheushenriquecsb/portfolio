import "./navbar.css";
import { Link } from "react-scroll";
import chat from "../../assets/icons/chat-icon.svg";
import menu from "../../assets/icons/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <span className="navbarTitle">Portfolio.</span>
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
            offset={24}
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
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="listItemMenu"
            onClick={() => setShowMenu(!showMenu)}
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
            className="listItemMenu"
            onClick={() => setShowMenu(false)}
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
            className="listItemMenu"
            onClick={() => setShowMenu(false)}
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
            className="listItemMenu"
            onClick={() => setShowMenu(false)}
          >
            Contato
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
