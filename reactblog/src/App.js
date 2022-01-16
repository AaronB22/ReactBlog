import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import {
  Navbar,
  Container,
  Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatrooms from './Components/Chatroom';
import SideBar from './Components/Sidebar-components/siderbar-index';

function App() {
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
