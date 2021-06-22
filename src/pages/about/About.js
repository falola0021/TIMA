import React, { useState } from 'react'
import Style from './About.module.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Abt () {
  return (
    <ThemeProvider>
      <div className={Style.body}>
        <Container className={Style.container}>
          <div className={Style.entrytext}>
            We are committed to helping you achieve your goals
          </div>
          <div className={Style.subtext}>
            we don't just deliver items but we ensure safety,credibility and swift in delivery .That is what makes us unique
          </div>
          <img className={Style.photo1} src='https://res.cloudinary.com/timang/image/upload/v1624385128/cytonn-photography-n95VMLxqM2I-unsplash_znqhg0.jpg' />
          <Row>
            <Col className={Style.header}>
            <div className={Style.headertext}>
              OUR MISSION
            </div>
            <div className={Style.headersubtext}>
              To provide financial sustainability through our cutting-edge platforms, experienced and professional fund managers in the International Financial Market.
            </div>
            </Col>
            <Col className={Style.header}>
            <div className={Style.headertext}>
              OUR VISION
            </div>
            <div className={Style.headersubtext}>
              To provide financial sustainability through our cutting-edge platforms, experienced and professional fund managers in the International Financial Market.
            </div>
            </Col>
          </Row>
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
