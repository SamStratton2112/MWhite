import { Container, Row, Col } from "react-bootstrap";
import RoleCard from "./RoleCard";


export const RoleContainer = ({type}) =>{
    const cols = []
    for(let obj in type){
        //Something is messing with alignment here 
        cols.push(<Col className="center" ><RoleCard
            name={type[obj].name}
            role={type[obj].role}
            company={type[obj].company}
            year={type[obj].year}
            location={type[obj].location}
        /></Col>)
    };

    return(
        <Container>
            <Row lg={3} md={12}  >
                {cols}
            </Row>
        </Container>
    )
};