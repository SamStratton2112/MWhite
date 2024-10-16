import { Container } from "react-bootstrap";
import List from "../List";

const LeftImg =({image, list, name})=>{
    return(
        <Container style={{ display: 'flex'}}>
            <img style={{height:'30em'}} src={image} alt='Mike White Model'/>
            <Container>
                <span>{name}</span>
                <List list={list}/>
            </Container>
        </Container>
    )
};

export default LeftImg;