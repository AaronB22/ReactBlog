import { useEffect, useState } from "react";
import {
    Container,
    Card,
    Button
  } from 'react-bootstrap';
import MsgForm from "../Components/MsgForm";
import {io} from 'socket.io-client'
const PORT = 'http://localhost:3001'
let socket;

const Homepage= ()=>{
    const [msgData, setMsgData] = useState([])
    socket = io(PORT)
    socket.connect()
    useEffect(()=>{
        // return() =>{
            //     socket.disconnect()
            // }
            
        },[PORT])
        socket.on('res-msg', msg =>{
            console.log(msg)
            setMsgData([...msgData, msg])
        })
        return(
       <>
        <Card className="bg-dark text-white" style={{
            height:'100rem',
             width:'75rem',
              marginLeft:'auto',
               marginRight:'auto'
               }}>
                {msgData.map((x)=>{
                    return (
                        <>
                        <Card style={{
                            marginTop:'2rem',
                            color:'black'
                        }}>
                            {x}
                        </Card>
                        
                        
                        </>
                    )
                })}
                <MsgForm />
        </Card>
       </>
    )
    
}

export default Homepage;