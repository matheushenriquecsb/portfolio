import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
}

export default Footer;
