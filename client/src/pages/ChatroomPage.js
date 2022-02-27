import { useEffect, useState, useContext, useRef } from "react";
import './css/ChatroomPage.css'
import {
    Container,
    Card,
    Button
  } from 'react-bootstrap';
import MsgForm from "../Components/MsgForm";
import {socket} from "../utils/SocketProvider";
import { UserNameContext, UserIdContext } from "../utils/LoginInfo";
import { useParams } from "react-router-dom";

const ChatroomPage= ()=>{
    // const newMsg= useRef()
    const d= new Date
    // console.log(d.getTimezoneOffset())
    let min= d.getMinutes();
    if(min<10){
        min='0'+min
    }
    const time={
        'hour': d.getHours(),
        'min': min
    }
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const {lastMsg, setLastMsg} =useState()
    const [msgData, setMsgData] = useState([])
    const [chatRoomTitle,setChatroomTitle]= useState()
    const { id } = useParams()
    const {userId, setUserId}= useContext(UserIdContext)
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
            console.log(msg)
                // console.log(msgData[msgData.length-1])
            // if(msgData[msgData.length-1].userInfo===msgData[msgData.length-2].userInfo){
            //     console.log('same')
            // }
            // newMsg.current.scrollIntoView({ behavior: 'smooth' });
       })
       return()=> socket.off('res-msg')
    }, [msgData, id])
        useEffect(()=>{
            console.log('change')
            // console.log(msgData[msgData.length-1])
            if(msgData.length>1){
                if(msgData[msgData.length-1].userInfo===msgData[msgData.length-2].userInfo){
                    console.log('same')
                }
                
            }
        },[msgData])
        

        return(
       <div className="main chatroombg">
            <Card.Title style={{
                margin:'0',
                padding:0,
                'fontSize':'2rem',
                'textAlign':'center',
                "textDecoration": 'underline',
                width:'100%'
            }}>
               {chatRoomTitle}
            </Card.Title>
                {msgData.map((x)=>{
                    return (
                        <Card className="mainMsgBox" style={{
                            backgroundColor:'#4E4E50',
                            borderTop:'0'
                        }}
                        >
                            {(()=>{

                            })}
                            <Card.Title onClick={()=>{
                                console.log(x.userId)
                            }}>
                                {x.userInfo}
                                <Card.Text  style={{
                                    fontSize:'10px',
                                }}>
                                    {`Posted ${time.hour}:${time.min}`}
                                </Card.Text>
                            </Card.Title>
                            <Card.Text style={{
                                 backgroundColor: '#4E4E50',
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
                    )
                })}
                <MsgForm
                    io= {socket}              
                />
    
       </div>
    )
    
}

export default ChatroomPage;