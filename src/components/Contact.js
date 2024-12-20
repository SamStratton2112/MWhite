import { Container, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Footer from './Footer';

/** Component allows users to contact artist via email using the emailJS api. I'd like to improve this component by sending a copy of the email message to the user as well.  */

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
        emailjs.sendForm(
            'service_51mqz1p',//serv key
            'template_dxiv03f', //temp key
            e.target,
            '_5PB8DAOPC68G129w' //pub key
        ).then(
            () => {
                console.log('SUCCESS!');
                alert("Thank you for reaching out, Mike White will get back to you shortly");
                nav('/')
            },
            (error) => {
                console.log('FAILED...', error);
                alert("An error occured, please try again later or contact Mike White through one of his social media platforms.");
                nav('/')
            }
        );
    };

    return (
        <>
            <Container>
                <h1 style={{ marginTop: '.5em' }}>Contact</h1>
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