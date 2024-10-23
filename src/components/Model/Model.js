import { Container } from "react-bootstrap";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import mike from "../../data";

const Model = ()=>{
    return(
        <Container>
            <h1 style={{textAlign:'left'}}>Modeling Experience</h1>
            <LeftImg list={mike.modeling.publications.list} image={mike.modeling.publications.image} name={mike.modeling.publications.name}/>
            <RightImg list={mike.modeling.shows.list} image={mike.modeling.shows.image} name={mike.modeling.shows.name}/>
            <LeftImg list={mike.modeling.host.list} image={mike.modeling.host.image} name={mike.modeling.host.name}/>
            <RightImg list={mike.modeling.promo.list} image={mike.modeling.promo.image} name={mike.modeling.promo.name}/>
        </Container>
    )
};

export default Model;