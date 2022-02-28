import {
    InputGroup,
    FormControl,
    Button,
    Card
} from 'react-bootstrap';
import {UserIdContext, UserNameContext, CustomUserNameContext} from "../utils/LoginInfo";
import "./css/Profile.css";
import { useContext, useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

const OtherUsers = () => {
    const { userName } = useParams()
    const [publicInfo, setPublicInfo] = useState();
    const [pageLoaded, setPageLoaded]= useState(false)
    const [followStatus, setFollowStatus] = useState('Follow');
    const {customName, setCustomName}= useContext(CustomUserNameContext)
    useEffect(async()=>{
        const url= '/getUserByUserName/'+userName
        const abortCont= new AbortController();
       const res= await fetch(url,{signal:abortCont.signal})
       const data=await res.json()
       console.log(data)
       setPublicInfo(data[0])
       setPageLoaded(true)
       console.log(data[0].userName)
       console.log(customName)
       if(data[0].userName===customName){
          setFollowStatus('same')
       }
       return()=>abortCont.abort()
    },[customName])

    useEffect(async()=>{
        const res= await fetch('/getFollow/'+customName)
        const data= await res.json()
       data.map(x=>{
            console.log(x)
            if(x.FollowingUserName===publicInfo.userName){
                setFollowStatus('Following')
            }
        })
       
        
    },[publicInfo])

    const handleFollow=()=>{
        const body={
            "userName":customName,
            "FollowingUserName":publicInfo.userName
        }
        fetch('/followUser',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              }
            })
    }

    if(pageLoaded){
        return ( 
            <>
             <h1 className="profileHeader">
                    {publicInfo.userName}
                </h1>
            <Card.Title className="bioTitle">
                        Bio
                    </Card.Title>
                <div className="bioDiv" >
                    {publicInfo.bio}
                </div>
               {(()=>{
                   console.log(followStatus)
                   if(followStatus!=='same'){ 
                      return(
                        <Button className="proBtn"
                           onClick={handleFollow}
                      >
                       {followStatus}
                      </Button>

                      ) 
                   }
               })()}
            </>
         );

    }
    if(!pageLoaded){
        return(
            <>
            Loading...
            </>
        )
    }
}
 
export default OtherUsers;