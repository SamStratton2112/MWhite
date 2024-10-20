import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";
import './Dj.css';

const Dj = () => {
    return (
        <Container className="dj cardText">
            <br/>
            <Container style={{backgroundColor: 'rgb(13, 12, 12, .8)', width:'10em', borderRadius:'.2em'}}><h3 style={{padding:'1em', marginBottom:'1em'}} >Albums</h3></Container>
            <MusicContainer />
            <Container style={{backgroundColor: 'rgb(13, 12, 12, .8)', width:'20em', borderRadius:'.2em'}}><h3 style={{padding:'1em'}}>Venues Played</h3></Container>
            <PrevExperience />
            <Container style={{backgroundColor: 'rgb(13, 12, 12, .8)', width:'20em', borderRadius:'.2em'}}>
            <h3 style={{padding:'1em', marginTop: '1em', marginBottom:'1em'}}>Appearences...</h3>
            </Container>
            <AppearencesContainer />
            <DjCarousel />
        </Container>
    )
};

export default Dj;