import {
    Card
} from 'react-bootstrap';
import {CustomUserNameContext} from "../utils/LoginInfo";
import { useContext, useEffect, useState, } from "react";
import './css/Follow.css'

const FollowList = () => {
    const [setFollow]=useState([])
    const [followCard, setFollowCard] = useState([]);
    const {customName}= useContext(CustomUserNameContext)
    useEffect(async()=>{
        const url='/getFollow/Admin'
        const res= await fetch(url)
        const data= await res.json()
        data.map(async x=>{
            const locReq= await fetch(`/getLocation/`+x.FollowingUserName)
            const loc= await locReq.json()
            const follInfo={
                "userName":x.FollowingUserName,
                "location":loc.location
            }
            setFollowCard([...followCard, follInfo])
        })
        setFollow(data)
    },[customName])
    

    return ( <>
        <Card className='mainFllBlck' 
            style={{
                backgroundColor:'#1A1A1D'
            }}
        >
            <Card.Title className='text-center' style={{
                color:'white'
            }}>
                Who you are Following:
            </Card.Title>
        {followCard.map((x)=>{
            console.log(x)
            return(
                <Card className='followBlock' style={{
                    backgroundColor: '#4E4E50',
                    color:'white',
                    borderColor:'#950740'
                }}>
                   <Card.Title className='crdTitle text-center'>
                       {x.userName}
                   </Card.Title>
                    <Card.Text className='locationTxt text-center'>
                    Last seen: {x.location}
                    </Card.Text>
               </Card>
           )
        })}
        </Card>
    </> );
}
 
export default FollowList;