import React, { useState, useRef } from 'react';
import Style from './Forgot.module.css';

import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ThemeProvider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
function Forgotpas() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }
  return (
    <ThemeProvider>
      <div className={Style.body}>
        <Container className={Style.container}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className={Style.title}>
                Enter your registerd
                <br />
                <span className={Style.titlecolor}>email</span>
              </div>
              <Row className='mt-4'></Row>
              {error && <Alert variant='danger'>{error}</Alert>}
              {message && <Alert variant='success'>{message}</Alert>}
              <div className={Style.formbox}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label className={Style.label}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      className={Style.forminput}
                      type='email'
                      placeholder='Enter email address'
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    disabled={loading}
                    className={Style.formsubmit}>
                    Retrieve Password
                  </Button>
                </Form>
                <Link to='/login'>
                  <div className={Style.forgot}>Back Login</div>
                </Link>
              </div>
              <Row className='mt-4'>
                <Col className='pr-0'></Col>
                <Col className='pl-0'></Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img
                className={Style.logisticsimage}
                src='https://res.cloudinary.com/timang/image/upload/v1622754029/undraw_forgot_password_gi2d_wjhjuv.png'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Forgotpas;
