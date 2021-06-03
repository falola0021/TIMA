import React from 'react'
import Style from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../../assets/images/logo.png'

import FootSocials from './FooterSocials'

function Foot () {
  return (
    <div className={Style.footerbox}>
      <Container>
        <Row>
          <Col>
          <img className={Style.brandlogo} src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg' />
          </Col>
          <Col>
          <div className={Style.title}>
            About Us
          </div>
          <div className={Style.subtext}>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
          </div>
          </Col>
          <Col>
          <div className={Style.title}>
            About Us
          </div>
          <div className={Style.subtext}>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
          </div>
          </Col>
          <Col>
          <div className={Style.title}>
            About Us
          </div>
          <div className={Style.subtext}>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
            <div>
              Subtext
            </div>
          </div>
          </Col>
        </Row>
        <div className={Style.socialbox}>
          <FootSocials/>
        </div>
      </Container>
    </div>

  )
}

export default Foot
