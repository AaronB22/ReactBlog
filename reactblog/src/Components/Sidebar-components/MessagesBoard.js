import {
    Card,
  } from 'react-bootstrap'

const MessageBoard = ()=>{
  return(
    <>
      <Card style={{
            backgroundColor:'',
            width: '100%',
            height: '20rem',
            marginTop:'auto',
            }}>
        <Card.Title >
          Messages
        </Card.Title>
      </Card>
    </>
  )   
}

export default MessageBoard;