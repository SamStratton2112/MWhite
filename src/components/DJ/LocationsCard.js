import { Container} from 'react-bootstrap';
import {useState} from 'react';
import List from '../List';

const LocationCard = ({location}) => {
    const [hidden, setHidden] = useState(true);
    let list = Array.from(location.locations)

    // display when not hovering 
    let body1 = <img src={location.image}  style={{ width: '20rem', height: '20rem',borderRadius:'.5em' }} alt={location.city} />;

    //display when hovering 
    let body2 = <List list={list} />
    return (
        <>
               <br/>
            <Container 
                style={{ width: '20rem', height: '20rem', marginBottom: "2em"}}
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
               <Container className="center">
               <p style={{backgroundColor: 'rgb(13, 12, 12, .8)', borderRadius:'.2em', width:'12em'}}>{location.city}</p>
               </Container>
                {hidden ? body1 : body2}
            </Container>
        </>
    );
};

export default LocationCard;