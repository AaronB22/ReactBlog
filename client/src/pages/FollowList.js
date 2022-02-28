import {
    InputGroup,
    FormControl,
    Button,
    Card
} from 'react-bootstrap';
import {UserIdContext, UserNameContext, CustomUserNameContext} from "../utils/LoginInfo";
import { useContext, useEffect, useState, } from "react";
import './css/Follow.css'

const FollowList = () => {
    const [follow, setFollow]=useState([])
    const [location, setLocation] = useState();
    const [followCard, setFollowCard] = useState([]);
    const {customName, setCustomName}= useContext(CustomUserNameContext)
    useEffect(async()=>{
        console.log(customName)
        const url='/getFollow/Admin'
        const res= await fetch(url)
        const data= await res.json()
        console.log(data)
        data.map(async x=>{
            const locReq= await fetch(`/getLocation/`+x.FollowingUserName)
            const loc= await locReq.json()
            console.log(loc.location)
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