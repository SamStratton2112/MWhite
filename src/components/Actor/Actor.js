import { Container } from 'react-bootstrap';
import mike from '../../data';
import { RoleContainer } from './RoleContainer';
import VideoCarousel from './VideoCarousel';
import { SkillContainer } from './SkillContainer';
import './Actor.css'
import Footer from '../Footer';

const Actor = () => {
    return (
        <>
        <Container className='actor cardText'>
            <Container>
                <h2 style={{textAlign:"left", paddingTop:'1em'}}>Acting Experience</h2>
                <Container>
                    <h3 style={{margin:'1.5em', textAlign:"left"}}>Commercials</h3>
                    <RoleContainer type={mike.acting.commercial} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em', textAlign:"left"}}>TV</h3>
                    <RoleContainer type={mike.acting.tv} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em', textAlign:"left"}}>Movies</h3>
                    <RoleContainer type={mike.acting.movies} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em', textAlign:"left"}}>Music Videos</h3>
                    <RoleContainer type={mike.acting.musicVideos} />
                </Container>
            <VideoCarousel  className="vidCarousel"/>
            <Container>
                    <h3 style={{margin:'1em', textAlign:"left"}}>Special Skills</h3>
                    <SkillContainer type={mike.acting.skills} />
            </Container>
            </Container>
        </Container>
        <Footer/>
        </>
    )
};

export default Actor;