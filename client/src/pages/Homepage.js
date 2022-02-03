import { useEffect, useState, useContext } from "react";
import {
    Container,
    Card,
    Button
  } from 'react-bootstrap';
import MsgForm from "../Components/MsgForm";
import {io} from 'socket.io-client'
import {socket} from "../utils/SocketProvider";
import { UserNameContext } from "../utils/LoginInfo";

const Homepage= ()=>{
    const [msgData, setMsgData] = useState([])
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    useEffect(()=>{
       socket.on('res-msg', msg=>{
            console.log(msg)
            setMsgData([...msgData, msg])
       })
       return()=> socket.off('res-msg')
    }, [msgData])
    
    const testState=()=>{
        console.log('chaning Context')
        setUserInfo('AARON')
    }
        
        return(
       <>
                   <div>{userInfo} TTTTTTTTT</div>
                {msgData.map((x)=>{
                    return (
                        <>
                        <Card style={{
                            marginTop:'2rem',
                            color:'black'
                        }}>
                            <Card.Title>
                                {x.userName}
                            </Card.Title>
                            {x.txtValue}
                        </Card>
                        
                        
                        </>
                    )
                })}
                <MsgForm
                    io= {socket}               
                />
    
       </>
    )
    
}

export default Homepage;