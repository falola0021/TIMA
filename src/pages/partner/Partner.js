import React, { useState,useEffect } from 'react'
import Style from './Partner.module.css'
import { Container, Row, Col,  } from 'react-bootstrap'
import { Avatar,ThemeProvider } from '@chakra-ui/core'
import Stats from './stats/Stats';
import Table from './allorderstable/Table';



function Ptnr ({toggler,setToggler}) {
  useEffect(() => {
   setToggler(false)
  });
   const [switchitem, setSwitchitem] = useState({
     dashboard:true,
     profile:false,
     order:false,
     transaction:false
   })

    const handleDashboard = () => {
    setSwitchitem({
      dashboard:true,
        profile:false,
     order:false,
     transaction:false

    })
  }

     const handleProfile = () => {
    setSwitchitem({
      dashboard:false,
        profile:true,
     order:false,
     transaction:false
    })
  }
     const handleOrder= () => {
    setSwitchitem({
      dashboard:false,
        profile:false,
     order:true,
     transaction:false
    })
  }
     const handleTransaction = () => {
    setSwitchitem({
      dashboard:false,
        profile:false,
     order:false,
     transaction:true
    })
  }

const [carddetails] = useState({
     title1:"All Accepted Orders",
     val1:"20",
     icon1:<i className="fa fa-user"></i>,
     color1:Style.card1,

       title2:"All Completed Orders",
     val2:"20",
     icon2:<i className="fa fa-user"></i>,
     color2:Style.card2,
      
     title3:"All Pending Orders",
     val3:"20",
     icon3:<i className="fa fa-user"></i>,
     color3:Style.card3,

     title4:"All Orders",
     val4:"20",
     icon4:<i className="fa fa-user"></i>,
     color4:Style.card4,

   })


  
  return (
  <>
   <ThemeProvider>
  <Row  className="m-0 p-0">
    <Col className="m-0 p-0"   sm={2}>
      <div className={Style.sidebar}>
      <div className={Style.brandlogodiv}>
   <img className={Style.brandlogo} src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg' />

    </div> 
    <div className={Style.partnername}>
       Falola Adedayo
   </div>

<div className={Style.itembox}>
  <div onClick={handleDashboard} className={switchitem.dashboard ? Style.itemactive:Style.iteminactive }>
    <i className="fa fa-th-large mr-2"></i> <span>Dashboard</span>
  </div>
  <div onClick={handleOrder} className={switchitem.order ? Style.itemactive:Style.iteminactive }>
    <i className="fa fa-motorcycle mr-2"></i> <span>Orders</span>
  </div>
  <div onClick={handleTransaction} className={switchitem.transaction ? Style.itemactive:Style.iteminactive }>
    <i className="fa fa-wallet mr-2"></i> <span>Transctions</span>
  </div>
  <div onClick={handleProfile} className={switchitem.profile ? Style.itemactive:Style.iteminactive }>
    <i className="fa fa-user mr-2"></i> <span>Profile</span>
  </div>

 
</div>
 <div className={Style.logout}>
    <i className="fa fa-sign-out-alt"></i>
  </div>
</div>
    </Col>
    <Col className="m-0 p-0" >
    <div className={Style.nav}>
     <div className={Style.navicon}>
        <Avatar className={Style.avatar}  size="sm" src="https://bit.ly/broken-link" />
       </div>
</div>
<Container className="pt-3">
    
     { switchitem.dashboard &&
     <div>
  <div className={Style.title}>Dashboard</div>
  
 
  <div className={Style.statcards}>
    <Stats 
    title={carddetails.title1}
    val={carddetails.val1}
    icon={carddetails.icon1}
      background={carddetails.color1}
    />
    <Stats
      title={carddetails.title2}
    val={carddetails.val2}
    icon={carddetails.icon2}
      background={carddetails.color2}
    />
    
    <Stats
       title={carddetails.title3}
    val={carddetails.val3}
    icon={carddetails.icon3}
      background={carddetails.color3}
    />
    <Stats
       title={carddetails.title4}
    val={carddetails.val4}
    icon={carddetails.icon4}
      background={carddetails.color4}
    />
  </div>

  <div>
    <Table/>
  </div>
  </div>
  }

    { switchitem.order &&
     <div>
  <div className={Style.title}>Orders</div>
  </div>
}

</Container>

    </Col>
  </Row>
  </ThemeProvider>
  </>
  )
}

export default Ptnr
