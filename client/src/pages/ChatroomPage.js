import { useEffect, useState, useContext } from "react";
import './css/ChatroomPage.css'
import {
    Card,
  } from 'react-bootstrap';
import MsgForm from "../Components/MsgForm";
import {socket} from "../utils/SocketProvider";
import { UserNameContext, CustomUserNameContext} from "../utils/LoginInfo";
import { useParams } from "react-router-dom";

const ChatroomPage= ()=>{
    const d= new Date()
    let min= d.getMinutes();
    if(min<10){
        min='0'+min
    }
    const time={
        'hour': d.getHours(),
        'min': min
    }
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const {customName}= useContext(CustomUserNameContext)
    const [msgData, setMsgData] = useState([])
    const [chatRoomTitle,setChatroomTitle]= useState()
    const { id } = useParams()
    useEffect(()=>{
        fetch('/getChatRoomById/'+id).then(res=>{
           return res.json()
        }).then(data=>{
            setChatroomTitle(data[0].name)
        })
    },[chatRoomTitle, id])
    useEffect(()=>{
        const loginData=window.localStorage.getItem('loginInfo')
        const parsedLoginInfo= JSON.parse(loginData)
        if(loginData){
            setUserInfo(parsedLoginInfo.name)
        }
        if(!loginData){
            setUserInfo(null)
            alert("You need to be sign in to use Chatrooms")
            window.location.assign('/')
        }

    },[userInfo, setUserInfo])
    useEffect(()=>{
        if(chatRoomTitle){
            socket.emit('chatroom_joined',{customName, chatRoomTitle})
        }
    },[id, chatRoomTitle, customName])

    useEffect(()=>{
       socket.once(id, msg=>{
            setMsgData([...msgData, msg])
            const section= document.querySelector('#scrollElm')
            section.scrollIntoView(false)
       })
       return()=> socket.off('res-msg')
    }, [msgData, id, setMsgData])
    
        
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
                    console.log(x)
                    return (
                        <Card className="mainMsgBox" style={{
                            backgroundColor:'#4E4E50',
                            borderTop:'0'
                        }}
                        >
                            {(()=>{

                            })}
                            <Card.Title onClick={()=>{
                                window.location.assign('/public/profile/'+x.customName)
                            }}>
                                {x.customName}
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
                <div 
                id='scrollElm'
                style={{
                    display:'block',
                    bottom:'10px',
                    width:'10px',
                    backgroundColor:'purple'
                }}>
                        1
                </div>
                <MsgForm
                    io= {socket}              
                />
    
       </div>
    )
    
}

export default ChatroomPage;