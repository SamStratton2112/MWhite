import ListModal from '../ListModal';
import mike from '../../data';
import {Container} from 'react-bootstrap';

const AppearencesContainer = ()=>{
    return(
        <Container>
            <h3 style={{marginTop: '1em'}}>Appearences...</h3>
            <ListModal name={mike.dj.appearences.name} list={mike.dj.appearences.list}>{mike.dj.appearences.name}</ListModal>
            <ListModal name={mike.dj.openedFor.name} list={mike.dj.openedFor.list}>{mike.dj.openedFor.name}</ListModal>
            <ListModal name={mike.dj.djFor.name} list={mike.dj.djFor.list}>{mike.dj.djFor.name}</ListModal>
        </Container>
    )
};

export default AppearencesContainer;