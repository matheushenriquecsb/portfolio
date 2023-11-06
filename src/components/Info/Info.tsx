import "./info.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import Frontend from "../Frontend/Fontend";
import Backend from "../Backend/Backend";

function Info() {
  return (
    <div className="info">
      <div className="about">
        <h2>Hi, I'm Matheus Henrique</h2>
        <div className="describe">
          <p>A software developer with passion for learning and developing</p>
          <a
            href="https://linkedin.com/in/matheus-henrique-batista-120821"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:matheus.mhg2@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/matheushenriquecsb" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <section>
        <p className="section-title">Explore My</p>
        <h1 className="title">Tech Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <Frontend />
            <Backend />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
