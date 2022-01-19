import { useEffect, useState } from "react";
import {
    Container,
    Card
  } from 'react-bootstrap';



const Homepage= ()=>{
    const [Loaded, setLoaded] = useState(false)
    const [ChatEntries, setChatEntries]= useState()
    useEffect(()=>{
        fetch('/getMsg')
          .then((res)=>res.json())
          .then(data=> {
              setChatEntries(data)
            })
            .then(()=>{
                console.log(ChatEntries)
                setLoaded(true)
                // ChatEntries.map((x)=>{
                //     console.log(x)
                // })
            })
        }, []);
        
        if(!Loaded){
            return(
                <>
                Loading....
                </>
            )
        }
        if (Loaded){
            console.log('loaded')
        return(
       <>
        <Card className="bg-dark text-white" style={{
            height:'100rem',
             width:'75rem',
              marginLeft:'auto',
               marginRight:'auto'
               }}>
           {ChatEntries.map((x)=>{
                    return (
                        <>
                        <Card style={{
                            marginTop:'2rem',
                            color:'black'
                        }}>
                            {x.message}
                        </Card>
                        
                        
                        </>
                    )
                })}
        </Card>
       </>
    )
    }
}

export default Homepage;