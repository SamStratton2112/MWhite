import { Card } from "react-bootstrap";


const MusicPlayer = ({album}) => {
    return (
        <Card className="center" style={{backgroundColor:' rgb(13, 12, 12, .85)', color:'white', margin: '1em', border: 'solid', borderColor:"rgb(184, 17, 17)" }}>
            <Card.Img variant="top" src={album.image} alt={album.name} style={{ width: '15em', height: '16em', paddingTop: '1em'}}/>
            <Card.Body>
                <Card.Title style={{fontSize:'1.7em'}} >{album.name}</Card.Title>
                <a href={album.src}><button className="bttn">Listen on Soundcloud</button></a>
            </Card.Body>
        </Card>
    )
};

export default MusicPlayer;