import { useEffect, useState } from 'react'
import {
    Card, Container, ListGroup,
  } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const placeHolderChatRoomList=[
   {
       chatName:'Chatroom 1',
       id:'1'
   },
   {
    chatName:'Chatroom 2',
    id:'2'
    },
    {
        chatName:'Chatroom 3',
        id:'3'
    },
]



const Chatrooms=()=>{
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
        <Card className='' style={{
            width: '15rem', 
            height:'100rem',
            backgroundColor: 'gray',
            padding:'0'
            }}>
            <Card.Title className='text-center fs-3 border-bottom border-dark'>
                ChatRooms
            </Card.Title>
            {/* <ListGroup variant='flush'>
                {placeHolderChatRoomList.map(x=>{
                    const url= `/chatroom/${x.id}`
                return(
                    <ListGroup.Item>
                        <Link to={url}>{x.chatName}</Link>
                    </ListGroup.Item>
                )
                })}
            </ListGroup> */}
             <ListGroup variant='flush'>
                {chatrooms.map(x=>{
                    const url= `/chatroom/${x._id}`
                return(
                    <ListGroup.Item>
                        <Link to={url}>{x.name}</Link>
                    </ListGroup.Item>
                )
                })}
            </ListGroup>
            <Container style={{
                bottom:0,
            }}>
                <Link to='/newChatroom'>Create New Chatroom!</Link>
            </Container>
        </Card>
        </>
    )
}

export default Chatrooms