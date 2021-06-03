import React, { useState } from 'react'
import Style from './Forgot.module.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Select, FormControl, FormLabel, ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Forgotpas () {
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
              Enter your registerd
              <br/><span className={Style.titlecolor}>email</span>
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
                <Button className={Style.formsubmit}>
                  Retrieve Password
                </Button>
              </Form>
              <Link to='/login'>
              <div className={Style.forgot}>
                Back Login
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
            <img className={Style.logisticsimage} src='https://res.cloudinary.com/timang/image/upload/v1622754029/undraw_forgot_password_gi2d_wjhjuv.png' />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Forgotpas
