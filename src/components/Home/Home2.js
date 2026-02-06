import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Senior Frontend Engineer with 8+ years of experience building and scaling high-traffic, customer-facing web applications used by millions of users globally.
              <br />
              <br />
              My expertise lies in React, Next.js, and TypeScript, with a strong focus on frontend architecture, performance optimization, and design systems that scale across teams.
              <br />
              <br />
              I’ve worked closely with product managers, designers, and backend engineers in distributed teams to deliver reliable, accessible, and high-quality user experiences.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
