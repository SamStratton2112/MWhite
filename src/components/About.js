import { Button, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import mike from '../data';

const About = () =>{
    return(
        <>
            <Container>
                <Link to="/dj"><Button>D.J.</Button></Link>
                <Link to="/model"><Button>Model</Button></Link>
                <Link to="/actor"><Button>Actor</Button></Link>
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
                <Link to="/residencies"><Button>Current Residencies</Button></Link>
                <Link to="/contact"><Button>Contact</Button></Link>
            </Container>
        </>
    )
};

export default About;