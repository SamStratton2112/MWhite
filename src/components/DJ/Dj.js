import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";
import Footer from '../Footer'

const Dj = () => {
    return (
        <>
            <Container className="cardText" style={{ backgroundColor: 'rgb(13, 12, 12, .85)'}}>
                <br />
                <Container style={{width: '10em', borderRadius: '.2em' }}>
                    <h3 style={{ padding: '.5em' }} >Albums</h3>
                </Container>
                <MusicContainer />
                <Container style={{width: '20em', borderRadius: '.2em' }}>
                    <h3 style={{ padding: '.5em', marginTop: '.5em' }}>Venues Played</h3>
                </Container>
                <PrevExperience />
                <Container style={{width: '15em', borderRadius: '.2em' }}>
                    <h3 style={{ padding: '.5em', marginBottom: '.5em', marginTop: '1.5em' }}>Appearances...</h3>
                </Container>
                <AppearencesContainer />
                <DjCarousel />
            </Container>
            <Footer />
        </>
    )
};

export default Dj;