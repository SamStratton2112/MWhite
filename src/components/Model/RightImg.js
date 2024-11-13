import { Row, Col } from "react-bootstrap";
import List from "../List";

/** Used alongside LeftImg to create a tiling effect alternating image and list.  */

const RightImg =({image, list, name})=>{
    return(
        <Row className="center">
            <Col>
                <h2>{name}</h2>
                <List list={list}/>
            </Col>
            <Col className="center imgContainer">
                <img style={{height:'30em'}} src={image} alt='Mike White Model'/>
            </Col>
        </Row>
    )
};

export default RightImg;