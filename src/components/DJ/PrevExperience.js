import { Row, Col } from 'react-bootstrap';
import mike from '../../data.js';
import LocationCard from './LocationsCard.js';

const PrevExperience = () => {
    return (
            <Row md={12} lg={3}>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.sanDiego} />
                </Col>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.Vegas} />
                </Col>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.la} />
                </Col>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.palmSprings} />
                </Col>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.ny} />
                </Col>
                <Col>
                    <LocationCard location={mike.dj.prevExperience.Charlotte} />
                </Col>
            </Row>
    )
}

export default PrevExperience;