import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";


export const SkillContainer = ({type}) =>{
    const cols = []
    for(let obj in type){
        //move this CSS into shared CSS
        cols.push(<Col lg={3} md={6} sm={12}><SkillCard
            name={type[obj].name}
            image={type[obj].image}
        /></Col>)
    };
    // for(let skill in skills){
    //     console.log(skills[skill].skateboard)
    //     cols.push(<Col lg={3} md={6} sm={12}><SkillCard
    //         name={skills[skill].name}
    //         image={skills[skill].name}
    //     /></Col>)
    // };
    return(
        <Container>
            <Row className="center">
                {cols}
            </Row>
        </Container>
    )
};