import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";


export const SkillContainer = ({type}) =>{
    const cols = []
    for(let obj in type){
        cols.push(<Col lg={3} md={6} sm={12}><SkillCard
            name={type[obj].name}
            image={type[obj].image}
            key={type[obj.name]}
        /></Col>)
    };
    return(
        <Container style={{paddingBottom:'3em'}}>
            <Row className="center">
                {cols}
            </Row>
        </Container>
    )
};