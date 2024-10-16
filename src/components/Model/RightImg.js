import { Container } from "react-bootstrap";
import List from "../List";

const RightImg =({image, list})=>{
    return(
        <Container>
            <List list={list}/>
            <img src={image}/>
        </Container>
    )
};

export default RightImg;