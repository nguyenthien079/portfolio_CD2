import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    
    // FR-5.2: Send email via EmailJS
    emailjs.sendForm(
      'service_69qe995',  // Replace with your Service ID from EmailJS
      'template_230s1bp', // Replace with your Template ID from EmailJS
      form.current,
      '5m6tafhnCpAtZ7dt0'  // Replace with your Public Key from EmailJS
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, (error) => {
      console.log('FAILED...', error);
      setStatus("ERROR");
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FR-5.3: Contact Information
  const contactInfo = {
    email: "hongthanh.05012005@gmail.com",
    phone: "+84 969880079",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/nguyenthien079",
    linkedin: "https://linkedin.com/in/ngyntian5102",
    
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch </strong>
        </h1>
        <p style={{ color: "white" }}>Feel free to contact me for any work or suggestions</p>

        <Row className="contact-form-container" style={{ marginTop: "50px" }}>
          {/* FR-5.1: Contact Form */}
          <Col md={6} className="contact-form">
            <h3 className="purple" style={{ marginBottom: "20px" }}>Send Me a Message</h3>
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              {status === "SUCCESS" && (
                <div className="success-message mt-3">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "ERROR" && (
                <div className="error-message mt-3">
                  Oops! Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </Form>
          </Col>

          {/* FR-5.3: Contact Information */}
          <Col md={6} className="contact-info">
            <h3 className="purple" style={{ marginBottom: "20px" }}>Contact Information</h3>
            
            <div className="contact-info-item" style={{ marginBottom: "20px" }}>
              <AiOutlineMail style={{ fontSize: "1.5em", marginRight: "10px", color: "#c770f0" }} />
              <div>
                <strong>Email:</strong><br />
                <a href={`mailto:${contactInfo.email}`} style={{ color: "#c770f0" }}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-info-item" style={{ marginBottom: "20px" }}>
              <AiOutlinePhone style={{ fontSize: "1.5em", marginRight: "10px", color: "#c770f0" }} />
              <div>
                <strong>Phone:</strong><br />
                <a href={`tel:${contactInfo.phone}`} style={{ color: "#c770f0" }}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-info-item" style={{ marginBottom: "30px" }}>
              <AiOutlineEnvironment style={{ fontSize: "1.5em", marginRight: "10px", color: "#c770f0" }} />
              <div>
                <strong>Location:</strong><br />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* FR-5.4: Clickable Social Links */}
            <h4 className="purple" style={{ marginBottom: "15px" }}>Connect With Me</h4>
            <div className="social-links" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="social-link-btn"
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                  borderRadius: "25px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}
              >
                <AiFillGithub style={{ fontSize: "1.3em" }} />
                GitHub
              </a>
              
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="social-link-btn"
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                  borderRadius: "25px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}
              >
                <AiFillLinkedin style={{ fontSize: "1.3em" }} />
                LinkedIn
              </a>

              <a 
                href={contactInfo.telegram} 
                target="_blank" 
                rel="noreferrer"
                className="social-link-btn"
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                  borderRadius: "25px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}
              >
                <FaTelegram style={{ fontSize: "1.3em" }} />
                Telegram
              </a>
            </div>

            <div style={{ marginTop: "30px", padding: "20px", background: "rgba(200, 112, 240, 0.1)", borderRadius: "10px" }}>
              <p style={{ marginBottom: "10px" }}>
                <strong className="purple">Working Hours:</strong>
              </p>
              <p style={{ marginBottom: "5px" }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Available for urgent matters</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;