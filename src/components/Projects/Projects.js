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
              title="Neiman Marcus (Bergdorf Goodman)"
              description={[
                "Led frontend engineering for a global luxury e-commerce platform.",
                "Focused on complex checkout flows and high-availability architecture."
              ]}
              impact={[
                "Reduced JS bundle size by 30%",
                "Optimized Core Web Vitals for shopping flows",
                "Maintained 100% uptime during peak traffic"
              ]}
              tech="React, Next.js, TypeScript, Tailwind CSS, REST, Web Performance"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Denny’s Diner — Customer-Facing Web Platform"
              description={[
                "Enhanced features for Denny’s customer-facing web platform to improve engagement and UI consistency across devices.",
                "Contributed to feature development, frontend performance improvements, and maintaining a consistent design system."
              ]}
              impact={[
                "Improved page load performance and interaction responsiveness",
                "Increased UI consistency across multiple user journeys"
                ]}
              tech="Angular, SASS, Responsive UI, Performance Optimization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Shake Shack — Third-Party Offers Integration"
              description={[
                "Integrated third-party offer and promotion functionality into Shake Shack’s customer-facing website.",
                "Worked on frontend integrations to ensure seamless user experience and reliable data handling across systems."
              ]}
              impact={[
                "Enabled users to access promotions seamlessly",
                "Improved engagement with promotional features"
                ]}
              tech="React.js, Redux Toolkit, REST APIs, SASS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Chico’s FAS — Stylist Platform (POC)"
              description = {[
                "Developed a proof-of-concept platform to centralize stylist workflows including customer profiles and appointment management.",
                "Focused on building reusable UI components and clean architecture."
              ]}
              impact={[
                "Improved operational efficiency for stylists",
                "Validated product direction through a working prototype"
                ]}
              tech="React.js, TypeScript, SASS, GraphQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="MediWeightLoss — User & Admin Platform"
              description ={[
                "Built a user-facing application and admin dashboard for a weight-loss program, supporting progress tracking and personalized plans.",
                "Owned frontend development and API integration."
              ]}
              impact={[
                "Enabled structured progress tracking for users",
                "Delivered a scalable admin interface for program management"
                ]}
              tech="React.js, Redux, REST APIs, Authentication (JWT), SASS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="VR Clinic — Administrative Dashboard"
              description = {[
                "Built an internal admin dashboard for managing users, departments, and configurations for a virtual reality clinical application.",
                "Focused on role-based access control and maintainability."
              ]}
              impact={[
                "Improved operational efficiency for clinic administrators",
                "Delivered a secure and scalable internal tool"
                ]}
              tech="React.js, Redux, GraphQL, LESS, Role-based Access"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
