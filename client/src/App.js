import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ChatroomPage from './pages/ChatroomPage';
import React from 'react';
import Login from './pages/Login';
import { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Container,
  Row,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import SideBar from './Components/Sidebar-components/siderbar-index';
import CreateNewChatRoom from './pages/CreateNewChatRoom';
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
          <Navbar bg="primary" expand='lg'>
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

                  <Card className="bg-white text-dark" style={{
            height:'100rem',
             width:'75rem',
              marginLeft:'auto',
               marginRight:'auto'
               }}>
                  <Routes>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/newChatroom' element={<CreateNewChatRoom/>}/>
                    <Route path='/chatroom/:id' element={
                      <ChatroomPage/>
                    }/>
                    <Route exact path='/' element={
                      <ChatroomPage/>
                    }/>
                  </Routes>
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
