import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import mike from '../data';

const About = () =>{
    return(
        <>
            <Container>
                <Link  to="/dj"><button className="bttn">DJ</button></Link>
                <Link to="/model"><button className="bttn">Model</button></Link>
                <Link to="/actor"><button className="bttn">Actor</button></Link>
            </Container>
            <Container style={{ display: 'flex'}}>
            <img style={{height:'30em'}} src={mike.image} alt='Mike White Model'/>
            <Container>
                <p>{mike.bio.p1}</p>
                <p>{mike.bio.p2}</p>
                <p>{mike.bio.p3}</p>
            </Container>
        </Container>
            <Container>
                <Link to="/residencies"><button  className="bttn">Current Residencies</button></Link>
                <Link to="/contact"><button  className="bttn">Contact</button></Link>
            </Container>
        </>
    )
};

export default About;