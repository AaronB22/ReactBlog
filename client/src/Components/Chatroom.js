import { useEffect, useState } from 'react'
import './Chatroom.css'
import {
    Card, Container, ListGroup, Button
  } from 'react-bootstrap'

const Chatrooms=(props)=>{
    const classType= props.classType
    const [chatrooms, setChatrooms]= useState([])
    const [loaded, setLoaded]=useState(false)
    useEffect(()=>{
        fetch('/getChatRoomList').then(res=>{
           return res.json()
        }).then(data=>{
            setChatrooms(data)
            setLoaded(true)
        })
    },[])
    if(!loaded){
        return(
            <>
            <Card className={classType}>
                <Card.Text className='text-center'>
                    <h2>
                    ...Loading   
                    </h2>
                </Card.Text>
            </Card>
            </>
        )
    }

    if(loaded){
    return(
        <>
        <Card className='sideBar' className={classType}>
            <Card.Title className='text-center fs-3 border-bottom border-dark'>
                ChatRooms
            </Card.Title>
            <Container style={{
                bottom:0,
            }}>
                <Button
                  className="linkBtn"  
                onClick={()=>window.location.assign('/newChatroom')}
                >
                    Create New Chatroom
                </Button>
            </Container>
             <ListGroup variant='flush'>
                {chatrooms.map((x)=>{
                    const url= `/chatroom/${x._id}`
                return(
                    <Button 
                    className='linkBtnChatroom'
                    key={x._id}
                    onClick={()=>{
                        window.location.assign(url) 
                    }}>
                        {x.name}
                    </Button>
                )
                })}
            </ListGroup>
        </Card>
        </>
    )}

}

export default Chatrooms