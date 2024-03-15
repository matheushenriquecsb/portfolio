import "./intro.css";
import profile from "../../assets/images/profile.png";
import pdf from "../../assets/resume.pdf";

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
              Sou um desenvolvedor fullstack com foco para backend, formado como
              <br />
              Técnico Automação Industrial com foco na criação e desenvolvimento
              de sistemas, <br /> atualmente graduado em Análise e
              Desenvolvimento de Sistemas
            </p>
            <a href={pdf} target="_blank">
              <button className="introButton" style={{ maxWidth: "250px" }}>
                Download Curriculo
              </button>
            </a>
          </span>
        </div>
        <img src={profile} alt="profile" className="profilePicture" />
      </section>
    </div>
  );
};

export default Intro;
