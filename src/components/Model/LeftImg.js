import { Container } from "react-bootstrap";
import List from "../List";
import './Model.css'

const LeftImg = ({ image, list, name }) => {
    return (
        <Container className="center">
            <Container className="center imgContainer">
                <img style={{ height: '30em' }} src={image} alt='Mike White Model' />
            </Container>
            <Container className="txtContainer">
                    <span>{name}</span>
                    <List list={list}/>
            </Container>
        </Container>
    )
};

export default LeftImg;