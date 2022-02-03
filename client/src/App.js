import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Homepage from './pages/Homepage';
import React from 'react';
import Login from './pages/Login';
import { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import SideBar from './Components/Sidebar-components/siderbar-index';
import * as data from './testStuff/test.json'
import {SocketContext} from './utils/SocketProvider'
import { UserIDContext } from './utils/LoginInfo';
import { UserNameContext } from './utils/LoginInfo';

function App() {
  const [userInfo, setUserInfo]= useState()
  return (
        <>
            <SocketContext.Provider>
               <UserIDContext.Provider>
                <Router >
          <Navbar bg="primary" expand='lg'>
            <Container>
            <Navbar.Brand >Login</Navbar.Brand>
            </Container>
          </Navbar>
           <Link to="/">Home</Link>
          <Link to="/login">About</Link>
          <Row style={{
            width: '100%'
          }}>

            <Chatrooms/>
             <UserNameContext.Provider value={{userInfo, setUserInfo}}>

                  <Card className="bg-dark text-white" style={{
            height:'100rem',
             width:'75rem',
              marginLeft:'auto',
               marginRight:'auto'
               }}>
                  <Routes>
                    <Route exact path='/' element={
                      <Homepage/>
                    }/>
                    <Route exact path='/login' element={<Login/>}/>
                  </Routes>
                    </Card>
              </UserNameContext.Provider>
            <SideBar />
           </Row>
                </Router>
                </UserIDContext.Provider>
            </SocketContext.Provider>
        </>
  );
}

export default App;
