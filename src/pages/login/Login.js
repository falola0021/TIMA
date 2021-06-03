import React, { useState } from 'react'
import Style from './Login.module.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Select, FormControl, FormLabel, ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Login () {
  const [switchView, setSwitchView] = useState(true)

  const handleSwitch = () => {
    setSwitchView(!switchView)
  }
  return (
    <ThemeProvider>
      <div className={Style.body}>
        <Container className={Style.container}>
          <Row>
            <Col lg={6} md={6} sm={12}>
            <div className={Style.title}>
              Welcome,
              <br/><span className={Style.titlecolor}>login</span> to start
            </div>
            <Row className='mt-4'>
            </Row>
            <div className={Style.formbox}>
              <Form>
                <Form.Group controlId='formGroupEmail'>
                  <Form.Label className={Style.label}>
                    Email Address
                  </Form.Label>
                  <Form.Control className={Style.forminput} type='email' placeholder='Enter email address' />
                </Form.Group>
                <Form.Group controlId='formGroupPassword'>
                  <Form.Label className={Style.label}>
                    Password
                  </Form.Label>
                  <Form.Control className={Style.forminput} type='password' placeholder='Enter password' />
                </Form.Group>
                <Button className={Style.formsubmit}>
                  Login
                </Button>
              </Form>
              <Link to='/forgot-password'>
              <div className={Style.forgot}>
                Forgot Password ?
              </div>
              </Link>
            </div>
            <Row className='mt-4'>
              <Col className='pr-0'>
              </Col>
              <Col className='pl-0'>
              </Col>
            </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <img className={Style.logisticsimage} src='https://res.cloudinary.com/timang/image/upload/v1622748252/undraw_mobile_login_ikmv_ndtbd2.png' />
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
  )
}

export default Login
