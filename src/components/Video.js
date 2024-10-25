import { useRef } from 'react';
import YouTube from 'react-youtube';

const Video = ({ id }) => {
    const playerRef = useRef(null); // Ref to store the player instance

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0, // Don't autoplay the video
            loop: 0,
        },
    };

    // Event handler for when the video is ready
    const handleReady = (event) => {
        playerRef.current = event.target; // Store player instance in ref
        console.log("Video is ready but will not autoplay."); // Log readiness
    };

    // Example function to play the video when needed
    // const playVideo = () => {
    //     if (playerRef.current) {
    //         playerRef.current.playVideo(); // Call play only if playerRef is set
    //     } else {
    //         console.error("Player is not initialized yet.");
    //     }
    // };

    // You can call playVideo whenever you need, for example, with a button
    // In this case, we'll just log a message to demonstrate it's ready
    return (
        <div>
            <YouTube 
                videoId={id} 
                opts={opts} 
                onReady={handleReady} 
                onError={(e) => console.error("An error occurred:", e.data)}
            />
            {/* If you want to trigger playVideo from somewhere else, you can uncomment the button */}
            {/* <button onClick={playVideo}>Play Video</button> */}
        </div>
    );
};

export default Video;
