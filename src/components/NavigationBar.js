
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';



const NavigationBar = () =>{
    return(
        <Navbar collapseOnSelect expand="md" className="NavBar navbar-static-top">
          <Navbar.Brand as={Link} to="/" className=' nav-name ms-2'>Mike White</Navbar.Brand>
          <Nav className="ms-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav me-2"/>
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link className='NavBar-link' as={Link} to="/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/"><FontAwesomeIcon icon={faSoundcloud} size="2x" /></Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/"><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></Nav.Link><Nav.Link className='NavBar-link' as={Link} to="/"><FontAwesomeIcon icon={faTwitter} size="2x" /></Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/dj">DJ</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/actor">Actor</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/model">Model</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/">About</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/Residencies">Residencies</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/contact">Contact</Nav.Link>
            </Navbar.Collapse>
            </Nav>
      </Navbar>
    )
};

export default NavigationBar;