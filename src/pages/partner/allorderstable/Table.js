import React, { useState, useEffect } from 'react'
import Style from './Table.module.css'
import MUIDataTable from 'mui-datatables'
import { Modal, Row, Col } from 'react-bootstrap'

function Table () {
  const [show, setShow] = useState(false)
  const handleDeatails = () => {
    setShow(!show)
  }

  const handleTakeOrder = () => {
    alert('taken')
  }
  const columns = ['Pick-Up Address', 'Drop-Off Address', 'Item', 'Amount', 'Delivery Schedule', 'Details', 'Action']

  const data = [
    ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>
    ],
    ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    [
      'Blake Duncan',
      'Business Management Analyst',
      'San Diego',
      65,
      '$94,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>
    ],
    ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>],
    [
      'Addison Navarro',
      'Business Management Analyst',
      'New York',
      50,
      '$295,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button onClick={handleTakeOrder} className={Style.takeorders}>
        Take Order
      </button>
    ],

    ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000',
      <button onClick={handleDeatails} className={Style.details}>
        View Details
      </button>,
      <button className={Style.takeorders}>
        Take Order
      </button>]
  ]

  const options = {
    filterType: 'dropdown',
    responsive: 'scroll'
  }

  return (
    <div className={Style.body}>
      <MUIDataTable
        title={"All Available Orders"}
        data={data}
        columns={columns}
        options={options} />
      <Modal
        onHide={handleDeatails}
        show={show}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <div className={Style.headerbox}>
          <img className={Style.brandlogo} src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg' />
          <div>
            <i className='fa fa-times' onClick={handleDeatails}></i>
          </div>
        </div>
        <Modal.Body>
          <div>
            <div className={Style.sendertitle}>
              Sender's Information
            </div>
            <Row>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Name
              </div>
              <div className={Style.text}>
                Falola Adedayop
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Address
              </div>
              <div className={Style.text}>
                11 moyomatreet fagba lagos
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Nearest Bustop
              </div>
              <div className={Style.text}>
                Okota Lagos
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Phone Number
              </div>
              <div className={Style.text}>
                0908867554433
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Email
              </div>
              <div className={Style.text}>
                falola@yahoo.com
              </div>
              </Col>
            </Row>
            '
            <div className={Style.sendertitle}>
              Receiver's Information
            </div>
            <Row>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Name
              </div>
              <div className={Style.text}>
                Falola Adedayop
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Address
              </div>
              <div className={Style.text}>
                11 moyomatreet fagba lagos
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Nearest Bustop
              </div>
              <div className={Style.text}>
                Okota Lagos
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Phone Number
              </div>
              <div className={Style.text}>
                0908867554433
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Email
              </div>
              <div className={Style.text}>
                Falola@yahoo.com
              </div>
              </Col>
            </Row>
            <div style={{marginTop: '30px'}} className={Style.sendertitle}>
              Item Information
            </div>
            <Row>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Description
              </div>
              <div className={Style.text}>
                An iphonex pro max with twi charger
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Delivery Type
              </div>
              <div className={Style.text}>
                One Way
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Delivery Schedule
              </div>
              <div className={Style.text}>
                Same-day
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Amount
              </div>
              <div className={Style.text}>
                5000
              </div>
              </Col>
              <Col className='mt-3' sm={4}>
              <div className={Style.label}>
                Delivery Time
              </div>
              <div className={Style.text}>
                Not more than 5hrs from now
              </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <div className={Style.footer}>
          <button className={Style.takeorders} onClick={handleDeatails}>
            Take order
          </button>
          <button className={Style.details} onClick={handleDeatails}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Table
