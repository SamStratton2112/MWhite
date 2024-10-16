import { Container } from "react-bootstrap";
import List from "../List";

const LeftImg =({image, list})=>{
    return(
        <Container>
            <img style={{height:'200px'}} src={image}/>
            <List list={list}/>
        </Container>
    )
};

export default LeftImg;