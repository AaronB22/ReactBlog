import { useContext, useEffect, useState } from "react";
import './css/Home.css'
import { 
    Card,
    Container,
    Row
} from "react-bootstrap";
const Home=()=>{

    return(
        <>
            <Card className="titleBx" style={{
                backgroundColor: 'blue'
            }}>
                <h1>Welcome To This React Blog!</h1>
            
            </Card>
            <Row>
                <Container>
                    <Card>
                        <h3>
                            Sign Up!
                        </h3>
                    </Card>
                </Container>
                <Container>
                    <Card>
                        <h3>
                            Log In!
                        </h3>
                    </Card>
                </Container>
            </Row>
        </>
    )
}

export default Home