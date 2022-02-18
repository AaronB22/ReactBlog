import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Routers from './Router';
import React from 'react';
import "./App.css"
import { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Container,
  Row,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import {SocketContext} from './utils/SocketProvider'
import { UserIDContext } from './utils/LoginInfo';
import { UserNameContext } from './utils/LoginInfo';


function App() {
  const [userInfo, setUserInfo]= useState(null)
  const [logInStatus, setLogInStatus] = useState('Login')
  useEffect(()=>{
    if(userInfo){
      setLogInStatus(null)
    }
  },[userInfo])


  return (
        <>
            <SocketContext.Provider>
               <UserIDContext.Provider>
                <Router >
          <Navbar expand='lg' className="NvBar">
            <Container>
            <Navbar.Brand ><Link to="/" className='text-black'>Home</Link></Navbar.Brand>
            <Navbar.Brand  ><Link to="/login" className='text-black'>{logInStatus}</Link></Navbar.Brand>
            <Navbar.Brand ><Link to="/" className='text-black'>{userInfo}</Link></Navbar.Brand>
            </Container>
          </Navbar>
          <Row style={{
            width: '100%'
          }}>
            <Chatrooms/>
             <UserNameContext.Provider value={{userInfo, setUserInfo}}>

              <Card className='App' style={{
            height:'100rem',
             width:'95rem',
            //  backgroundColor: '#EDF5E1'
              // marginLeft:'auto',
              //  marginRight:'auto',
               }}>
                    <Routers/>
                    </Card>
              </UserNameContext.Provider>
           </Row>
                </Router>
                </UserIDContext.Provider>
            </SocketContext.Provider>
        </>
  );
}

export default App;
