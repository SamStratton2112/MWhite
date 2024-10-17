import { Container, Button, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    //add protections against empty fields 
    const nav = useNavigate()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6s2gkaq',
            'template_i69bsta',
            e.target,
            'eSDpVKbOKyAGSFtcc'
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
            <Form onSubmit={sendEmail}>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Container>
                <a href="https://www.instagram.com/djmikewhite_/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                <a href="https://soundcloud.com/user-554826787"><FontAwesomeIcon icon={faSoundcloud} size="2x"/></a>
                <a href="https://www.facebook.com/mike.white.7739814"><FontAwesomeIcon icon={faSquareFacebook} size="2x"/></a>
                <a href="https://x.com/?lang=en"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
            </Container>
        </Container>
    );
};

export default Contact;
