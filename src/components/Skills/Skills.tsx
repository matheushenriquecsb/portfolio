import "./skills.css";

import backend from "../../assets/icons/node.svg";
import frontend from "../../assets/icons/react.svg";
import database from "../../assets/icons/database.svg";

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">Tech Skills</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={frontend} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Frontend</h2>
              <p>HTML5 | CSS3 | ReactJS | Auth0 | VueJS | TalwindCSS</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={backend} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Backend</h2>
              <p>
                Javascript | Typescript | NestJS | NodeJS | ExpressJS | Docker |
                Jest | AWS S3 | Firebase | Stripe | Git | Github 
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={database} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Database</h2>
              <p>SQL | SQLServer | PostgreSQL | Redis | MongoDB | TypeOrm | Prisma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
