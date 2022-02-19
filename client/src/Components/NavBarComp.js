import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserNameContext } from "../utils/LoginInfo";

const NavBarComp=()=>{
    // const {userInfo, setUserInfo} = useContext(UserNameContext)
    // console.log(userInfo)
    const [userInfoState, setUserInfoState]= useState(null)
    const [logInStatus, setLogInStatus] = useState('Login')

    console.log()
    useEffect(()=>{
      if(userInfoState){
        setLogInStatus(null)
      }
    },[userInfoState])


    return(
        <>
        <Navbar expand='lg' className="NvBar">
            <Container>
            <Navbar.Brand ><Link to="/" className='text-black'>Home</Link></Navbar.Brand>
            <Navbar.Brand  ><Link to="/login" className='text-black'>{logInStatus}</Link></Navbar.Brand>
            <Navbar.Brand ><Link to="/" className='text-black'>{userInfoState}</Link></Navbar.Brand>
            </Container>
          </Navbar>
        </>
    )
}

export default NavBarComp;