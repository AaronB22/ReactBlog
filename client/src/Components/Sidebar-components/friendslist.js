import {
    Card,
  } from 'react-bootstrap'

const FriendsList = ()=>{
    return(
        <>
        <Card style={{
            backgroundColor:'',
            width: '100%',
            height: '20rem',
            marginTop: '4rem'
        }}>
            <Card.Title className='fs-3 text-center'>
                Friends List
            </Card.Title>
        </Card>
        </>
    )
}

export default FriendsList;