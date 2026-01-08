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
              I’m a Senior Frontend Engineer with 8+ years of experience building and scaling high-performance, transactional web applications used across international markets. My core expertise lies in <b>React.js, Next.js, TypeScript, and modern JavaScript</b> , with a strong focus on secure checkout, payment, and e-commerce flows. 
              <br />
              <br />
              I enjoy working at the intersection of frontend architecture and backend systems, designing resilient solutions using <b>REST</b> and <b> GraphQL APIs</b>, <b>SSR</b>, and <b>BFF</b> patterns, while ensuring security and compliance aligned with <b>OWASP</b> standards. Beyond implementation, I’m passionate about defining <b>frontend technical strategy</b>, improving <b>performance and conversion</b>, and <b>mentoring engineers</b> to deliver maintainable, production-ready systems.
              <br />
              <br />
              Whenever possible, I leverage modern tooling and <b>AI-assisted development </b>to optimize workflows, reduce refactoring cycles, and ship faster — always with an emphasis on <b>clean code, performance, and user experience</b>.
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
