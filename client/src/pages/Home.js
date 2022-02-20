import { useContext, useEffect, useState } from "react";
import './css/Home.css'
import { 
    Card,
    Container,
    Row,
    Button
} from "react-bootstrap";
const Home=()=>{

    return(
        <>
            <Card className="titleBx">
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

export default Home