import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";
import './Dj.css';

const Dj = () => {
    return (
        <Container className="dj">
            <h3 style={{padding:'1em'}}>Venues Played</h3>
            <PrevExperience />
            <h3 style={{margin:'1em'}} >Albums</h3>
            <MusicContainer />
            <AppearencesContainer />
            <DjCarousel />
        </Container>
    )
};

export default Dj;