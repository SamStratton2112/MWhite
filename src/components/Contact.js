import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'

const Contact = () => {
    const nav = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.user_Name.value.trim();
        const email = e.target.user_email.value.trim();
        const message = e.target.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert("Please fill out all fields before submitting.");
            return;
        }
        //Protect these values in process.env, currently not working...
        emailjs.sendForm(
            '',//service key in .env
            '', //template key in .env
            e.target,
            '' //public key in .env
        ).then(
            () => {
                console.log('SUCCESS!');
                alert("Thank you for reaching out, I'll get back to you shortly");
                nav('/')
            },
            (error) => {
                console.log('FAILED...', error);
            }
        );
    };

    return (
        <Container>
            <h1 style={{ marginTop: '1em' }}>Contact</h1>
            <Row className='center'>
                <Col md={12} lg={3}>
                    <img className="contactImg" alt="NovaImg" src="https://i.imgur.com/pP4QXY2.jpeg" />
                </Col>
                <Col md={12} lg={9}>
                    <Form className='formContainer containerBckground' onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                size="md"
                                type="Text"
                                name="user_Name"
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control
                                size="md"
                                type="email"
                                name="user_email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicInput">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                aria-label="With textarea"
                            />
                        </Form.Group>
                        <button className="bttn" type="submit">
                            Submit
                        </button>
                    </Form></Col>
            </Row>
            <Container className="center">
                <a className="socialMedia" href="https://soundcloud.com/user-554826787"><FontAwesomeIcon icon={faSoundcloud} size="2x" /></a>
                <a className="socialMedia" href="https://www.instagram.com/djmikewhite_/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a className="socialMedia" href="https://www.facebook.com/mike.white.7739814"><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></a>
            </Container>
        </Container>
    );
};

export default Contact;