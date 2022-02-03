import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import {UserNameContext} from "../utils/LoginInfo";


const Login=()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const handleFailure= (result) =>{
        alert(result)
    }
    const handleLogin= (googleData) =>{
    //    console.log(googleData)
        // setUserName('loginTest')
        
    }
    const testState=()=>{
        console.log('chaning Context')
        setUserInfo('AARON')
    }
    const testState2=()=>{
        console.log(userInfo)
    }
    return(
        <>
        <h1>{userInfo}</h1>
        <div>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
        ></GoogleLogin>
            <Button
            onClick={testState}
            >
                    change value
            </Button>
            <Button
            onClick={testState2}
            >
                    change value
            </Button>
        </div>
        </>
    )
}

export default Login;