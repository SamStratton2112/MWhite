import { Card, Button } from "react-bootstrap";


const MusicPlayer = (song) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={song.src} alt={song.name} />
            <Card.Body>
                <Card.Title>{song.name}</Card.Title>
                <Card.Text>
                    {song.name}
                </Card.Text>
                <Button variant="primary">Listen on Soundcloud</Button>
            </Card.Body>
        </Card>
    )
};

export default MusicPlayer;