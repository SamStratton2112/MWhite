/** Component contains video, will be rotated every 5 seconds in video carousel.*/

const Video = ({ id }) => {
    return (
            <div className="ratio ratio-16x9 " style={{maxWidth:"50vw", margin:"0 auto"}}>
                <iframe src={`https://www.youtube.com/embed/${id}?rel=0`} title="YouTube video" allowFullScreen></iframe>
            </div>
    );
};

export default Video;
