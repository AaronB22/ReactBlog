import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import {UserNameContext} from "../utils/LoginInfo";

const Login=()=>{
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const handleFailure= (result) =>{
        console.log('FAIL TO GET GOOGLE DATA')
        alert(result)
    }
    const handleLogin= (googleData) =>{
       const googleObj= {
         "googleId": googleData.googleId,
         "name": googleData.profileObj.name
       }
        setUserInfo(googleData.profileObj.name)
        // window.localStorage.removeItem('loginInfo')
        window.localStorage.setItem('loginInfo', JSON.stringify(googleObj))
        const url='getUser/'+ googleObj.googleId
        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(!data.length){
                fetch('/newUser', {
                    method: 'POST',
                    body: JSON.stringify(googleObj),
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                      }
                    }).then((res)=>{
                        return res.json()
                    })
            }
        })

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