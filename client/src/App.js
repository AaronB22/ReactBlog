import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Routers from './Router';
import React from 'react';
import "./App.css"
import { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Container,
  Row,
  Card,
  Col
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import NavBarComp from './Components/NavBarComp';
import {SocketContext} from './utils/SocketProvider'
import { UserIDContext } from './utils/LoginInfo';
import { UserNameContext } from './utils/LoginInfo';
import ChatRoomIndex from './Components/ChatroomIndex';


function App() {
  const styleTest={
    "backgroundColor":"pink"
  }
  // const [chatRoomCollaspe, setChatroomCollaspe]=useState('initial')
  const [userInfo, setUserInfo]= useState(null)
  const [logInStatus, setLogInStatus] = useState('Login')
  // const getWindowWidth=()=>{
  //   const {innerWidth: width}= window;
  //   return(
  //     width
  //   )
  // }
  // const [windowWidth, setWindowWidth] =useState(getWindowWidth)
  // useEffect(()=>{
  //   setWindowWidth(getWindowWidth())
  // })


  useEffect(()=>{
    if(userInfo){
      setLogInStatus(null)
    }
  },[userInfo])

  //responsive


  return (
        <div className='App'>
            <SocketContext.Provider>
               <UserIDContext.Provider>
                <Router >
          <Row style={{
            width: '100%',
            margin:'0',
            padding:'0',
          }}>
             <UserNameContext.Provider value={{userInfo, setUserInfo}}>
            <span className='t' style={{
              margin:'0',
              padding:'0'
            }}>
              
              {/* <Chatrooms className='p'/> */}            <ChatRoomIndex className='p' />
              <div className='p'>
               <NavBarComp/>
                <Card className='main' style={{
              height:'100rem',
              margin:'0',
              padding:'0',
              backgroundColor:'#4E4E50'
                }}>
                      <Routers/>
                      </Card>

              </div>
                    </span>   
              </UserNameContext.Provider>
           </Row>
                </Router>
                </UserIDContext.Provider>
            </SocketContext.Provider>
        </div>
  );
}

export default App;
