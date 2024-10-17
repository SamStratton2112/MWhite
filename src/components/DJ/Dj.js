import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";
import DjCarousel from "./DjCarousel";

const Dj = ()=>{
    return(
        <Container>
            <img style={{width:'50%'}} src="https://i.imgur.com/W4cVzRU.jpeg" alt="logo"/>
            <MusicContainer/>
            <DjCarousel/>
            <PrevExperience/>
            <AppearencesContainer/>
        </Container>
    )
};

export default Dj;