import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of enterprise and client-facing applications I’ve
          contributed to as a Senior Frontend Engineer.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Neiman Marcus Group (Bergdorf Goodman)"
              description="Collaborated on building a high-performance React frontend for Bergdorf Goodman, delivering a responsive luxury e-commerce experience aligned with brand standards."
              tech="React.js, Redux (Toolkit), Next.js, TypeScript, REST APIs, Performance Optimization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Denny’s Diner Web Platform"
              description="Enhanced features of Denny’s customer-facing web platform to improve user engagement, UI/UX consistency, and frontend performance. Contributed to feature development and performance optimization."
              tech="Angular, SASS, Responsive UI, Performance Optimization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Shake Shack – Offers Integration"
              description="Integrated third-party offer functionality into Shake Shack’s website, enabling users to access promotions seamlessly and improving overall engagement."
              tech="React.js, Redux (Toolkit), Next.js, REST APIs, SASS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Chico’s FAS – Stylist Platform (POC)"
              description="Developed a Proof of Concept platform empowering stylists by centralizing customer profiles and appointment management, improving efficiency and premium customer experience."
              tech="React.js, TypeScript, SASS, REST APIs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="MediWeightLoss Platform"
              description="Developed a user-facing application and admin portal for a weight-loss program, enabling progress tracking, content management, and personalized plans."
              tech="React.js, Redux, REST APIs, Authentication (JWT), SASS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="VR-Clinic Admin Dashboard"
              description="Built an administrative dashboard for a virtual reality clinical application to manage users, departments, and configurations efficiently."
              tech="React.js, Redux, REST APIs, LESS, Role-based Access"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
