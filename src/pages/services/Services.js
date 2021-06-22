import React, { useState } from 'react'
import Style from './Services.module.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Abt () {
  return (
    <ThemeProvider>
      <div className={Style.body}>
        <Container className={Style.container}>
          <div className={Style.entrytext}>
            Happy customers , riders and partners
          </div>
          <Row>
            <Col className='mb-4'>
            <img className={Style.photo1} src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35359803.jpg' />
            <img className={Style.photo1} src='https://i2.wp.com/cartmasterug.com/wp-content/uploads/2020/08/CartMaster-Logistics-Happy-lady.jpg?ssl=1' />
            </Col>
            <Col>
            <Row>
              <Col className='mb-4'>
              <img className={Style.photo1} src='https://image.freepik.com/free-photo/crop-customer-receiving-parcel-with-courier_23-2147801241.jpg' />
              </Col>
              <Col className='mb-4'>
              <img className={Style.photo1} src='https://www.ringcentral.co.uk/gb/en/blog/wp-content/uploads/2021/04/happy-worker-unloading-boxes-from-a-delivery-van-1536x1024.jpg'
              />
              </Col>
            </Row>
            <Row>
              <Col className='mb-4'>
              <img className={Style.photo1} src='https://global-uploads.webflow.com/5cb38cc646fa443cadc1d341/60a9642da704a6c21af92ff5_AdobeStock_314306268.jpeg' />
              </Col>
              <Col className='mb-4'>
              <img className={Style.photo1} src='https://image.freepik.com/free-photo/concept-partnership-business-young-happy-smiling-man-woman-standing-against-blue-background-studio_155003-34215.jpg'
              />
              </Col>
            </Row>
            <Row>
              <Col>
              <img className={Style.photo1} src='https://www.keyagency.net/wp-content/uploads/2018/11/Happy-Business.jpg' />
              </Col>
              <Col>
              <img className={Style.photo1} src='https://imagevars.gulfnews.com/2019/08/20/Food-delivery-guy-stock_16cafa86858_large.jpg' />
              </Col>
            </Row>
            </Col>
          </Row>
          <div className={Style.services}>
            Our Services
          </div>
          <div className={Style.headersubtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including vers
          </div>
          <div className={Style.partner}>
            Our Partners
          </div>
          <div className={Style.partnerimg}>
            <img src='https://res.cloudinary.com/timang/image/upload/v1624386889/Anthos_Partners-01.max-1700x1700_cvg9em.png' />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Abt
