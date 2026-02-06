import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards({ title, description, impact, tech }) {
  return (
    <Card className="project-card-view h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "22px", fontWeight: "700", color: "#c770f0" }}>
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}>
          {description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
            ))}
        </Card.Text>

        {impact && (
          <ul className="ps-3 mb-3" style={{ fontSize: "14px" }}>
            {impact.map((item, index) => (
              <li key={index} className="mb-1"><strong>{item}</strong></li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <Card.Text style={{ fontSize: "13px" }}>
            <span className="text-primary fw-bold">Tech Stack:</span> {tech}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;