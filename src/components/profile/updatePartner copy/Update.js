import React, { useState } from 'react';
import Style from './Update.module.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

function New() {
  return (
    <div className={Style.formbox}>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>Company Name</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='Enter Company Name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>Personal Number</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='Enter Personal Number'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>
                Company Phone Number
              </Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='Enter Company Phone Number'
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label className={Style.label}>Comapny Logo</Form.Label>
              <Form.Control className={Style.forminput} type='file' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>Personal Address</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='Enter Personal Address'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>Company Address</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='Enter Company Address'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label className={Style.label}>Work Days</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='eg Monday - Friday'
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label className={Style.label}>Working Hours</Form.Label>
              <Form.Control
                className={Style.forminput}
                type='text'
                placeholder='e.g 8am-5pm'
              />
            </Form.Group>
          </Col>
        </Row>
        <div className={Style.formsubmitbox}>
          <Button className={Style.formsubmit}>Update</Button>
        </div>
      </Form>
    </div>
  );
}

export default New;
