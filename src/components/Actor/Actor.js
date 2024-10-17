import { Container } from 'react-bootstrap';
import mike from '../../data';
import { RoleContainer } from './RoleContainer';

const Actor = () => {
    return (
        <Container>
            <h2>Previous Experience</h2>
            <Container>
                <h3>Commercials</h3>
                <RoleContainer type={mike.acting.commercial} />
            </Container>
            <Container>
                <h3>TV</h3>
                <RoleContainer type={mike.acting.tv} />
            </Container>
            <Container>
                <h3>Movies</h3>
                <RoleContainer type={mike.acting.movies} />
            </Container>
            <Container>
                <h3>Music Videos</h3>
                <RoleContainer type={mike.acting.musicVideos} />
            </Container>
        </Container>
    )
};

export default Actor;