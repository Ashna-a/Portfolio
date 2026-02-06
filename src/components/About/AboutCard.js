import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Ashna Ashref</span>, a
            <span className="purple"> Senior Frontend Engineer</span> based in
            <span className="purple"> Berlin, Germany</span>.
            <br />
            <br />
            I bring over 
            <span className="purple"> 8+ years of experience </span>
            building and maintaining large-sacle 
            <span className="purple"> React.js, Next.js, TypeScript, and modern JavaScript </span>
            applications across e-commerce, healthcare, and enterprise platforms.
            <br />
            <br />
            What I do best:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Lead frontend architecture decisions for scalable and maintainable systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimize performance and Core Web Vitals for real-world production traffic
            </li>
            <li className="about-activity">
              <ImPointRight /> Build and evolve design systems used across multiple teams
            </li>
            <li className="about-activity">
              <ImPointRight /> Own features end-to-end, from technical design to production rollout
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentor engineers through code reviews and architectural guidance
            </li>
          </ul>

          <br />
          <br />

          <p style={{ textAlign: "justify" }}>
            Beyond coding, I care deeply about clean code, long-term maintainability, and building products that balance business goals with excellent user experience.  
          </p>

          <br />
          <br />

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
