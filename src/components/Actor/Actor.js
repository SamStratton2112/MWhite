import { Container } from 'react-bootstrap';
import mike from '../../data';
import { RoleContainer } from './RoleContainer';
import VideoCarousel from './VideoCarousel';
import './Actor.css'
import Footer from '../Footer';

const Actor = () => {
    return (
        <>
        <Container className='actor cardText' >
            <Container >
                <h2 style={{textAlign:"left", paddingTop:'1em'}}>Acting Experience</h2>
                
                    <h3 style={{margin:'1.5em', textAlign:"left"}}>Commercials</h3>
                    <RoleContainer type={mike.acting.commercial} />
                    <h3 style={{margin:'1em', textAlign:"left"}}>TV</h3>
                    <RoleContainer type={mike.acting.tv} />
                    <h3 style={{margin:'1em', textAlign:"left"}}>Movies</h3>
                    <RoleContainer type={mike.acting.movies} />
                    <h3 style={{margin:'1em', textAlign:"left"}}>Music Videos</h3>
                    <RoleContainer type={mike.acting.musicVideos} />
            <VideoCarousel  className="vidCarousel"/>
            </Container>
        </Container>
        <Footer/>
        </>
    )
};

export default Actor;