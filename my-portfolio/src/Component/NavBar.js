import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Button,Nav, FormControl, Form, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../Capture.JPG';



function NavBar () {
    return(
        <Container className = 'navbar'>
        <Navbar className = 'navbar'> 
        <Container>

            

                <Navbar.Brand >
                    Rasik Pokharel
                </Navbar.Brand>
            
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Col>
                    <Nav.Link href="/About">About</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                </Col>
                
                <Col className= 'sections'>
                    <Nav.Link href="/Resume">Resume</Nav.Link>
                </Col>
                </Nav>
                <Nav>
                    <Nav.Link href="">Download CV</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container >
    );
    

}
export default NavBar; 