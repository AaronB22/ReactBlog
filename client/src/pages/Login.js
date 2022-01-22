import { useEffect } from "react";
import GoogleLogin from "react-google-login";

const Login=()=>{
    useEffect(()=>{

    }, [])
    const handleFailure= (result) =>{
        alert(result)
    }
    const handleLogin= (googleData) =>{
       console.log(googleData)     
    }
    return(
        <>
        <h1>PLACEHOLDER</h1>
        <div>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
        ></GoogleLogin>

        </div>
        </>
    )
}

export default Login;