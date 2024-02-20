import "./info.css";

import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhoneIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import Backend from "../Backend/Backend";
import Frontend from "../Frontend/Fontend";

function Info() {
  return (
    <div className="info">
      <div className="about">
        <h2>Hi, I'm Matheus Henrique</h2>
        <div className="describe">
          <p>
            Desenvolvedor FullStack, graduado em Análise e Desenvolvimento de
            Sistemas
          </p>
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
        <div>
          <Link to={"src/assets/Curriculo.pdf"} target="_blank" download>
            <Button
              className="link-curriculo"
              size="large"
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Curriculo
            </Button>
          </Link>
          <Link
            to={"https://api.whatsapp.com/send?phone=5571991910098"}
            target="_blank"
            className="link-whatsapp"
          >
            <Button
              component="label"
              size="large"
              variant="contained"
              startIcon={<PhoneIcon />}
            >
              Entre em contato comigo
            </Button>
          </Link>
        </div>
      </div>
      <section id="experience">
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
