import { Container } from 'react-bootstrap';

const Video = ({ id }) => {

    return (
        <Container style={{width:"50%"}}>
            <div className="ratio ratio-16x9" >
                <iframe src={`https://www.youtube.com/embed/${id}?rel=0`} title="YouTube video" allowFullScreen></iframe>
            </div>
        </Container>
    );
};

export default Video;
