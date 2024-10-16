import { Card, Button } from "react-bootstrap";


const MusicPlayer = ({album}) => {
    console.log(album.src)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={album.image} alt={album.name} />
            <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <a href={album.src}><Button variant="primary">Listen on Soundcloud</Button></a>
            </Card.Body>
        </Card>
    )
};

export default MusicPlayer;