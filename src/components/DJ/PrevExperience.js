import { Row, Col } from 'react-bootstrap';
import mike from '../../data.js';
import LocationCard from './LocationsCard.js';

// Loop over each location and return a location card which displays an image of said location/city and upon hovering displays a scrollable list of the venues the artist has performed at. 

const PrevExperience = () => {
     const locations = []
    for(let location in mike.dj.prevExperience){
        locations.push(<Col>
            <LocationCard location={mike.dj.prevExperience[location]} />
        </Col>)
    }

    return (
            <Row  md={12} lg={3}>
                {locations}
            </Row>
    )
}

export default PrevExperience;