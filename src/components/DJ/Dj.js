import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";

const Dj = () => {
    return (
        <Container>
            <Container className='center'>
                <img style={{ width: '50%', marginTop: '3em', marginBottom: '3em', borderRadius:'1em' }} src="https://i.imgur.com/W4cVzRU.jpeg" alt="logo" />
            </Container>
            <h3>Albums</h3>
            <MusicContainer />
            <DjCarousel />
            <h3>Venues Played</h3>
            <PrevExperience />
            <AppearencesContainer />
        </Container>
    )
};

export default Dj;