// E:\My Mob Projects\3 Flutter abo hamza\flutter-porfolio\src\components\ContactForm.js



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaUser, FaEnvelope, FaComment, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// Form validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TEMPORARY: For testing without EmailJS
    // Remove this setTimeout when you set up real EmailJS
    setTimeout(() => {
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);

    // Comment out the real EmailJS code for now:
    /*
    try {
      const serviceID = 'service_your_service_id';
      const templateID = 'template_your_template_id';
      const publicKey = 'your_public_key';

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'your-email@example.com',
        reply_to: data.email,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      reset();
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <section className="py-5" id="contact-form">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-4 shadow-lg p-4 p-md-5"
            >
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">Get In Touch</h2>
                <p className="text-muted">
                  Have a project in mind? Let's discuss how we can work together!
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <Alert variant="success" className="d-flex align-items-center">
                  <FaCheck className="me-2" />
                  Message sent successfully! I'll get back to you soon.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert variant="danger" className="d-flex align-items-center">
                  <FaExclamationTriangle className="me-2" />
                  Failed to send message. Please try again or email me directly.
                </Alert>
              )}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="formName">
                      <Form.Label className="fw-semibold">
                        <FaUser className="me-2" />
                        Your Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        {...register('name')}
                        className={`py-3 ${errors.name ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-block">
                          {errors.name.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-4">
                    <Form.Group controlId="formEmail">
                      <Form.Label className="fw-semibold">
                        <FaEnvelope className="me-2" />
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        {...register('email')}
                        className={`py-3 ${errors.email ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mb-4">
                  <Form.Group controlId="formMessage">
                    <Form.Label className="fw-semibold">
                      <FaComment className="me-2" />
                      Your Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Tell me about your project..."
                      {...register('message')}
                      className={`py-3 ${errors.message ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <div className="invalid-feedback d-block">
                        {errors.message.message}
                      </div>
                    )}
                  </Form.Group>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="btn-custom px-5 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>

              {/* Alternative Contact Info */}
              <div className="mt-5 pt-4 border-top text-center">
                <p className="text-muted mb-2">Prefer direct contact?</p>
                <div className="d-flex justify-content-center gap-4">
                  <a href="mailto:your-email@example.com" className="text-decoration-none">
                    <Button variant="outline-primary" size="sm">
                      <FaEnvelope className="me-2" />
                      Email Me
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <Button variant="outline-primary" size="sm">
                      <FaLinkedin className="me-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;