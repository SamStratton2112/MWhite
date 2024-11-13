import { Col, Row } from "react-bootstrap";
import List from "../List";
import './Model.css'

/** Used alongside RightImg to create a tiling effect alternating image and list.  */

const LeftImg = ({ image, list, name }) => {
    return (
        <Row className="center" >
            <Col className="center imgContainer">
                <img style={{ height: '30em' }} src={image} alt='Mike White Model' />
            </Col>
            <Col className="txtContainer">
                    <h2>{name}</h2>
                    <List list={list}/>
            </Col>
        </Row>
    )
};

export default LeftImg;