import { Container, Button, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm(
            'service_6s2gkaq', 
            'template_i69bsta',
            e.target, 
            'eSDpVKbOKyAGSFtcc'
        ).then(
            () => {
                console.log('SUCCESS!');
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
        </Container>
    );
};

export default Contact;
