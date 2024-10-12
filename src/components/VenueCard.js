import { Col, Button, Container} from 'react-bootstrap';
import {useState} from 'react';

const VenueCard = (venue) => {
    const [hidden, setHidden] = useState(true);

    let body1 = <img src='' alt="coming soon" />;
    let body2 = <Button>{venue.venue}</Button>;
    console.log(venue)
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

export default VenueCard;
