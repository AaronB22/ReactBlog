import { useContext, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import {UserNameContext, UserIdContext, CustomUserNameContext} from "../utils/LoginInfo";
import {
    InputGroup,
    FormControl,
    Card
} from 'react-bootstrap';

const Login=()=>{
    const [newUser]=useState(false)
    const {setUserInfo} = useContext(UserNameContext)
    const {setUserId}= useContext(UserIdContext)
    const {setCustomName}= useContext(CustomUserNameContext)
    const handleFailure= (result) =>{
        console.log('FAIL TO GET GOOGLE DATA')
        alert(result)
    }
    const handleLogin= (googleData) =>{
       const googleObj= {
         "googleId": googleData.googleId,
         "name": googleData.profileObj.name,
       }
        setUserInfo(googleData.profileObj.name)
        setUserId(googleData.googleId)
        window.localStorage.setItem('loginInfo', JSON.stringify(googleObj))
        const url='getUser/'+ googleObj.googleId
        fetch(url).then((res)=>{
            return res.json()
        })
        .then((data)=>{
            if(data.length===0){
                window.location.assign('/createNewUser')
            }
            else{
                const acc={
                    "googleId": googleData.googleId,
                    "name": googleData.profileObj.name,
                    "userName":data[0].userName
                }
                window.localStorage.setItem('loginInfo', JSON.stringify(acc))
                setCustomName(data[0].userName)
            }
        })

    }
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
    return(
        <>
        <Card style={{
            background:'#4e4e50'
        }}>
            <Card style={{
                width:'10rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                color:'black',
                background:'#4e4e50'
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

        {(()=>{
            if(newUser){
                return(
                    <InputGroup className="mt-3">
                    <FormControl
                      placeholder="create a username..."
                      aria-label="message"
                      aria-describedby="basic-addon1"
                      onKeyPress={e=>{
                            if(e.key==='Enter' && e.target.value){
                                
                            }
                        }}
                    />
                  </InputGroup>
                )
            }
        },[])}
        </>
    )
}

export default Login;