import { Container } from 'react-bootstrap';
import mike from '../../data';
import { RoleContainer } from './RoleContainer';
import VideoCarousel from './VideoCarousel';
import './Actor.css'

const Actor = () => {
    return (
        <Container className='actor cardText'>
            <Container>
                <h2 style={{textAlign:"left", paddingTop:'1em'}}>Previous Experience</h2>
                <Container>
                    <h3 style={{margin:'1.5em'}}>Commercials</h3>
                    <RoleContainer type={mike.acting.commercial} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em'}}>TV</h3>
                    <RoleContainer type={mike.acting.tv} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em'}}>Movies</h3>
                    <RoleContainer type={mike.acting.movies} />
                </Container>
                <Container>
                    <h3 style={{margin:'1em'}}>Music Videos</h3>
                    <RoleContainer type={mike.acting.musicVideos} />
                </Container>
            <VideoCarousel  className="vidCarousel"/>

            </Container>
        </Container>
    )
};

export default Actor;