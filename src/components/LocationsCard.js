import { Col, Container} from 'react-bootstrap';
import {useState} from 'react';
import List from './List';

const LocationCard = ({location}) => {
    const [hidden, setHidden] = useState(true);

    let body1 = <img src={location.image}  style={{ width: '19rem', height: '19rem' }} alt="coming soon" />;
    
    let list = Array.from(location.locations)
    let body2 = <List list={list} />
    return (
        <Col>
            <Container 
                style={{ width: '20rem', height: '20rem', border: 'solid' }} 
                className="venueCard" 
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
                {hidden ? body1 : body2}
            </Container>
        </Col>
    );
};

export default LocationCard;