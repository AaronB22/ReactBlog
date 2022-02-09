import { useEffect, useState } from 'react'
import './Chatroom.css'
import {
    Card, Container, ListGroup, Button
  } from 'react-bootstrap'

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
        <Card style={{
            width: '15rem', 
            height:'100rem',
            backgroundColor: 'gray',
            padding:'0',
            backgroundColor: '#97CAEF'
            }}>
            <Card.Title className='text-center fs-3 border-bottom border-dark'>
                ChatRooms
            </Card.Title>
            <Container style={{
                bottom:0,
            }}>
                
                <Button style={{
                        "marginTop":'1rem',
                        "borderRadius":'25px',
                        'textAlign':'center',
                        "backgroundColor":'#EDF5E1',
                        'color':'#05386B'
                    }}
                    onClick={()=>window.location.assign('/newChatroom')}
                    >Create New Chatroom</Button>
            </Container>
             <ListGroup variant='flush'>
                {chatrooms.map(x=>{
                    const url= `/chatroom/${x._id}`
                return(
                    <Button style={{
                        "marginTop":'1rem',
                        "borderRadius":'25px',
                        'textAlign':'center',
                        "backgroundColor":'#FC4445'
                    }}
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