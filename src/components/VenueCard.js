import { Col, Container} from 'react-bootstrap';
import {useState} from 'react';

const VenueCard = ({venue}) => {
    const [hidden, setHidden] = useState(true);

    let body1 = <img src={venue.image}  style={{ width: '19rem', height: '19rem', borderRadius: '.2em',  border:'solid', borderWidth: '.2em',
    borderColor: 'rgb(184, 17, 17)' }} alt={venue.name} />;
    let body2 = <a href={venue.src}><button className="bttn">Visit {venue.name}</button></a>;
    return (
        <Col>
            <Container 
                style={{ width: '20rem', height: '20rem' }} 
                className="venueCard center" 
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
                {hidden ? body1 : body2}
            </Container>
        </Col>
    );
};

export default VenueCard;
