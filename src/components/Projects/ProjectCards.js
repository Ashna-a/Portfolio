import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.tech && (
          <Card.Text className="project-tech">
            <strong>Tech Stack:</strong> {props.tech}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
