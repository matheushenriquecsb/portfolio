import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function PersonalExperiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SENAI Cimatec, Salvador, Bahia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Técnico em Automação Industrial
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Movida Rent a Car, Salvador, Bahia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Agente de Locação II
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024 "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduação em Análise e Desenvolvimento de Sistemas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unifacs, Salvador, Bahia
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvimento de Software - Javascript | Typescript
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Javascript Algorithms and Data Structures
          </h3>
          <h4 className="vertical-timeline-element-subtitle">FreeCodeCamp</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default PersonalExperiences;
