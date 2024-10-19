import { Card } from "react-bootstrap";


const MusicPlayer = ({album}) => {
    console.log(album.src)
    return (
        <Card className="center cardBg">
            <Card.Img variant="top" src={album.image} alt={album.name} style={{ width: '15rem', height: '16rem', paddingTop: '1em' }}/>
            <Card.Body>
                <Card.Title style={{fontSize:'1.7em'}} >{album.name}</Card.Title>
                <a href={album.src}><button className="bttn">Listen on Soundcloud</button></a>
            </Card.Body>
        </Card>
    )
};

export default MusicPlayer;