import { useEffect, useState, useContext } from "react";
import {
    Container,
    Card,
    Button
  } from 'react-bootstrap';
import MsgForm from "../Components/MsgForm";
import {socket} from "../utils/SocketProvider";
import { UserNameContext } from "../utils/LoginInfo";
import { useParams } from "react-router-dom";

const ChatroomPage= ()=>{
    const d= new Date
    const time={
        'hour': d.getHours(),
        'min': d.getMinutes()
    }
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const [msgData, setMsgData] = useState([])
    const { id } = useParams()
    useEffect(()=>{
        const loginData=window.localStorage.getItem('loginInfo')
        const parsedLoginInfo= JSON.parse(loginData)
        setUserInfo(parsedLoginInfo.name)
       socket.on(id, msg=>{
            console.log(msg)
            setMsgData([...msgData, msg])
       })
       return()=> socket.off('res-msg')
    }, [msgData, id])
    
        return(
       <>
                {msgData.map((x)=>{
                    return (
                        <>
                        <Card className=" text-dark" style={{
                            marginTop:'2rem',
                            textdecoration: 'underline',
                            border: 'none'
                        }}>
                            <Card.Title>
                                {x.userInfo}
                                <Card.Text  style={{
                                    fontSize:'10px'
                                }}>
                                    {`Posted ${time.hour}:${time.min}`}
                                </Card.Text>
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

export default ChatroomPage;