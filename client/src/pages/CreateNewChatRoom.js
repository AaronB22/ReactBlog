import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';


const CreateNewChatRoom = ()=>{
   const reqNewChatRoom =async (value)=>{
       const url = '/findChatRoom/'+value
       const req=await fetch(url)
        console.log(req)
   }

    return(
        <>
            <h3>
                Create New Chatroom
            </h3>
            <InputGroup className="mt-3">
    <FormControl
      placeholder="message..."
      aria-label="message"
      aria-describedby="basic-addon1"
      onKeyPress={e=>{
            if(e.key==='Enter' && e.target.value){
                reqNewChatRoom(e.target.value);
                ;
            }
        }}
    />
  </InputGroup>
        </>
    )
}

export default CreateNewChatRoom;