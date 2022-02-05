import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';


const CreateNewChatRoom = ()=>{
   const reqNewChatRoom =async (value)=>{
       const jsonValue={
           "name":value
       }
       const url = '/findChatRoom/'+value
       const res=await fetch(url)
        console.log(res)
        if (res.status===500){
                console.log('Crreating new Chatroom')
                fetch('/newChatRoom', {
                method: 'POST',
                body: JSON.stringify(jsonValue),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                  },
            })
        }
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