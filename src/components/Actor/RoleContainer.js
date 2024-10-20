import { Container, Row, Col } from "react-bootstrap";
import RoleCard from "./RoleCard";


export const RoleContainer = ({type}) =>{
    const cols = []
    for(let obj in type){
        //move this CSS into shared CSS
        cols.push(<Col lg={3} md={6} sm={12}><RoleCard
            name={type[obj].name}
            role={type[obj].role}
            company={type[obj].company}
            year={type[obj].year}
            location={type[obj].location}
        /></Col>)
    };

    return(
        <Container>
            <Row className="center">
                {cols}
            </Row>
        </Container>
    )
};