import { useContext} from "react";
import {UserIdContext, UserNameContext, CustomUserNameContext} from "../utils/LoginInfo";
import {
    InputGroup,
    FormControl,
} from 'react-bootstrap';

const CreateNewUser=()=>{
    const {userId}= useContext(UserIdContext)
    const {userInfo} = useContext(UserNameContext)
    const {setCustomName}= useContext(CustomUserNameContext)

    console.log(userId, userInfo)
    
    const checkIfValid=(username)=>{
        fetch('/getUserByUserName/'+username).then((res)=>{
           return res.json()
        }).then((data)=>{
            console.log(data)
            if(data.length===0){
                const createUser={
                    'googleId':userId,
                    'name':userInfo,
                    'userName':username
                }
                fetch('/newUser', {
                    method: 'POST',
                    body: JSON.stringify(createUser),
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                      }
                    }).then((res)=>{
                        const url='/profile/'+createUser.googleId
                        setCustomName(createUser.userName)
                        window.localStorage.setItem('loginInfo', JSON.stringify(createUser))
                        window.location.assign(url)
                    })
            }
        else{
            alert('UserName Already Taken')
        }
        })
    }
    
    return(
        <>
            <InputGroup className="mt-3">
                <FormControl
                placeholder="create new user name"
                aria-label="message"
                aria-describedby="basic-addon1"
                onKeyPress={e=>{
                        if(e.key==='Enter' && e.target.value){
                            {checkIfValid(e.target.value)}
                            e.target.value = '';
                        }
                    }}
                />
            </InputGroup>
        </>
    )
}

export default CreateNewUser