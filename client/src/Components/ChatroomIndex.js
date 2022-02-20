import Chatrooms from "./Chatroom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Card } from "react-bootstrap"

const ChatRoomIndex=()=>{

    const [collaspeChatRoom, setCollaspeChatRoom]= useState('closed')
    const openMenu=()=>{
        if(collaspeChatRoom==='closed'){
            setCollaspeChatRoom('open')
        }
        if(collaspeChatRoom==='open'){
            setCollaspeChatRoom('closed')
        }
    }
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
    if (windowWidth>=1400){
        return(
            <>
            <Chatrooms
                 classType='mainChatRoom'
            />
            </>
        )

    }
    
    else return(
<>
                    {(()=>{
                        if(collaspeChatRoom==='closed'){
                            return(
                                <span className='hamMen'>
                                    <FontAwesomeIcon
                                        icon={faBars}
                                        size='3x'
                                        onClick={openMenu}
                                    />
                                </span>
                                )
                            }
                        else return(
                            <span className='clbtn'>
                                    <FontAwesomeIcon
                                        icon={faX}
                                        size='3x'
                                        onClick={openMenu}
                                    />
                                </span>
                            )
                    })()}
                {(()=>{
                    if(collaspeChatRoom==='open'){
                        return(
                            <Chatrooms 
                                classType='transparentChatRoom'
                            />
                        )
                    }
                })()}

        </>
      
    )
}

export default ChatRoomIndex

