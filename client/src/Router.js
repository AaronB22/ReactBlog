import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ChatroomPage from './pages/ChatroomPage';
import Login from './pages/Login';
import CreateNewChatRoom from './pages/CreateNewChatRoom';
import Home from './pages/Home'

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
            
        </Routes>
        
    )
}

export default Routers;