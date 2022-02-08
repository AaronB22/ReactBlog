import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import {UserNameContext} from "../utils/LoginInfo";


const Login=()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const handleFailure= (result) =>{
        alert(result)
    }
    const handleLogin= (googleData) =>{
       console.log(googleData)
       const googleObj= {
         "googleId": googleData.googleId,
         "name": googleData.profileObj.name
       }
        setUserInfo(googleData.profileObj.name)
        window.localStorage.setItem('loginInfo', JSON.stringify(googleObj))
    }
    return(
        <>
       
        <Card>
            <Card style={{
                width:'10rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                color:'black'
            }}>
                <Card.Title>
                    Login With Google
                </Card.Title>
                <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            >

                </GoogleLogin>
            </Card>
        </Card>
        </>
    )
}

export default Login;