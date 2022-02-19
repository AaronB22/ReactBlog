import { useEffect, useState } from 'react'
import './Chatroom.css'
import {
    Card, Container, ListGroup, Button
  } from 'react-bootstrap'

const Chatrooms=(props)=>{
    const classType= props.classType
    const [chatrooms, setChatrooms]= useState([])
 
    useEffect(()=>{
        fetch('/getChatRoomList').then(res=>{
           return res.json()
        }).then(data=>{
            console.log(data)
            setChatrooms(data)
        })
    },[])
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
                {chatrooms.map(x=>{
                    const url= `/chatroom/${x._id}`
                return(
                    <Button 
                    className='linkBtnChatroom'
                    onClick={()=>{
                        window.location.assign(url) 
                    }}>
                        {x.name}
                    </Button>
                )
                })}
            </ListGroup>
            <div className='collaspeArrow'>
                {'>'}
            </div>
        </Card>
        </>
    )

}

export default Chatrooms