import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
 
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          A.V.M.D Institute Swain Etmadpur Agra
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          GLA UNIVERSITY,MATHURA
            
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Diploma in Computer Science and Engineering
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<HomeWorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Adaan Digital Solutions.pvt.ltd
          </h4>
          <p>Developed the UI part of websites.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<HomeWorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MERN Stack Engineer 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>
          An effective communicator with excellent time-management and leadership skills. Demonstrated capability of developing applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;