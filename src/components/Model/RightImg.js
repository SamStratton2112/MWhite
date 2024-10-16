import { Container } from "react-bootstrap";
import List from "../List";

const RightImg =({image, list})=>{
    return(
        <Container style={{ display: 'flex'}}>
        {/* <Container style={{ display: 'flex', alignItems: 'center}}> */}
            <List list={list}/>
            <img style={{height:'500px'}} src={image}/>
        </Container>
    )
};

export default RightImg;