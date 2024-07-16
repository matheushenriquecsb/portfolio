import chat from "../../assets/icons/chat-icon.svg";
import {
  Contact,
  ContactImg,
  Container,
  Menu,
  MenuItem,
  Title,
} from "./styles";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Title>Portfolio.</Title>
        <Menu>
          <MenuItem
            activeClass="active"
            to="intro"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
          >
            Home
          </MenuItem>
          <MenuItem
            activeClass="active"
            to="skills"
            spy={true}
            offset={0}
            smooth={true}
            duration={500}
          >
            Tech Skills
          </MenuItem>
          <MenuItem
            activeClass="active"
            to="projects"
            spy={true}
            offset={30}
            smooth={true}
            duration={500}
          >
            Projetos
          </MenuItem>
          <MenuItem
            activeClass="active"
            to="contact"
            spy={true}
            offset={24}
            smooth={true}
            duration={500}
          >
            Contato
          </MenuItem>
        </Menu>
        <Contact
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ContactImg src={chat} />
          Entre em contato
        </Contact>
      </Container>
    </div>
  );
};

export default Navbar;
