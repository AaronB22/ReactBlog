import { useEffect, useState } from 'react'
import {
    Card, Container, ListGroup, Button
  } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

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
            padding:'0',
            backgroundColor: '#5CDB95'
            }}>
            <Card.Title className='text-center fs-3 border-bottom border-dark'>
                ChatRooms
            </Card.Title>
            <Container style={{
                bottom:0,
            }}>
                <Link to='/newChatroom'>Create New Chatroom!</Link>
            </Container>
             <ListGroup variant='flush'>
                {chatrooms.map(x=>{
                    const url= `/chatroom/${x._id}`
                return(
                    <Button style={{
                        "marginTop":'1rem',
                        "borderRadius":'25px',
                        'textAlign':'center'

                    }}
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
    )
}

export default Chatrooms