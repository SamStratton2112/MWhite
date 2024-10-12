import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import mike from '../data.js';
import VenueCard from './VenueCard';

function Residencies() {
    let venues = []
    for(let obj in mike.dj.residencies){
        venues.push(<VenueCard venue={obj}/>)
    }
    console.log(venues)
  return (
    <Container>
      <Row md={12}>
        {venues}
      </Row>
    </Container>
  );
}

export default Residencies;