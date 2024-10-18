import { Card } from "react-bootstrap";


const MusicPlayer = ({album}) => {
    console.log(album.src)
    return (
        <Card >
            <Card.Img variant="top" src={album.image} alt={album.name} />
            <Card.Body className='card'>
                <Card.Title>{album.name}</Card.Title>
                <a href={album.src}><button className="bttn">Listen on Soundcloud</button></a>
            </Card.Body>
        </Card>
    )
};

export default MusicPlayer;