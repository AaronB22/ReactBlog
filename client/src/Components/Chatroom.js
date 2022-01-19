import {
    Card,
  } from 'react-bootstrap'

const Chatrooms=()=>{
    return(
        <>
        <Card className='' style={{
            width: '15rem', 
            height:'100rem',
            backgroundColor: 'gray',
            padding:'0'
            }}>
            <Card.Title className='text-center fs-3 border-bottom border-dark'>
                ChatRooms
            </Card.Title>
        </Card>
        </>
    )
}

export default Chatrooms