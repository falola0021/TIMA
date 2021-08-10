import React, { useState, useRef } from 'react';
import Style from './Login.module.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ThemeProvider } from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function Login() {
  const emailRef = useRef();

  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/partner');
    } catch {
      setError('Failed to log in');
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
                Welcome,
                <br />
                <span className={Style.titlecolor}>login</span> to start
              </div>
              <Row className='mt-4'></Row>
              <div className={Style.formbox}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label className={Style.label}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      className={Style.forminput}
                      type='email'
                      ref={emailRef}
                      required
                      placeholder='Enter email address'
                    />
                  </Form.Group>
                  <Form.Group controlId='formGroupPassword'>
                    <Form.Label className={Style.label}>Password</Form.Label>
                    <Form.Control
                      className={Style.forminput}
                      type='password'
                      ref={passwordRef}
                      required
                      placeholder='Enter password'
                    />
                  </Form.Group>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <Button type='submit' className={Style.formsubmit}>
                    Login
                  </Button>
                </Form>
                <Link to='/forgot-password'>
                  <div className={Style.forgot}>Forgot Password ?</div>
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
                src='https://res.cloudinary.com/timang/image/upload/v1622748252/undraw_mobile_login_ikmv_ndtbd2.png'
              />
              <div className={Style.servicetime}>
                We help you grow your business and make good impression
                <Link to='/register'>
                  <span>Sign Up</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Login;
