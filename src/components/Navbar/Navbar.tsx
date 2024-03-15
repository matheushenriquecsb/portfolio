import "./navbar.css";
import { Link } from "react-scroll";
import chat from "../../assets/icons/chat-icon.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <span className="navbarTitle">Portfolio</span>
        <div className="navbarMenu">
          <Link to="" className="navbarMenuItem">
            Home
          </Link>
          <Link to="" className="navbarMenuItem">
            Tech Skills
          </Link>
          <Link to="" className="navbarMenuItem">
            Projetos
          </Link>
          <Link to="" className="navbarMenuItem">
            Contato
          </Link>
        </div>
        <button className="navbarMenuButton">
          <img src={chat} className="navbarContactImg" />
          Entre em contato
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
