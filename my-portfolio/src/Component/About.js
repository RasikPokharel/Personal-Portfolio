
import {Container, Row, Col} from 'react-bootstrap';
import '../style.css';

import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import React, {useState, useRef, useEffect} from 'react';

function About(){
    


    return (
        <Container fluid className = 'about-section'>
            <Container fluid className= 'about-body'>
            <div className= "spacer"> </div>
            <h1 >
                Who is Rasik?
            </h1>
            <div className= 'about-Paragraph'>
            I am an aspiring Software Engineer, currently enrolled in year 2 of 5 in a Software Engineering and Management Program at McMaster University
            </div>
            <div className= 'spacer'></div>
            </Container>
        </Container>
    )

}
export default About;