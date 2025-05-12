import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiHtml5,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiGit/>
      <div className="fs-1">Git</div >
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="fs-1">Github</div >
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="fs-1">VS Code</div >
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="fs-1">Postman</div >
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="fs-1">Vercel</div >
      </Col>
    </Row>
  );
}

export default Toolstack;
