import  { useState } from 'react'

const Time = () => {
    const[ctime,setctime]=useState()
  
    const Update=()=>{
     const time = new Date().toLocaleTimeString();
     setctime(time)
    }
    setInterval(Update,1000)
    
  return (
    
    <>
    <div style={{color:'white',backgroundColor:'rgb(22, 22, 71)',width:'12%',borderRadius:'10px'}}><h2 style={{padding:'4%'}}>{ctime}</h2></div>
     </>
  )
}

export default Time