import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";

const Dj = () => {
    return (
        <Container>
            <Container className='center'>
                <img style={{ width: '50%', marginTop: '3em', marginBottom: '1em', borderRadius:'1em' }} src="https://i.imgur.com/W4cVzRU.jpeg" alt="logo" />
            </Container>
            <h3 style={{margin:'1em'}}>Venues Played</h3>
            <PrevExperience />
            <h3 style={{margin:'1em'}} >Albums</h3>
            <MusicContainer />
            <AppearencesContainer />
            <DjCarousel />
        </Container>
    )
};

export default Dj;