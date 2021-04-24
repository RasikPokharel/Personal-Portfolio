import {Container, Row, Col} from 'react-bootstrap';
import '../../style.css';
import ProjectCard from './ProjectCards';
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import React, {useState, useRef, useEffect} from 'react';
import prosthetic from "../../Assets/Projects/prosthetic.PNG";
import BST from "../../Assets/Projects/BST.png";
import macfintech from "../../Assets/Projects/macfintech.png";
import poker from "../../Assets/Projects/poker.png";
import arduino from "../../Assets/Projects/arduino.png";

function Project(){
    


    return (
        <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", textAlign:'center', fontSize: '1.2em' }}>
          These are some of the projects that I'm currently working on or have recently worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prosthetic}
              isBlog={false}
              title="Prosthetic Hand Mechanism"
              description="•	With a group of four, planned, designed, modelled and developed a prosthetic hand mechanism with gears.
              •	Used 3D modeling software AutoCAD to design gears and other parts for the mechanism and assembled the parts.
              •	Constructed a fully functional gearing train mechanism to accurately translate input to desired output.
              ."
              link="https://github.com/RasikPokharel/Prosthetic-Hand-Mechanism"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poker}
              isBlog={false}
              title="Poker In Java"
              description="Independently used software engineering principles of modular design to implement Texas holdem poker in java.
              Have an expansion plan in place that involves creating a GUI in java, creating a machine learning AI to play poker, implementing poker in react native and launch the app in the app store, analyzing professional game data and more. 
              "
              link="https://github.com/RasikPokharel/PokerInJava"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={macfintech}
              isBlog={false}
              title="MacFintech.ca"
              description="Collaboratively worked on the website for McMaster fintech using react while applying my skills in HTML & CSS.
              Created the websites very sleek front end graphical user interface made with various different react UI libraries.
              Designed and implemented the basic yet highly effective and functional backend of the website.
              "
              link="https://macfintech.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arduino}
              isBlog={false}
              title="Cat Feeder Personal Engineering Design Project"
              description="Currently working on prototying and designing an automatic cat feeder using embedded systems like arduinos or raspberry pies"
              link="https://github.com/RasikPokharel/CatFeeder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BST}
              isBlog={false}
              title=" BST visualizer"
              description="Collaborated with another developer to create a BST sorting algorithm visualiser using ____  and ______"
              link="https://github.com/RasikPokharel/BST-algorithm-Visualiser"
            />
          </Col>
        

        </Row>
      </Container>
    </Container>
  );

}
export default Project;