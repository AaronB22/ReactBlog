import { useContext } from "react";
import { UserNameContext } from "../utils/LoginInfo";


const ProfilePage=()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    return(
        <>
            <h1>
                {userInfo}
            </h1>
        </>
    )
}

export default ProfilePage