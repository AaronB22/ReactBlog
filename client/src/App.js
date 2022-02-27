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
import NavBarComp from './Components/NavBarComp';
import {SocketContext} from './utils/SocketProvider';
import { UserNameContext, UserIdContext } from './utils/LoginInfo';
import ChatRoomIndex from './Components/ChatroomIndex';


function App() {
  const [userInfo, setUserInfo]= useState(null);
  const [userId, setUserId] = useState()
  useEffect(()=>{
    const loginData=window.localStorage.getItem('loginInfo')
    if(loginData){
      const parsedLoginInfo= JSON.parse(loginData)
      const url='/getUser/'+parsedLoginInfo.googleId
      fetch(url).then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log(data)
        // setUserId(data[0]._id)
      })
      if(parsedLoginInfo){
    
        setUserInfo(parsedLoginInfo.name)
        setUserId(parsedLoginInfo.googleId)
      }

    }
  
  },[])

  return (
        <div className='App' >
            <SocketContext.Provider>
            <UserIdContext.Provider value={{userId, setUserId}}>
            <UserNameContext.Provider value={{userInfo, setUserInfo}}>
                <Router >
          <Row style={{
            width: '100%',
            margin:'0',
            padding:'0',
          }}>
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
           </Row>
                </Router>
              </UserNameContext.Provider>
              </UserIdContext.Provider>
            </SocketContext.Provider>
        </div>
  );
}

export default App;
