import YouTube from 'react-youtube';

const Video = ({ id }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0, // Automatically play the video when ready
            loop: 0,
        },
    };

    // Event handler for when the video is ready
    const handleReady = (event) => {
        const player = event.target;
        player.playVideo(); // Play the video as soon as the player is ready
    };

    return (
        <YouTube 
            videoId={id} 
            opts={opts} 
            onReady={handleReady} 
            onError={(e) => console.error("An error occurred:", e.data)}
        />
    );
};

export default Video;
