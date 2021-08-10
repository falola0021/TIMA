import React, { useState, useRef } from 'react';

import Style from './Register.module.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ThemeProvider } from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function Register() {
  const emailRef = useRef();

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const handleSwitch = () => {
  //   setSwitchView(!switchView)
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/partner');
    } catch {
      setError('Failed to create an account');
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
                Sign up today
                <br /> with
                <span className={Style.titlecolor}>tima</span>
              </div>
              <Row className='mt-4'></Row>
              <div className={Style.formbox}>
                <Form onSubmit={handleSubmit}>
                  {/* <Form.Group controlId='formGroupEmail'>
                                                                                                                                                                                                        <Row>
                                                                                                                                                                                                          <Col>
                                                                                                                                                                                                          <Form.Label className={Style.label}>
                                                                                                                                                                                                            First Name
                                                                                                                                                                                                          </Form.Label>
                                                                                                                                                                                                          <Form.Control
                                                                                                                                                                                                            className={Style.forminput}
                                                                                                                                                                                                            type='text'
                                                                                                                                                                                                            placeholder='Enter First Name'
                                                                                                                                                                                                            name='firstname' />
                                                                                                                                                                                                          </Col>
                                                                                                                                                                                                          <Col>
                                                                                                                                                                                                          <Form.Label className={Style.label}>
                                                                                                                                                                                                            Last Name
                                                                                                                                                                                                          </Form.Label>
                                                                                                                                                                                                          <Form.Control
                                                                                                                                                                                                            className={Style.forminput}
                                                                                                                                                                                                            type='text'
                                                                                                                                                                                                            placeholder='Enter Last Name'
                                                                                                                                                                                                            name='lastname' />
                                                                                                                                                                                                          </Col>
                                                                                                                                                                                                        </Row>
                                                                                                                                                                                                      </Form.Group> */}
                  {/* <FormControl id='country'>
                                                                                                                                                                                                                                            <Form.Label className={Style.label}>
                                                                                                                                                                                                                                              Select Role
                                                                                                                                                                                                                                            </Form.Label>
                                                                                                                                                                                                                                            <Select name='usertype' className={Style.formselect}>
                                                                                                                                                                                                                                              <option value='basicuser'>
                                                                                                                                                                                                                                                Basic User
                                                                                                                                                                                                                                              </option>
                                                                                                                                                                                                                                              <option value='partner'>
                                                                                                                                                                                                                                                Partner
                                                                                                                                                                                                                                              </option>
                                                                                                                                                                                                                                            </Select>
                                                                                                                                                                                                                                          </FormControl> */}
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
                      placeholder='Enter password'
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formGroupPassword'>
                    <Form.Label className={Style.label}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      className={Style.forminput}
                      type='password'
                      placeholder='Confirm password'
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <Button
                    type='submit'
                    disabled={loading}
                    className={Style.formsubmit}>
                    Register
                  </Button>
                </Form>
                <Link to='/login'>
                  <div className={Style.forgot}>
                    Already have an account ? Login
                  </div>
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
                src='https://res.cloudinary.com/timang/image/upload/v1622751077/undraw_Project_completed_re_pqqq_e0xpfc.png'
              />
              <div className={Style.servicetime}>
                <div className={Style.title}>
                  Increase sales when you partner with
                  <br />
                  <span className={Style.titlecolor}>tima logistics</span>
                </div>
              </div>
              <img
                className={Style.logisticsimage}
                src='https://res.cloudinary.com/timang/image/upload/v1622751550/undraw_happy_announcement_ac67_lifqqm.png'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Register;
