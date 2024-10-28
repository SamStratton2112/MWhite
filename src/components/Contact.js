import { Container, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Footer from './Footer';

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
        <>
            <Container>
                <h1 style={{ marginTop: '1em' }}>Contact</h1>
                <Form className='formContainer containerBckground' onSubmit={sendEmail}>
                    <Form.Group className="mb-3 leftText" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            size="md"
                            type="Text"
                            name="user_Name"
                            placeholder="Name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 leftText" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control
                            size="md"
                            type="email"
                            name="user_email"
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 leftText" controlId="formBasicInput">
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
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;