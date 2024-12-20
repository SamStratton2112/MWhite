import { Container} from 'react-bootstrap';
import {useState} from 'react';

const RoleCard = ({role,name,company,year,location}) => {
    const [hidden, setHidden] = useState(true);
    const body1 = <h4 style={{ paddingTop:'45%' }}>{name}</h4>;
    const body2 = (
        <Container className="leftText" key={company}>
        <h4 style={{marginTop:'1em'}}>{name}</h4>
        <p><b>Role : </b>{role}</p>
        <p><b>Company : </b>{company}</p>
        <p><b>Year : </b>{year}</p>
        <p><b>Location : </b>{location}</p>
        </Container>
    );
    return (

            <Container 
                style={{ width: '17em', height: '17em', border: 'solid', margin: '1em', borderRadius:'.3em', overflowY: 'auto'}} 
                className="cardBg" 
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
                {hidden ? body1 : body2}
            </Container>
    );
};

export default RoleCard;