import "./intro.css";
import { Link } from "react-scroll";
import profile from "../../assets/images/profile.png";
import download from "../../assets/icons/download-icon.svg";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="helloText">Olá,</span>
          <span className="introText">
            Sou <span className="introName">Matheus Henrique,</span> <br />
            Desenvolvedor Fullstack,
            <p className="introDescription">
              Sou um desenvolvedor fullstack com foco para backend, formado como
              <br />
              Técnico Automação Industrial com foco na criação e desenvolvimento
              de sistemas, <br /> atualmente graduado em Análise e
              Desenvolvimento de Sistemas
            </p>
            <Link to="">
              <button className="introButton">
                Curriculo
                <img src={download} className="downloadIcon" />
              </button>
            </Link>
          </span>
        </div>
        <img src={profile} alt="profile" className="profilePicture" />
      </section>
    </div>
  );
};

export default Intro;
