import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ChatroomPage from './pages/ChatroomPage';
import Login from './pages/Login';
import CreateNewChatRoom from './pages/CreateNewChatRoom';
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage';
import CreateNewUser from './pages/CreateNewUser';
import FollowList from './pages/FollowList';
import OtherUsers from './pages/OtherUsers';

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
            <Route path='/profile/:id' element={
                <ProfilePage/>
            }/>
             <Route path='/createNewUser' element={
                <CreateNewUser/>
            }/>
             <Route exact path='/follow' element={
                <FollowList/>
            }/>
            <Route exact path='/public/profile/:userName' element={
                <OtherUsers/>
            }/>
            <Route exact path='/' element={
                <Home/>
            }/>
        </Routes>
        
    )
}

export default Routers;