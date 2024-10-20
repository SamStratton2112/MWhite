import { Container, Row, Col } from 'react-bootstrap';
import mike from '../../data.js';
import LocationCard from './LocationsCard.js';

const PrevExperience =()=>{
    return(
        <Container className='center'>
            <Row>
                <Col md={12} lg={4}>
                    <LocationCard location={mike.dj.prevExperience.sanDiego}/>
                </Col>
                <Col md={12} lg={4}>
            <LocationCard location={mike.dj.prevExperience.Vegas}/>
                </Col>
                <Col md={12} lg={4}>
            <LocationCard location={mike.dj.prevExperience.la}/>
                </Col>
                <Col>
            <LocationCard location={mike.dj.prevExperience.palmSprings}/>
                </Col>
                <Col md={12} lg={4}>
            <LocationCard location={mike.dj.prevExperience.ny}/>
                </Col>
                <Col md={12} lg={4}>
            <LocationCard location={mike.dj.prevExperience.Charlotte}/>
                </Col>
            </Row>
        </Container>
    )
}

export default PrevExperience;