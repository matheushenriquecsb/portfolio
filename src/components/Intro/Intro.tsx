import "./intro.css";
import profile from "../../assets/images/profile.png";
import pdf from "../../assets/resume.pdf";
import SocialMedia from "../SocialMedia/SocialMedia";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="helloText">Olá,</span>
          <span className="introText">
            Sou <span className="introName">Matheus Henrique</span> <br />
            Desenvolvedor Fullstack,
            <p className="introDescription">
              Como desenvolvedor possuo experiência no desenvolvimento e
              implementação
              <br />
              de aplicações que abrangem tanto o frontend como o backend, <br />
              atualmente graduado em Análise e Desenvolvimento de Sistemas
            </p>
            <a href={pdf} target="_blank">
              <button className="introButton" style={{ maxWidth: "250px" }}>
                Download Curriculo
              </button>
            </a>
            <SocialMedia />
          </span>
        </div>
        <img src={profile} alt="profile" className="profilePicture" />
      </section>
    </div>
  );
};

export default Intro;
