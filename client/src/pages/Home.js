import { useContext, useEffect, useState } from "react";
import FollowList from "./FollowList";
import './css/Home.css'
import { 
    Card,
    Container,
} from "react-bootstrap";

const Home=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        const loginData=window.localStorage.getItem('loginInfo')
        if(loginData){
            console.log('logged in')
            setIsLoggedIn(true)
        }
    },[isLoggedIn])
    if(!isLoggedIn){
        
        return(
            <>
                <Card className="titleBx" style={{
                    backgroundColor:'#C3073F'
                }}>
                    <h1 >Welcome To This React Blog!</h1>
                
                </Card>
                <Container className="HomeCont" style={{
                    marginTop: '10rem'
                }}>
                        <Card className="homeCard signUpCard" style={{
                            backgroundColor:'#1A1A1D',
                            color:'#C3073F'
                        }}>
                            <h3 className="boxTitle" >
                                Sign Up!
                            </h3>
                            <p className="txtofbox">
                                Click the button below to create an account!
                            </p>
                            <button className="boxBtn">
                                Sign Up
                            </button>
                        </Card>
                        <Card  className="homeCard LogInCard" style={{
                            backgroundColor:'#1A1A1D',
                            color:'#C3073F'
                        }}>
                            <h3 className="boxTitle">
                                Log In!
                            </h3>
                            <p className="txtofbox" >
                                Already have an Account? Click the Button Below to sign in!
                            </p>
                            <button className="boxBtn">
                                Login
                            </button>
                        </Card>
        
                </Container>
            </>
        )
    }
    if(isLoggedIn){
        return(
            <>
            <Card.Title className="nameTiltle" style={{
                fontSize:'4rem'
            }}>
                Welcome back
            </Card.Title>
            <FollowList/>
            </>
            
        )
    }
}

export default Home