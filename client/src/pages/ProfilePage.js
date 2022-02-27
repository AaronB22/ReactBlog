import { useContext, useEffect, useState } from "react";
import { UserNameContext, UserIdContext } from "../utils/LoginInfo";
import "./css/Profile.css";
import {
    InputGroup,
    FormControl,
    Button,
    Card
} from 'react-bootstrap';


const ProfilePage=()=>{
    const [profileInfo, setProfileInfo] = useState(null);
    const {userId}= useContext(UserIdContext)
    const {userInfo, setUserInfo} = useContext(UserNameContext);
    const [pageLoaded, setPageLoaded]= useState(false)
    useEffect(()=>{
        const abortCont= new AbortController();
        setTimeout(()=>{
            console.log(userId)
            fetch('/getUser/'+userId, {signal:abortCont.signal}).then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
                setProfileInfo(data)
                if(data.length=1){
                    console.log('set')
                    setPageLoaded(true)
                    
                }
            })

        }, 1000)

        return()=>abortCont.abort()
    },[userId])
    if(pageLoaded){
        console.log(profileInfo)
        return(
            <>
                <h1 className="profileHeader">
                    {profileInfo[0].userName}
                </h1>
                <Card.Title className="bioTitle">
                    Bio
                </Card.Title>
            <div
                contentEditable="true"
                className="bioDiv"
            >
                Test
            </div>
                
            </>
        )

    }
    if(!pageLoaded){
        return(
            <h1>
                Loading...
            </h1>
        )
    }
}

export default ProfilePage