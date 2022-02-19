import Chatrooms from "./Chatroom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const ChatRoomIndex=()=>{

    const [collaspeChatRoom, setCollaspeChatRoom]= useState(['closed'])
    const openMenu=()=>{
        setCollaspeChatRoom('open')
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
            <Chatrooms/>
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
                {(()=>{
                    console.log('ye')
                    if(collaspeChatRoom==='open'){
                        return(
                            <Chatrooms className='transparentChatRoom' />
                        )
                    }
                })()}

        </>
      
    )
}

export default ChatRoomIndex

