import { useContext, useEffect, useState } from "react";
import { UserNameContext } from "../utils/LoginInfo";
import "./css/Profile.css"


const ProfilePage=()=>{
    const [profileInfo, setProfileInfo] = useState();
    const {userInfo, setUserInfo} = useContext(UserNameContext);
    useEffect(()=>{
        fetch('')
    },[])
    return(
        <>
            <h1 className="profileHeader">
                {userInfo}
            </h1>
        </>
    )
}

export default ProfilePage