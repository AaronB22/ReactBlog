import { useContext } from "react";
import { UserNameContext } from "../utils/LoginInfo";
import "./css/Profile.css"


const ProfilePage=()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    return(
        <>
            <h1 className="profileHeader">
                {userInfo}
            </h1>
        </>
    )
}

export default ProfilePage