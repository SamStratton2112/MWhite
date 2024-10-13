import { Container } from "react-bootstrap";
import MusicContainer from "./MusicContainer";
import PrevExperience from "./PrevExperience";

const Dj = ()=>{
    return(
        <Container>
            <span>Check out my albums:</span>
            <MusicContainer/>
            <PrevExperience/>
        </Container>
    )
};

export default Dj;