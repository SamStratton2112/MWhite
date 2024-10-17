import { Col, Container} from 'react-bootstrap';
import {useState} from 'react';

const RoleCard = ({role,name,company,year,location}) => {
    const [hidden, setHidden] = useState(true);
    const body1 = <h4>{name}</h4>;
    const body2 = (
    <>
        <h4>{name}</h4>
        <p><b>Role : </b>{role}</p>
        <p><b>Company : </b>{company}</p>
        <p><b>Year : </b>{year}</p>
        <p><b>Location : </b>{location}</p>
    </>
    );
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