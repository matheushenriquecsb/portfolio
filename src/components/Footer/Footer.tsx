import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p className="copyright">Copyright &#169; 2024. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
