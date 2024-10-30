import { Carousel, Container } from 'react-bootstrap';
import Video from '../Video';
import mike from '../../data';

const VideoCarousel = () => {
    return (
        <Container style={{marginBottom: '1em'}}>
            <Carousel className='align-items-center'>
                <Carousel.Item interval={50000}><Video id={mike.acting.links.video.behiveVoice} /></Carousel.Item>
                <Carousel.Item interval={50000}><Video id={mike.acting.links.video.prado} /></Carousel.Item>
                <Carousel.Item interval={50000}><Video id={mike.acting.links.video.yacht} /></Carousel.Item>
                <Carousel.Item interval={50000}><Video id={mike.acting.links.video.elsewhere} /></Carousel.Item>
                <Carousel.Item interval={50000}><Video id={mike.acting.links.video.rumor} /></Carousel.Item>

            </Carousel>
        </Container>
    );
};

export default VideoCarousel;