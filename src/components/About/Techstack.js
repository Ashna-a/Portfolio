import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiGraphql, SiJest, SiCypress, SiTerraform } from "react-icons/si";
import { TbApi, TbBrandOauth, TbTopologyStar, TbDatabase } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import ReactIcon from "../../Assets/TechIcons/React.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import { MdSecurity } from "react-icons/md";



function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Core Frontend */}
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="React" />
          <div className="tech-icons-text">React.js</div>
         </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs fontSize={"26px"} />
          <div className="tech-icons-text">Next.js (SSR / ISR)</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Typescript} alt="TypeScript" />
          <div className="tech-icons-text">TypeScript</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="JavaScript" />
          <div className="tech-icons-text">JavaScript (ES6+)</div>
        </Col>
       </Row>

     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* State Management */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="Redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbDatabase fontSize={"26px"} />
        <div className="tech-icons-text">Zustand</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="ReactQuery" />
          <div className="tech-icons-text">React Query</div>
      </Col>

      {/* APIs & Architecture */}
      <Col xs={4} md={2} className="tech-icons">
        <TbApi fontSize={"26px"} />
        <div className="tech-icons-text">REST APIs</div>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql fontSize={"26px"} />
        <div className="tech-icons-text">GraphQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbApi fontSize={"26px"} />
        <div className="tech-icons-text">OpenAPI</div>
      </Col> 

       {/* Styling */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="MUI" />
        <div className="tech-icons-text">Material UI</div>
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJest fontSize={"26px"} />
        <div className="tech-icons-text">Jest</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress fontSize={"26px"} />
        <div className="tech-icons-text">Cypress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="RTL" />
          <div className="tech-icons-text">React Testing Library</div>
      </Col>
    </Row >

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* DevOps & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform fontSize={"26px"} />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws size={30} />
        <div className="tech-icons-text">AWS</div>
      </Col>

      {/* Tools & Security */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandOauth fontSize={"26px"} />
        <div className="tech-icons-text">OAuth2 / JWT</div>
      </Col>
          <Col xs={4} md={2} className="tech-icons">
        <TbTopologyStar fontSize={"26px"} />
        <div className="tech-icons-text">WebSockets</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdSecurity size={18} />
        <div className="tech-icons-text">OWASP</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
