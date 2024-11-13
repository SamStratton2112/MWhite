import {Container, Row, Col} from 'react-bootstrap';
import mike from '../data.js';
import VenueCard from './VenueCard';
import Footer from './Footer'

/** Loop through each residency object and create a venue card for it which displays the venue image except on hover => button linking to the venue's website. */ 

function Residencies() {
  const places= [];
  for(let place in mike.dj.residencies){
        places.push(<Col><VenueCard venue={mike.dj.residencies[place]}/></Col>)
  }

  return (
    <>
    <Container style={{marginBottom: '3em'}}>
      <h1 style={{marginTop: '.5em', marginBottom:'1em'}}>Current Residencies</h1>
      <Row md={12} lg={3} className="containerBckground">
        {places}
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Residencies;