import { Carousel } from 'react-bootstrap';
import Video from './Video';

/** Component displays each video and changes video every 5 seconds.*/

const VideoCarousel = ({allVideos}) => {
    const videos = [];
    //loop over all videos object and extract data from nested object 
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