import { BrowserRouter as Router} from 'react-router-dom'
import Routers from './Router';
import React from 'react';
import "./App.css"
import { useEffect, useState} from "react";
import {
  Row,
  Card,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComp from './Components/NavBarComp';
import {SocketContext} from './utils/SocketProvider';
import { UserNameContext, UserIdContext, CustomUserNameContext} from './utils/LoginInfo';
import ChatRoomIndex from './Components/ChatroomIndex';


function App() {
  const [userInfo, setUserInfo]= useState(null);
  const [logInStatus, setLogInStatus] = useState(false);
  const [userId, setUserId] = useState()
  const [customName, setCustomName] = useState();
  useEffect(()=>{
    const loginData=window.localStorage.getItem('loginInfo')
    if(loginData){
      const parsedLoginInfo= JSON.parse(loginData)
      if(parsedLoginInfo){
    
        setUserInfo(parsedLoginInfo.name)
        setUserId(parsedLoginInfo.googleId)
        setCustomName(parsedLoginInfo.userName)
        setLogInStatus(true)
      }

    }
  
  },[logInStatus])

  return (
        <div className='App' >
            <SocketContext.Provider>
            <UserIdContext.Provider value={{userId, setUserId}}>
            <UserNameContext.Provider value={{userInfo, setUserInfo}}>
            <CustomUserNameContext.Provider value={{customName, setCustomName}}>

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
                </CustomUserNameContext.Provider>
              </UserNameContext.Provider>
              </UserIdContext.Provider>
            </SocketContext.Provider>
        </div>
  );
}

export default App;
