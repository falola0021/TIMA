import React from 'react'
import Style from './Navbar.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigation = ({toggler}) => {
  console.log(toggler, 'on nav')

  return (
<>
{toggler &&
    <div className={Style.navbox}>
      
       <Navbar expand='lg'>
         <Container>
           <Navbar.Brand href='/'>
        <img className={Style.brandlogo} src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg' />

           </Navbar.Brand>
           <Navbar.Toggle aria-controls='basic-navbar-nav' />
           <Navbar.Collapse id='basic-navbar-nav'>
             <Nav className='ml-auto' activeKey={window.location.pathname}>
               <Nav.Link href='/login'>
                 Sign in
               </Nav.Link>
               <Nav.Link href='/register'>
                 Sign up
               </Nav.Link>
               <Nav.Link href='/about'>
                 About
               </Nav.Link>
               <Nav.Link href='/service'>
                 Service
               </Nav.Link>
               <Nav.Link href='/partner'>
                 Become a Partner
               </Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
    </div>
    }
</>

  )
}

export default Navigation
