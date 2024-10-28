import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import mike from '../data.js';
import VenueCard from './VenueCard';


function Residencies() {
  return (
    <Container>
      <h1 style={{marginTop: '1em', marginBottom:'1em'}}>Current Residencies</h1>
      <Row md={12} className="containerBckground">
        <VenueCard venue={mike.dj.residencies.stk} />
        <VenueCard venue={mike.dj.residencies.carnitas} />
        <VenueCard venue={mike.dj.residencies.houseOfBlues} />
      </Row>
    </Container>
  );
}

export default Residencies;