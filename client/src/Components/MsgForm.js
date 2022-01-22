import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import {io} from 'socket.io-client'
import { useState, useEffect } from 'react';

const MsgForm = ()=>{
    const [msgInput, setmsgInput] = useState()
    const socket = io('http://localhost:3001')
    const getMsgData= (e)=>{
        console.log(e.target.value)
        setmsgInput(e.target.value)
    }
   
    const sendData= ()=>{
        console.log(msgInput)
        socket.emit('send-msg', msgInput)
        return()=>{
            socket.disconnect()
        }
        
        // socket.removeAllListeners('send-msg')
    }

    return(
        <>
       <InputGroup className="mt-3">
    <FormControl
      placeholder="message..."
      aria-label="message"
      aria-describedby="basic-addon1"
        onChange={e=>getMsgData(e)}
    />
  </InputGroup>
  <Button onClick={()=>sendData()}>
      ters
  </Button>
        </>
    )
}

export default MsgForm