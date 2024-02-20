import "./backend.css";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoNodejs } from "react-icons/bi";
import { SiNestjs, SiPostgresql, SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiRedis } from "react-icons/di";
import { FaAws, FaDocker, FaPhp, FaLaravel } from "react-icons/fa";

function Backend() {
  return (
    <div className="skills-container">
      <h2 className="tech-subtitle">Backend</h2>
      <div className="article-container">
        <article>
          <i className="tech-icons">
            <RiJavascriptLine />
            <p>Javascript</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <BiLogoTypescript />
            <p>Typescript</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <SiNestjs />
            <p>NestJS</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <BiLogoNodejs />
            <p>NodeJS</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <FaPhp />
            <p>PHP</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <FaLaravel />
            <p>Laravel</p>
          </i>
        </article>

        <article>
          <i className="tech-icons">
            <SiPostgresql />
            <p>PostgreSQL</p>
          </i>
        </article>

        <article>
          <i className="tech-icons">
            <DiMongodb />
            <p>MongoDB</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <DiRedis />
            <p>Redis</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <FaAws />
            <p>AWS</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <FaDocker />
            <p>Docker</p>
          </i>
        </article>
        <article>
          <i className="tech-icons">
            <SiPrisma />
            <p>Prisma</p>
          </i>
        </article>
      </div>
    </div>
  );
}

export default Backend;
