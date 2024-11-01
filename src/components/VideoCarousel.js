import { Carousel } from 'react-bootstrap';
import Video from './Video';

const VideoCarousel = ({allVideos}) => {
    const videos = [];
    for(let video in allVideos){
        videos.push(<Carousel.Item interval={5000}><Video id={allVideos[video]} key={allVideos[video]}/></Carousel.Item>)
    }

    return (
            <Carousel className='align-items-center'>
               {videos}
            </Carousel>
    );
};

export default VideoCarousel;