import { Carousel, Container } from 'react-bootstrap';
import Video from '../Video';
import mike from '../../data';

const VideoCarousel = () => {
    return (
        <Container>
            <Carousel className='align-items-center'>
                <Carousel.Item interval={5000}><Video id={mike.acting.links.video.laborDay} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.acting.links.video.behiveVoice} /></Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default VideoCarousel;