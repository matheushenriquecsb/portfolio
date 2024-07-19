import { useTranslation } from "react-i18next";
import chat from "../../assets/icons/chat-icon.svg";
import TranslateButton from "../TranslateButton/TranslateButton";
import {
  Contact,
  ContactImg,
  Container,
  Menu,
  MenuItem,
  Title,
} from "./styles";

const Navbar = () => {
  const { t } = useTranslation();

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
            {t("navbarProjects")}
          </MenuItem>
          <MenuItem
            activeClass="active"
            to="contact"
            spy={true}
            offset={24}
            smooth={true}
            duration={500}
          >
            {t("navbarContact")}
          </MenuItem>
        </Menu>
        <TranslateButton />
        <Contact
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ContactImg src={chat} />
          {t("navbarcontactUs")}
        </Contact>
      </Container>
    </div>
  );
};

export default Navbar;
