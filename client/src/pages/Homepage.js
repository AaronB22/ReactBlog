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
    const [msgData, setMsgData] = useState([])
    const { id } = useParams()
    console.log(id)
    useEffect(()=>{
       socket.on('res-msg', msg=>{
            console.log(msg)
            setMsgData([...msgData, msg])
       })
       return()=> socket.off('res-msg')
    }, [msgData])
    
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