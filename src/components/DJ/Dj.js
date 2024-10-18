import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";

const Dj = () => {
    return (
        <Container>
            <Container className='center'>
                <img style={{ width: '50%', marginTop: '1em' }} src="https://i.imgur.com/W4cVzRU.jpeg" alt="logo" />
            </Container>
            <h3>Check out my albums:</h3>
            <MusicContainer />
            <DjCarousel />
            <h3>Venues Played</h3>
            <PrevExperience />
            <AppearencesContainer />
        </Container>
    )
};

export default Dj;