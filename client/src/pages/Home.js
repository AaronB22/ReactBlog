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
            <Card className="titleBx" style={{
                backgroundImage: 'linear-gradient(to right,#FC4445, #3FEEE6,#55BCC9)'
            }}>
                <h1>Welcome To This React Blog!</h1>
            
            </Card>
            <Container style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10rem'
            }}>
                <Row >
                    <Card style={{
                        width:'33%',
                        marginLeft:'5rem',
                        height:'20rem',
                        backgroundImage: 'linear-gradient(#FC4445, #3FEEE6)'
                    }}>
                        <h3 style={{
                            textAlign:'center',
                            fontSize: '3rem'
                        }}>
                            Sign Up!
                        </h3>
                        <p style={{
                            textAlign:"center",
                            fontSize:'2rem',
                            height:'8rem'
                        }}>
                            Click the button below to create an account!
                        </p>
                        <Button style={{
                            borderRadius:'25px',
                            fontSize:'2rem',
                        }}>
                            Sign Up
                        </Button>
                    </Card>
                    <Card style={{
                        width:'33%',
                        marginLeft:'5rem',
                        height:'20rem',
                        backgroundImage: 'linear-gradient(#FC4445, #3FEEE6)'
                    }}>
                        <h3 style={{
                             fontSize: '3rem',
                            textAlign:'center'
                        }}>
                            Log In!
                        </h3>
                        <p style={{
                            textAlign:"center",
                            fontSize:'2rem',
                            height:'8rem'
                        }}>
                            Already have an Account? Click the Button Below to sign in!
                        </p>
                        <Button style={{
                            borderRadius:'25px',
                            fontSize:'2rem',
                        }}>
                            Login
                        </Button>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Home