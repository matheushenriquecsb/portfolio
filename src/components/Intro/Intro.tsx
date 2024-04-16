import "./intro.css";
import profile from "../../assets/images/profile.png";
import pdf from "../../assets/resume.pdf";
import SocialMedia from "../SocialMedia/SocialMedia";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="helloText">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Matheus Henrique</span> <br />
            Fullstack Developer,
            <p className="introDescription">
              As a developer, I have experience in developing and maintenance
              <br />
              of applications that cover both the frontend and the backend,
              <br />
            </p>
            <a href={pdf} target="_blank">
              <button className="introButton" style={{ maxWidth: "250px" }}>
                See my resume
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
