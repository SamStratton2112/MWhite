import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import mike from '../data';
import Footer from './Footer'

const About = () => {
    return (
        <>
            <Container style={{ backgroundColor: 'rgba(13, 12, 12, 0.9)' }} >
                <Row className="justify-content-center">
                    <Col md={12} lg={3}>
                        <Link to="/dj"><button className="bttn">DJ</button></Link>
                    </Col>
                    <Col md={12} lg={3}>
                        <Link to="/model"><button className="bttn">Model</button></Link>
                    </Col>
                    <Col md={12} lg={3}>
                        <Link to="/actor"><button className="bttn">Actor</button></Link>
                    </Col>
                </Row>
                <Container style={{ backgroundColor: 'rgb(250,250,250, .9)', borderRadius: '.2em' }}>
                    <Row>
                        <Col md={12} lg={4} style={{ borderRadius: '.2em' }}>
                            <img style={{ height: '25em', borderRadius: '.5em', margin: '.5em' }} src={mike.image} alt='Mike White Model' />
                        </Col>
                        <Col md={12} lg={8}>
                            <Container className="leftText" style={{ fontSize: '1em', padding: '1em' }}>
                                <p>{mike.bio.p1}</p>
                                <p>{mike.bio.p2}</p>
                                <p>{mike.bio.p3}</p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12} lg={3}>
                            <Link to="/skills"><button className="bttn">Skills</button></Link>
                        </Col>
                        <Col md={12} lg={3}>
                            <Link to="/residencies"><button className="bttn">Current Residencies</button></Link>
                        </Col>
                        <Col md={12} lg={3}>
                            <Link to="/contact"><button className="bttn">Contact</button></Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
};

export default About;