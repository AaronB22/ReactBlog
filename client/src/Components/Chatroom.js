import { useEffect, useState } from 'react'
import './Chatroom.css'
import {
    Card, Container, ListGroup, Button
  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Chatrooms=()=>{
    const [chatrooms, setChatrooms]= useState([])
    const [collaspeChatRoom, setCollaspeChatRoom]= useState([true])
    let test=true
    const getWindowWidth=()=>{
        const {innerWidth: width}= window;
        return(
          width
        )
      }
      const [windowWidth, setWindowWidth] =useState(getWindowWidth)
      useEffect(()=>{
        setWindowWidth(getWindowWidth())
      })

    const openMenu=()=>{
        setCollaspeChatRoom(false)
    }
    // const collaspedChat=()=>(

    // )

    useEffect(()=>{
        fetch('/getChatRoomList').then(res=>{
           return res.json()
        }).then(data=>{
            console.log(data)
            setChatrooms(data)
        })
    },[])
    if(windowWidth>=1300){
    return(
        <>
        <Card className='sideBar' style={{
            // width: '15rem', 
            // height:'100rem',
            // padding:'0',
            
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
    else return(
        <>
            {/* <Button className='hamMen' onClick={openMenu} >

            </Button> */}
                <span className='hamMen'>
                    <FontAwesomeIcon
                    icon={faBars}
                    size='3x'
                    onClick={openMenu}
                    />
                </span>
                {collaspeChatRoom}

        </>
    )
}

export default Chatrooms