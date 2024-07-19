import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div>
      <Container id="intro">
        <IntroText>
          <IntroName>{t("introHello")},</IntroName>
          <span>
            {t("intro")}
            <Name> Matheus Henrique</Name> <br />
            {t("introRole")},
            <AboutMe>
              {t("intro1")}
              <br />
              {t("intro2")}
              <br />
              {t("intro3")}
              <br />
            </AboutMe>
            <a href={pdf} target="_blank">
              <Resume style={{ maxWidth: "250px" }}>{t("resume")}</Resume>
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
