import {Container, Row, Col} from 'react-bootstrap';
import '../style.css';
import Resume from '../resume.pdf';
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import React, {useState, useRef, useEffect} from 'react';

function Home(){
    


    return (
        <Container fluid className = 'about-section'>
            <Container fluid className= 'about-body'>
            <div className= "spacer"> </div>
            <h1 >
                Welcome to home
            </h1>
            
            <div className= 'spacer'></div>
            </Container>
        </Container>
    )

}
export default Home;