import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ashna Ashref</span>, a{" "}
            <span className="purple">Senior Frontend Engineer</span> based in{" "}
            <span className="purple">Berlin, Germany</span>.
            <br />
            <br />
            I bring <span className="purple">8+ years of experience</span>{" "}
            building and scaling{" "}
            <span className="purple">
              high-performance, transactional web applications
            </span>{" "}
            for global markets using{" "}
            <span className="purple">
              React.js, Next.js, TypeScript, and modern JavaScript
            </span>
            .
            <br />
            <br />
            My expertise lies in architecting{" "}
            <span className="purple">
              secure checkout, payment, and e-commerce flows
            </span>{" "}
            using REST and GraphQL APIs, while ensuring performance,
            accessibility, and OWASP-aligned security standards.
            <br />
            <br />
            Beyond coding, I enjoy mentoring engineers, shaping frontend
            architecture, and leveraging AI-assisted tools to ship
            scalable, maintainable products.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing scalable frontend architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizing performance & conversion flows
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring teams & reviewing architecture
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build software that scales — technically, securely, and
            meaningfully."
          </p>
          <footer className="blockquote-footer">Ashna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
