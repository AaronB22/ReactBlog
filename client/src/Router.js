import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ChatroomPage from './pages/ChatroomPage';
import Login from './pages/Login';
import CreateNewChatRoom from './pages/CreateNewChatRoom';
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage';

const Routers=()=>{
    return(
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/newChatroom' element={
                <CreateNewChatRoom/>
            }/>
            <Route path='/chatroom/:id' element={
                <ChatroomPage/>
            }/>
            <Route exact path='/' element={
                <Home/>
            }/>
            <Route exact path='/profile' element={
                <ProfilePage/>
            }/>
            
        </Routes>
        
    )
}

export default Routers;