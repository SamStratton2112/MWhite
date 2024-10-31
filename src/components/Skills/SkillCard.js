
import { Col, Container} from 'react-bootstrap';
import {useState} from 'react';

const SkillCard = ({name, image}) => {
    const [hidden, setHidden] = useState(true);
    const body2 = <h4>{name}</h4>;
    const body1 = <img  style={{height:'15em', borderRadius:'.2em'}} src={image} alt="Skateboarding"/>;
    return (
        <Col>
            <Container 
                style={{ width: '15em', height: '15em', border: 'solid', margin: '1em', borderRadius:'.3em', textAlign:'center', backgroundColor:'rgb(184, 17, 17, .5)'}}
                className='center' 
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
                {hidden ? body1 : body2}
            </Container>
        </Col>
    );
};

export default SkillCard;