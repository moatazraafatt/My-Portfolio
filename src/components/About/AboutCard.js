import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Highly motivated{" "}
            <span className="purple">React JS Frontend Developer</span> with
            strong proficiency in modern web technologies including React,
            JavaScript, TypeScript, and CSS frameworks like Tailwind and
            Bootstrap. Known for fast learning, clean code, and a strong focus
            on user experience, performance, accessibility, scalability and
            responsive design.
            <br />
            <br />
            Currently, I'm working at Faisal Islamic Bank as an{" "}
            <span className="purple">Application Administrator</span>,
            Responsible for managing and supporting core banking applications to
            ensure smooth daily operations. Tasks include system monitoring,
            issue resolution, user access management, and coordination with
            vendors and internal teams to maintain application performance and
            stability.
            <br /> <br />
            Some of my <span className="purple">responsibilities</span> : <br />
            - Managed deployment of software updates and application change
            requests. <br />
            - Developed internal functions using PL-SQL/T-SQL for process
            support. <br />
            - Monitored system performance and supported key apps. <br />-
            Provided troubleshooting and created user documentation.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
