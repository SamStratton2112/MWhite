import { Carousel, Container } from 'react-bootstrap';
import Video from '../Video';
import mike from '../../data';

const DjCarousel = () => {
    return (
        <Container style={{marginTop: '4em', paddingBottom: '10em'}}>
            <Carousel className='align-items-center'>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.liveARoll} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.laborDay} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.SirensCrush} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.carnitas} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.spiritsFest} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.elsewhere} /></Carousel.Item>
                <Carousel.Item interval={5000}><Video id={mike.dj.links.video.rumor} /></Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default DjCarousel;