import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import mike from '../data';
import Footer from './Footer'

const About = () => {
    return (
        <>
        <Container style={{ backgroundColor: 'rgba(13, 12, 12, 0.9)', height: '100%'}} >
            <Container >
                <Link style={{marginLeft:'10%', marginRight:'10%'}} to="/dj"><button className="bttn">DJ</button></Link>
                <Link style={{marginLeft:'10%', marginRight:'10%'}} to="/model"><button className="bttn">Model</button></Link>
                <Link style={{marginLeft:'10%', marginRight:'10%'}} to="/actor"><button className="bttn">Actor</button></Link>
            </Container>
            <Container style={{backgroundColor: 'rgb(250,250,250, .9)', borderRadius: '.2em'}}>
                <Row>
                    <Col md={12} lg={4} style={{borderRadius: '.2em'}}>
                        <img style={{ height: '30em', borderRadius:'.5em', marginTop:'.5em' }} src={mike.image} alt='Mike White Model' />
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
                <Link style={{marginLeft:'10%', marginRight:'10%'}} to="/residencies"><button className="bttn">Current Residencies</button></Link>
                <Link style={{marginLeft:'10%', marginRight:'10%'}} to="/contact"><button className="bttn">Contact</button></Link>
            </Container>
        </Container>
            <Footer/>
</>
    )
};

export default About;