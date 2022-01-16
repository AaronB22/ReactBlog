import {
    Card,
  } from 'react-bootstrap'
import FriendsList from './friendslist'

const SideBar = ()=>{
    return(
        <>
        <Card style={{
            width:
            '15rem', 
            height:'100rem',
            backgroundColor: 'gray',
            marginLeft: 'auto',
            padding:'0'
            }}>
            <FriendsList/>
        </Card>
        </>
    )
}

export default SideBar