import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import mike from '../data';

const About = () => {
    return (
        <Container style={{ backgroundColor: 'rgba(13, 12, 12, 0.9)', height: '100vh'}}>
            <Container>
                <Link to="/dj"><button className="bttn">DJ</button></Link>
                <Link to="/model"><button className="bttn">Model</button></Link>
                <Link to="/actor"><button className="bttn">Actor</button></Link>
            </Container>
            <Container style={{backgroundColor: 'rgb(250,250,250, .9)', borderRadius: '.2em'}}>
                <Row>
                    <Col md={12} lg={4} style={{borderRadius: '.2em'}}>
                        <img style={{ height: '30em', paddingTop:'1em', paddingBottom:'1em' }} src={mike.image} alt='Mike White Model' />
                    </Col>
                    <Col md={12} lg={8}>
                        <Container className="leftText" style={{ fontSize: '1.2em', paddingTop:'1em' }}>
                            <p>{mike.bio.p1}</p>
                            <p>{mike.bio.p2}</p>
                            <p>{mike.bio.p3}</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Link to="/residencies"><button className="bttn">Current Residencies</button></Link>
                <Link to="/contact"><button className="bttn">Contact</button></Link>
            </Container>
        </Container>
    )
};

export default About;