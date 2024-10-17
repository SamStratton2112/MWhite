import YouTube from 'react-youtube';

const Video = ({id})=>{
    const opts ={
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            loop: 0
        }
    };
    return(
        <YouTube videoId={id} opts={opts} />
    )
};

export default Video;