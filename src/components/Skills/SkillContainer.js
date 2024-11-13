import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../ImageCarousel";
import VideoCarousel from "../VideoCarousel";

/** Displays skill and skill details. */

export const SkillContainer = ({ allImages, allVideos, name }) => {
    console.log(allVideos)
    return (
        <Container style={{ width: '100vw', padding: '1em', marginTop: '.5em', marginBottom: '1em' }}>
            <h1>{name}</h1>
            <Row>
                <Col md={12} lg={5}>
                    <ImageCarousel allImages={allImages} />

                </Col>
                <Col md={12} lg={7}>
                    <VideoCarousel allVideos={allVideos} />

                </Col>
            </Row>
        </Container>
    )
};