import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import React from 'react';
import Login from './pages/Login';
import { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import SideBar from './Components/Sidebar-components/siderbar-index';
import * as data from './testStuff/test.json'
const msgData = (data.default.message)

function App() {
  const getRes = async()=>{
     
     const res = await fetch('/api/hello');
     const body = await res.json();
     if (res.status!== 200){
       console.log('API call failed');
      }
      if (res.status=== 200){
        return body
        
      
    }
  }
  const [Data, setData] = useState()



  useEffect(()=>{
    getRes()
      .then(res => {
        setData(res.body)
      })
    }, []);
    console.log(Data)
  
  return (
        <>
          <Navbar bg="primary" expand='lg'>
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="login">Login</Navbar.Brand>
            </Container>
          </Navbar>

          <Row style={{
            width: '100%'
          }}>

            <Chatrooms/>
            <Router >
              <Routes>
                <Route exact path='/' element={<Homepage/>}/>
                <Route exact path='/login' element={<Login/>}/>
              </Routes>
             </Router>
            <SideBar />
           </Row>
        </>
  );
}

export default App;
