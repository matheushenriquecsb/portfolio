import profile from "../../assets/images/profile.png";
import pdf from "../../assets/resume.pdf";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  AboutMe,
  Container,
  IntroName,
  IntroText,
  Name,
  ProfilePicture,
  Resume,
} from "./styles";

const Intro = () => {
  return (
    <div>
      <Container id="intro">
        <IntroText>
          <IntroName>Olá,</IntroName>
          <span>
            Me chamo <Name>Matheus Henrique</Name> <br />
            Desenvolvedor Fullstack,
            <AboutMe>
              +2 anos de experiência atuando com foco em NodeJS e ReactJS.
              <br />
              Atuei no desenvolvimento e manutenção de Restful APIs, e criação
              <br />
              de interfaces modernas e interativas para usuários.
              <br />
            </AboutMe>
            <a href={pdf} target="_blank">
              <Resume style={{ maxWidth: "250px" }}>Curriculo</Resume>
            </a>
            <SocialMedia />
          </span>
        </IntroText>
        <ProfilePicture src={profile} alt="profile" />
      </Container>
    </div>
  );
};

export default Intro;
