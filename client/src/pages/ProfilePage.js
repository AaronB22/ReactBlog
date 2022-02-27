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
    const [profileInfo, setProfileInfo] = useState();
    const {userId}= useContext(UserIdContext)
    const {userInfo, setUserInfo} = useContext(UserNameContext);
    const [pageLoaded, setPageLoaded]= useState(false)
    useEffect(()=>{
        console.log(userId)
        fetch('/getUser/'+userId).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            setProfileInfo(data)
            if(data.length=1){
                console.log('set')
                setPageLoaded(true)
            }
        })
    },[userId])
    if(pageLoaded){
        console.log(profileInfo)
        return(
            <>
                <h1 className="profileHeader">
                    {profileInfo[0].userName}
                </h1>
                {/* <InputGroup className="mt-3">
                <FormControl
                placeholder="create new user name"
                aria-label="message"
                aria-describedby="basic-addon1"
                onKeyPress={e=>{
                        if(e.key==='Enter' && e.target.value){
                            e.target.value = '';
                        }
                    }}
                style={{
                    'backgroundColor':'grey',
                    "color":'white'
                }}
                />
            </InputGroup> */}
            <div
                contentEditable="true"
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