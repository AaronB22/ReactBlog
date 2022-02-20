import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserNameContext } from "../utils/LoginInfo";
import './NavBar.css'
const NavBarComp=()=>{
    // const {userInfo, setUserInfo} = useContext(UserNameContext)
    // console.log(userInfo)
    const [userInfoState, setUserInfoState]= useState(null)
    const [logInStatus, setLogInStatus] = useState('Login')
    useEffect(()=>{
      if(userInfoState){
        setLogInStatus(null)
      }
    },[userInfoState])


    return(
        <>
        <Navbar expand='lg' className="NvBar">
            <Container className="mainCon">
            <Navbar.Brand ><Link to="/" className='text-black linkText'>Home</Link></Navbar.Brand>
            <h1 className="Title">
                React Blog
            </h1>
            <Navbar.Brand  ><Link to="/login" className='text-black linkText'>{logInStatus}</Link></Navbar.Brand>
            {/* <Navbar.Brand ><Link to="/" className='text-black'>{userInfoState}</Link></Navbar.Brand> */}
            </Container>
          </Navbar>
        </>
    )
}

export default NavBarComp;