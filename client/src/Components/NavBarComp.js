import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useContext } from "react";
import { UserNameContext, UserIdContext, CustomUserNameContext } from "../utils/LoginInfo";
import './NavBar.css'
const NavBarComp=()=>{
    const {customName}= useContext(CustomUserNameContext)
    const {userInfo} = useContext(UserNameContext)
    const {userId}= useContext(UserIdContext)
    const url='/profile/'+userId
    return(
        <>
        <Navbar expand='lg' className="NvBar">
            <Container className="mainCon">
            <Navbar.Brand ><Link to="/" className='text-black linkText'>Home</Link></Navbar.Brand>
            <h1 className="Title">
                React Blog
            </h1>
            <Navbar.Brand  >
                {(()=>{
                    if(userInfo){
                        return(
                        <Link to={url} className='text-black linkText'>{customName}</Link>)
                    }
                    else return(
                        <Link to="/login" className='text-black linkText'>Login</Link>
                    )
                })()}
                
                
                </Navbar.Brand>
            </Container>
          </Navbar>
        </>
    )
}

export default NavBarComp;