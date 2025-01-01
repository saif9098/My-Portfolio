import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate()
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isSrc && props.demoLink ?(
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            
          >
            <CgWebsite /> &nbsp;
            {"Go Live"}
          </Button>
        ) :   <Button
        variant="primary"
        onClick={()=>navigate("/mini-projects")}
        target="_blank"
        style={{ marginLeft: "10px" }}
        
      >
        <CgWebsite /> &nbsp;
        {"Get Links"}
      </Button>}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
