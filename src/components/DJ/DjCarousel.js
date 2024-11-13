import { Carousel, Container } from 'react-bootstrap';
import Video from '../Video';
import mike from '../../data';

const DjCarousel = () => {
    const videos = [];
    for(let vid in mike.dj.links.video){
         videos.push(<Carousel.Item interval={5000}><Video id={mike.dj.links.video[vid]} /></Carousel.Item>)
    }
    return (
        <Container style={{paddingBottom: '5em'}}>
            <Carousel className='align-items-center'>
                {videos}
            </Carousel>
        </Container>
    );
};

export default DjCarousel;