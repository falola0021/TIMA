import React, { useState } from 'react'
import Style from './Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from '@chakra-ui/core'
import PriceChecker from '../../components/pricechecker/PriceCheck'
import FormStepper from '../../components/formStepper/FormStepper'

function HomePage () {
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
              Your trusted
              <br/><span className={Style.titlecolor}>delivery</span> partner
            </div>
            <div className={Style.subtitle}>
              Experience the fastest service,
              <br/> everythimg delivered to your doorstep!
            </div>
            <Row className='mt-4'>
              <Col className='pr-0'>
              <button onClick={handleSwitch} className={switchView ? Style.activebutton : Style.inactivebutton}>
                Check Price
              </button>
              </Col>
              <Col className='pl-0'>
              <button onClick={handleSwitch} className={switchView ? Style.inactivebutton : Style.activebutton}>
                Place Order
              </button>
              </Col>
            </Row>
            {switchView ? <PriceChecker/> : <FormStepper/>}
            </Col>
            <Col lg={6} md={6} sm={12}>
            <img className={Style.logisticsimage} src='https://res.cloudinary.com/timang/image/upload/v1622406530/undraw_logistics_x4dc_lkbvdg.svg' />
            <div className={Style.titleright}>
              <div>
                Got bike ? <span className={Style.titlecolor2}>partner</span>
                <br/> with us
              </div>
            </div>
            <div className={Style.servicetime}>
              Our booking time : 7am - 5pm, Mon -Sat
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
