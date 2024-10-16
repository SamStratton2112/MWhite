import { Container } from "react-bootstrap";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import mike from "../../data";

const Model = ()=>{
    return(
        <Container>
            <h1>Model</h1>
            <LeftImg list={mike.modeling.publications.list} image={mike.modeling.publications.image}/>
            <RightImg list={mike.modeling.host.list} image={mike.modeling.host.image}/>
            <LeftImg list={mike.modeling.promo.list} image={mike.modeling.promo.image}/>
            <RightImg list={mike.modeling.shows.list} image={mike.modeling.shows.image}/>
        </Container>
    )
};

export default Model;