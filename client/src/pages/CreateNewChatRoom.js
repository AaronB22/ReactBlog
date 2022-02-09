import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';


const CreateNewChatRoom = ()=>{
   const reqNewChatRoom =(value)=>{
       const jsonValue={
           "name":value
       }
       const url= `/findChatRoom/${value}`
       fetch(url).then((res)=>{
           return res.json()
       }).then((data)=>{
           if(data[0]){
              alert('Name Already Taken')
           }
           else{
               
                  fetch('/newChatRoom', {
                  method: 'POST',
                  body: JSON.stringify(jsonValue),
                  headers: {
                      Accept: 'application/json, text/plain, */*',
                      'Content-Type': 'application/json',
                    }
                  }).then((res)=>{
                      return res.json()
                  }).then((data)=>{
                      const newUrl='/chatroom/'+data[0]._id
                      window.location.assign(newUrl)
                  })
           }
       })

   }

    return(
        <>
            <h3>
                Create New Chatroom
            </h3>
            <InputGroup className="mt-3">
    <FormControl
      placeholder="Chatroom Tittle..."
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