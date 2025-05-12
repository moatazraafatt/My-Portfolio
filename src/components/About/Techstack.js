import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { ImPointRight } from "react-icons/im";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiTypescript,
  SiSass,
  SiReact,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
    <SiHtml5 title="HTML5"/>
      <div className="fs-1">HTML</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiCss3 /> 
    <div className="fs-1">CSS</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiJavascript /> 
    <div className="fs-1">Javascript</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiBootstrap /> 
    <div className="fs-1">Bootstrap</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiTailwindcss /> 
    <div className="fs-1">TailwindCss</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiJquery  />
      <div className="fs-1">Jquery</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      <div className="fs-1">Typescript</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiSass  />
      <div className="fs-1">Sass</div >
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiReact />
      <div className="fs-1">ReactJs</div >
    </Col>

  </Row>
  );
}

export default Techstack;
