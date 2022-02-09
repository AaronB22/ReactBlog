import { useEffect, useState, useContext, useRef } from "react";
import './css/ChatroomPage.css'
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
    const newMsg= useRef()
    const d= new Date
    console.log(d.getTimezoneOffset())
    const time={
        'hour': d.getHours(),
        'min': d.getMinutes()
    }
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const [msgData, setMsgData] = useState([])
    const [chatRoomTitle,setChatroomTitle]= useState()
    const { id } = useParams()
    useEffect(()=>{
        fetch('/getChatRoomById/'+id).then(res=>{
           return res.json()
        }).then(data=>{
            setChatroomTitle(data[0].name)
        })
    },[chatRoomTitle])
    useEffect(()=>{
        const loginData=window.localStorage.getItem('loginInfo')
        const parsedLoginInfo= JSON.parse(loginData)
        if(loginData){
            setUserInfo(parsedLoginInfo.name)
        }
        if(!loginData){
            setUserInfo(null)
        }

    },[userInfo])
    useEffect(()=>{
       socket.once(id, msg=>{
            setMsgData([...msgData, msg])
            // newMsg.current.scrollIntoView({ behavior: 'smooth' });
       })
       return()=> socket.off('res-msg')
    }, [msgData, id])
    
        return(
       <div className="main">
            <Card.Title style={{
                'fontSize':'2rem',
                'textAlign':'center',
                "textDecoration": 'underline',
            }}>
               {chatRoomTitle}
            </Card.Title>
                {msgData.map((x)=>{
                    return (
                        <>
                        <Card className="test" style={{
                            marginTop:'2rem',
                            textdecoration: 'underline',
                            border: 'none',
                            backgroundColor: '#EDF5E1'
                        }}>
                            <Card.Title>
                                {x.userInfo}
                                <Card.Text  style={{
                                    fontSize:'10px',
                                }}>
                                    {`Posted ${time.hour}:${time.min}`}
                                </Card.Text>
                            </Card.Title>
                            <Card.Text style={{
                                 backgroundColor: '#379683',
                                 borderRadius: '25px',
                                 width:"60%"
                            }}>
                                <Card.Text style={{
                                    marginLeft:'2rem',
                                    marginRight:'2rem'
                                }}>
                                    {x.txtValue}
                                </Card.Text>
                            </Card.Text>
                        </Card>
                        
                        </>
                    )
                })}
                <MsgForm
                    io= {socket}              
                />
    
       </div>
    )
    
}

export default ChatroomPage;