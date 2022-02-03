import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';



const MsgForm = (props)=>{
    const socket= props.io
    // const [msgInput, setmsgInput] = useState()
    // const getMsgData= (e)=>{
    //     setmsgInput(e.target.value)
    // }
   
    const sendData= (txtValue)=>{
        // console.log(msgInput)
        socket.emit('send-msg', {txtValue})
        return()=>{
            socket.disconnect()
        }
    }
    
    return(
        <>
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
 
        </>
    )
}

export default MsgForm