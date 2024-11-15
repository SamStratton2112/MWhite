import MusicPlayer from './MusicPlayer';
import mike from '../../data';
import { Container, Row, Col } from 'react-bootstrap';

// Displays artists album covers with links to album page on soundcloud. 
const MusicContainer = () =>{
    const allAlbums = [];
    for(let album in mike.dj.links.audio){
        allAlbums.push(<Col>
            <MusicPlayer album={mike.dj.links.audio[album]} />
        </Col>)
    };

    return(
        <Container className="center ">
            <Row  md={12} lg={3} >
                {allAlbums}
            </Row>
        </Container>
    )
};

export default MusicContainer;