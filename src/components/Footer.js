import { Container } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = ()=>{
    return(
        <Container className="containerBckgroundRed">
            <p style={{fontSize:"larger"}}>_____________________</p>
            <img src="https://i.imgur.com/QLkSBI3.jpeg" style={{ width: '20em' }} alt=" DJ Mike White Logo" />
            <Container className="center">
                <a className="socialMedia" href="https://soundcloud.com/user-554826787"><FontAwesomeIcon icon={faSoundcloud} size="2x" /></a>
                <a className="socialMedia" href="https://www.instagram.com/djmikewhite_/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a className="socialMedia" href="https://www.facebook.com/mike.white.7739814"><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></a>
            </Container>
            <p><a style={{textDecorationColor:'white', color: 'white', marginBottom:'2em'}} href="https://sam-stratton2112.onrender.com">© 2024 Samantha Stratton</a></p>
        </Container>
    )
};

export default Footer;