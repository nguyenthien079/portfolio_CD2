import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" onClick={props.onClick}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description.substring(0, 150)}...
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" href={props.ghLink} target="_blank" onClick={(e) => e.stopPropagation()}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
        <div className="mt-3 text-center">
          <small className="text-muted">Click to view details</small>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
