import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import mike from '../data.js';
import VenueCard from './VenueCard';
import Footer from './Footer'

function Residencies() {
  return (
    <>
    <Container style={{marginBottom: '3em'}}>
      <h1 style={{marginTop: '.5em', marginBottom:'1em'}}>Current Residencies</h1>
      <Row md={12} className="containerBckground">
        <VenueCard venue={mike.dj.residencies.stk} />
        <VenueCard venue={mike.dj.residencies.carnitas} />
        <VenueCard venue={mike.dj.residencies.houseOfBlues} />
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Residencies;