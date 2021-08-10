import React, { useState, useEffect } from 'react';
import Style from './Partner.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from '@chakra-ui/core';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from './Sidebar';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Transaction from './Transaction';
import Orders from './Orders';
import Profile from '../../components/profile/Profile';

function Ptnr({ toggler, setToggler }) {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/');
    } catch {
      setError('Failed to log out');
    }
  }

  useEffect(() => {
    setToggler(false);
  });

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Row className='m-0 p-0'>
            <Col className='m-0 p-0' sm={2}>
              <Sidebar />
            </Col>
            <Col className='m-0 p-0'>
              <div className={Style.nav}>
                <div className={Style.navicon}>
                  <div className={Style.logout} onClick={handleLogout}>
                    <i className='fa fa-sign-out-alt'>Logout</i>
                  </div>
                </div>
              </div>
              <Container className='pt-3'>
                <Switch>
                  <Route exact path='/partner' component={Dashboard} />
                  <Route path='/partner/orders' component={Orders} />
                  <Route path='/partner/transactions' component={Transaction} />
                  <Route path='/partner/profile' component={Profile} />
                </Switch>
              </Container>
            </Col>
          </Row>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Ptnr;
