import React, { useState } from 'react'
import Style from './Register.module.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Select, FormControl, FormLabel, ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Register () {
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
              Sign up today
              <br/>with
              <span className={Style.titlecolor}>tima</span>
            </div>
            <Row className='mt-4'>
            </Row>
            <div className={Style.formbox}>
              <Form>
                <Form.Group controlId='formGroupEmail'>
                  <Row>
                    <Col>
                    <Form.Label className={Style.label}>
                      First Name
                    </Form.Label>
                    <Form.Control className={Style.forminput} type='text' placeholder='Enter First Name' />
                    </Col>
                    <Col>
                    <Form.Label className={Style.label}>
                      Last Name
                    </Form.Label>
                    <Form.Control className={Style.forminput} type='text' placeholder='Enter Last Name' />
                    </Col>
                  </Row>
                </Form.Group>
                <FormControl id='country'>
                  <Form.Label className={Style.label}>
                    Select Role
                  </Form.Label>
                  <Select className={Style.formselect}>
                    <option>
                      Basic User
                    </option>
                    <option>
                      Partner
                    </option>
                  </Select>
                </FormControl>
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
              <Link to='/login'>
              <div className={Style.forgot}>
                Already have an account ? Login
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
            <img className={Style.logisticsimage} src='https://res.cloudinary.com/timang/image/upload/v1622751077/undraw_Project_completed_re_pqqq_e0xpfc.png' />
            <div className={Style.servicetime}>
              <div className={Style.title}>
                Increase sales when you partner with
                <br/>
                <span className={Style.titlecolor}>tima logistics</span>
              </div>
            </div>
            <img className={Style.logisticsimage} src='https://res.cloudinary.com/timang/image/upload/v1622751550/undraw_happy_announcement_ac67_lifqqm.png' />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Register
