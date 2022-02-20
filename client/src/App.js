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
  const [userInfo, setUserInfo]= useState(null);
  const [logInStatus, setLogInStatus] = useState('Login');
  const [userClickOnApp, setUserClickOnApp]= useState();
  useEffect(()=>{
    if(userInfo){
      setLogInStatus(null)
    }
  },[userInfo])

  return (
        <div className='App' >
            <SocketContext.Provider>
               <UserIDContext.Provider>
                <Router >
          <Row style={{
            width: '100%',
            margin:'0',
            padding:'0',
          }}>
             <UserNameContext.Provider value={{userInfo, setUserInfo}}>
            <span className='parent' style={{
              margin:'0',
              padding:'0'
            }}>
              
           <ChatRoomIndex className='child' />
              <div className='child'>
               <NavBarComp/>
                <Card className='main' style={{
              height:'100rem',
              margin:'0',
              padding:'0',
              backgroundColor:'#4E4E50'
                }}>
                      <Routers />
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
