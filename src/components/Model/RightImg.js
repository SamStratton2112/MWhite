import { Container } from "react-bootstrap";
import List from "../List";

const RightImg =({image, list, name})=>{
    return(
        <Container style={{ display: 'flex'}}>
        {/* <Container style={{ display: 'flex', alignItems: 'center}}> */}
            <Container>
                <span>{name}</span>
                <List list={list}/>
            </Container>
            <img style={{height:'500px'}} src={image} alt='Mike White Model'/>
        </Container>
    )
};

export default RightImg;