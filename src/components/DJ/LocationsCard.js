import { Container} from 'react-bootstrap';
import {useState} from 'react';
import List from '../List';

const LocationCard = ({location}) => {
    const [hidden, setHidden] = useState(true);

    let body1 = <img src={location.image}  style={{ width: '20rem', height: '20rem',borderRadius:'.5em' }} alt={location.city} />;
    
    let list = Array.from(location.locations)
    let body2 = <List list={list} />
    return (
        <>
         {/*center titles  */}
               <br/>
            <Container 
                style={{ width: '20rem', height: '20rem', marginBottom: "2em"}}
                onMouseEnter={() => setHidden(false)} 
                onMouseLeave={() => setHidden(true)}
            >
               <p style={{backgroundColor: 'rgb(13, 12, 12, .8)', borderRadius:'.2em', width:'12em'}}>{location.city}</p>

                {hidden ? body1 : body2}
            </Container>
        </>
    );
};

export default LocationCard;