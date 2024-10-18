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
            <MusicContainer />
            <DjCarousel />
            <PrevExperience />
            <AppearencesContainer />
        </Container>
    )
};

export default Dj;