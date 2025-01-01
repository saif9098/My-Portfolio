import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iNote from "../../Assets/Projects/i-note.png";
import classSync from "../../Assets/Projects/class-sync.png";
import eCom from "../../Assets/Projects/e-com.png";
import job from "../../Assets/Projects/job.png";
import miniprojects from "../../Assets/Projects/mini-project.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classSync}
              isSrc={false}
              title="Class-Sync"
              description="Class-Sync is a dynamic web application designed to enhance communication and collaboration between students and teachers. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Class-Sync provides a streamlined platform for managing attendance, resources, notifications, feedback, and doubts in an intuitive and user-friendly interface."
              ghLink="https://github.com/saif9098/Class-Sync"
              demoLink="https://class-sync-55o7e8s85-saif-razas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNote}
              isSrc={false}
              title="I-notebook"
              description="A powerful and intuitive Notes Management System built using the MERN (MongoDB, Express, React, Node.js) stack. This application enables users to seamlessly create, read, update, and delete notes while offering advanced features like user authentication, speech recognition, text-to-speech, and a robust search functionality for easy note management."
              ghLink="https://github.com/saif9098/Notes-Mangement-System"
              demoLink="https://notes-management-system-7fga94waf-saif-razas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isSrc={false}
              title="Career-Jump"
              description="Career-jump is a modern job portal application designed to bridge the gap between job seekers and companies. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), It provides an intuitive platform for companies to manage job postings and for users to find and apply for jobs based on their skills and interests."
              ghLink="https://github.com/saif9098/Job-portal"
              demoLink="https://career-jump-job-portal-1qxfx9gpt-saif-razas-projects.vercel.app/"              
            />
          </Col>
          <h1 className="project-heading">
          My Other <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on Previously.
        </p>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isSrc={false}
              title="E-commerce"
              description="This is a full-featured E-Commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website allows users to browse, purchase, and sell products, with a secure payment integration."
              ghLink="https://github.com/saif9098/e-commerce-webApp"
              demoLink="https://e-commerce-webapp-m24ubhgc4-saif-razas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniprojects}
              isSrc={false}
              title="Mini-Projects"
              description="These are the small and intresting project I developed, when I Started working on Real-life projects. In these projects, I have used lots of basic but engaging feautures, "
              ghLink="https://github.com/saif9098?tab=repositories"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
