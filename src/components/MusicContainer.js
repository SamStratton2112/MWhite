import MusicPlayer from './MusicPlayer';
import mike from '../data';
import { Container, Row, Col } from 'react-bootstrap';

const MusicContainer = () =>{
    return(
        <Container>
            <Row md={12}>
                <Col>
                    <MusicPlayer album={mike.dj.links.audio.unwind} />
                </Col>
                <Col>
                    <MusicPlayer album={mike.dj.links.audio.sexyTime} />
                </Col>
                <Col>
                    <MusicPlayer album={mike.dj.links.audio.inspiredBy} />
                </Col>
            </Row>
        </Container>
    )
};

export default MusicContainer;