import { Container } from "react-bootstrap";
import List from "../List";

const LeftImg =({image, list})=>{
    return(
        <Container style={{ display: 'flex'}}>
            <img style={{height:'500px'}} src={image}/>
            <List list={list}/>
        </Container>
    )
};

export default LeftImg;