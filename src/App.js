import React from 'react'
import Style from './App.module.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Register from './pages/register/Register.js'
import ForgotPassword from './pages/forgot/Forgot'
import Navbar from './components/headers/navbar/Navbar'
import Footer from './components/footer/Footer'

function App () {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path={['/']} component={Home} />
          <Route path={['/login']} component={Login} />
          <Route path={['/register']} component={Register} />
          <Route path={['/forgot-password']} component={ForgotPassword} />
          {/* <Route path='*' component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
