import { Col, Button, Container} from 'react-bootstrap';


const VenueCard = (venue) =>{
    let body = <img src='' alt="coming soon"/>
    // figure out hover effect, not currently working 
    // get images set up 
    // components are communicating tho!! YAY

    function handleHover(){
        body = <Button>{venue.name}</Button>
    };

    return(
        <Col>
            <Container className="venueCard" onMouseOver={handleHover()}>
                {body}
            </Container>
        </Col>
    )
};

export default VenueCard