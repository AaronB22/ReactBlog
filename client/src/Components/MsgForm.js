import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import { UserNameContext } from '../utils/LoginInfo';
import { useContext } from 'react';
import { useParams } from "react-router-dom";

const MsgForm = (props)=>{
    const {userInfo} = useContext(UserNameContext)
    const { id } = useParams()
    console.log(id)
    const socket= props.io
    const sendData= (txtValue)=>{
        // console.log(msgInput)
        socket.emit('send-msg', {txtValue, userInfo, id})
        return()=>{
            socket.disconnect()
        }
    }
    
    return(
        <div className='position-fixed' style={{
            bottom:0,
            width:'70rem'
        }}>
       <InputGroup className="mt-3">
    <FormControl
      placeholder="message..."
      aria-label="message"
      aria-describedby="basic-addon1"
      onKeyPress={e=>{
            if(e.key==='Enter' && e.target.value){
                sendData(e.target.value);
                e.target.value = '';
            }
        }}
    />
  </InputGroup>
 
        </div>
    )
}

export default MsgForm