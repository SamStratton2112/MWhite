import { Col, Button, Container} from 'react-bootstrap';
import {useState} from 'react';

const RoleCard = ({role}) => {
    const [hidden, setHidden] = useState(true);
    const body1 = '';
    const body2 = '';
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

export default RoleCard;