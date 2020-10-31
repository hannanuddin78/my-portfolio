import React from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_my_portfolio", "template_dh0qq4f", e.target, "user_bEhr7TMx5eQ6GzREPKz86")
      .then(
        (result) => {
          alert("Your Massage Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact-form r mb-5">
      <Form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <Form.Group>
          <Form.Control type="name" placeholder="Name" name="user_name" require />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" name="user_email" require />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Your message" name="message" require />
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
