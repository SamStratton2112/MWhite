import { Container } from "react-bootstrap";
import List from "../List";

const RightImg =({image, list, name})=>{
    return(
        <Container className="center">
            <Container>
                <span>{name}</span>
                <List list={list}/>
            </Container>
            <Container className="center imgContainer">
                <img style={{height:'30em'}} src={image} alt='Mike White Model'/>
            </Container>
        </Container>
    )
};

export default RightImg;