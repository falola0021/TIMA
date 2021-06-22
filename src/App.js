import React, { useState } from 'react'
import Style from './App.module.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Register from './pages/register/Register.js'
import Partner from './pages/partner/Partner'
import ForgotPassword from './pages/forgot/Forgot'
import Navbar from './components/headers/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Services from './pages/services/Services'

function App () {
  const [toggler, setToggler] = useState(true)
  return (
    <div>
      <Navbar toggler={toggler} />
      <BrowserRouter>
        <Switch>
          <Route exact path={['/']} component={Home} />
          <Route path={['/login']} component={Login} />
          <Route path={['/register']} component={Register} />
          <Route path={['/service']} component={Services} />
          <Route path={['/forgot-password']} component={ForgotPassword} />
          <Route path={['/about']} component={About} />
          <Route path={['/partner']}>
            <Partner toggler={toggler} setToggler={setToggler} />
          </Route>
          {/* <Route path='*' component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
