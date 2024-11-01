import {Container, Row, Col} from 'react-bootstrap';
import mike from '../data.js';
import VenueCard from './VenueCard';
import Footer from './Footer'

function Residencies() {
  return (
    <>
    <Container style={{marginBottom: '3em'}}>
      <h1 style={{marginTop: '.5em', marginBottom:'1em'}}>Current Residencies</h1>
      <Row md={12} lg={3} className="containerBckground">
        <Col><VenueCard venue={mike.dj.residencies.stk} /></Col>
        <Col><VenueCard venue={mike.dj.residencies.carnitas} /></Col>
        <Col><VenueCard venue={mike.dj.residencies.houseOfBlues} /></Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Residencies;