import {Container, Row, Col, Button} from 'react-bootstrap';
import '../style.css';
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import React, {useState, useRef, useEffect} from 'react';
import pdf from '../resume.pdf';
function Resume(){
    


    return (

        <Container fluid className = 'about-section'>
            <Container fluid className= 'about-body'>
            <div className= "spacer"> </div>
            
            <h1 >
                This is my Resume
            </h1>
            <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
            </Button>
            
            
            <div className= 'spacer'></div>
            </Container>
        </Container>
    )

}
export default Resume;