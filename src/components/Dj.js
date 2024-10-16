import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";
import AppearencesContainer from "./AppearencesContainer";

const Dj = ()=>{
    return(
        <Container>
            <span>Check out my albums:</span>
            <MusicContainer/>
            <PrevExperience/>
            <AppearencesContainer/>
        </Container>
    )
};

export default Dj;