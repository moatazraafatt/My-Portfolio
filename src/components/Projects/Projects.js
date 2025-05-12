import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/DentalHub.png";
import emotion from "../../Assets/Projects/Pig_Game.png";
import editor from "../../Assets/Projects/Meal.png";
import chatify from "../../Assets/Projects/Fresh.png";
import suicide from "../../Assets/Projects/Bookmarker.png";
import bitsOfCode from "../../Assets/Projects/Portfolio.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Fresh Cart"
              description="A sleek, user-friendly e-commerce website built with a responsive frontend technologies for 
smooth shopping and easy navigation. "
           
              demoLink="https://e-commerce-mu-sable.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="A clean and user-friendly web application designed to deliver an intuitive experience. This project highlights thoughtful layout, smooth interactions, and practical functionality, reflecting a strong focus on usability, design consistency, and responsive performance across devices."
            
              demoLink="https://moatazraafatt.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mealify"
              description="A simple and elegant web page that displays a selection of tasty meals along with the best chefs of the team. Each item is presented with clear visuals and short descriptions, offering users an enjoyable way to explore food and the people behind it."
            
              demoLink="https://moatazraafatt.github.io/Mealify/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DentalHub (Graduation Project)"
              description="A platform connecting dental students, dentists, and patients. Features include appointment 
scheduling, AI-powered sentiment analysis for feedback, and educational tools for students."
          
              demoLink="https://drive.google.com/file/d/1IwhXePydvjstTxj_J87behA4vQStzOpi/view?pli=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bookmarker"
              description="A simple and functional web application that allows users to create, view, edit, and delete bookmarks. This project is focused on organizing favorite links efficiently, with an easy-to-use interface for managing saved websites."
    
              demoLink="https://moatazraafatt.github.io/Bookmarker/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Pig Game"
              description="A fun and interactive dice game where two players take turns rolling to reach a target score. The project focuses on smooth gameplay, clear visuals, and simple rules that make it easy to play and enjoy. Great for testing luck and strategy!"
              
            demoLink="https://moatazraafatt.github.io/Pig-Game/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
