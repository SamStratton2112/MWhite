import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import mike from '../data.js';
import VenueCard from './VenueCard';

function Residencies() {
  return (
    <Container>
      <h1>Come see me play at: </h1>
      <Row md={12}>
        <VenueCard venue={mike.dj.residencies.stk} />
        <VenueCard venue={mike.dj.residencies.carnitas} />
        <VenueCard venue={mike.dj.residencies.houseOfBlues} />
      </Row>
    </Container>
  );
}

export default Residencies;