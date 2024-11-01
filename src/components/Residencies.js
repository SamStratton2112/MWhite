import {Container, Row} from 'react-bootstrap';
import mike from '../data.js';
import VenueCard from './VenueCard';
import Footer from './Footer'

function Residencies() {
  return (
    <>
    <Container style={{marginBottom: '3em'}}>
      <h1 style={{marginTop: '.5em', marginBottom:'1em'}}>Current Residencies</h1>
      <Row className="containerBckground justify-content-center">
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