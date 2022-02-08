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

const Homepage= ()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const [msgData, setMsgData] = useState([])
    const { id } = useParams()
    console.log(id)
    useEffect(()=>{
        const loginData=window.localStorage.getItem('loginInfo')
        const parsedLoginInfo= JSON.parse(loginData)
        console.log(parsedLoginInfo)
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
                        <Card className="bg-dark text-white" style={{
                            marginTop:'2rem',
                            textdecoration: 'underline',
                        }}>
                            <Card.Title>
                                {x.userInfo}
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