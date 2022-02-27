import { useContext, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import {UserNameContext, UserIdContext} from "../utils/LoginInfo";
import {
    InputGroup,
    FormControl,
    Button,
    Card
} from 'react-bootstrap';

const Login=()=>{
    const [newUser, setNewUser]=useState(false)
    const {userInfo, setUserInfo} = useContext(UserNameContext)
    const {userId, setUserId}= useContext(UserIdContext)
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
        // window.localStorage.removeItem('loginInfo')
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