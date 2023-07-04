import React, { useEffect, useState } from 'react'
import '../Pages/Registration.css'
import { Link } from 'react-router-dom'
const Registration = () => {
    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[phone,setphone]=useState()
    

    const handleclick=()=>{
        alert("registration successful")
        localStorage.setItem("name:",name)
        localStorage.setItem("email:",email)
        localStorage.setItem("phone:",phone)
    }
  return (
    <>
    {loader ? <ClipLoader
  color="#3697d6"
  height={20}
  radius={4}
  width={4}
/>:}
    <div style={{
        textAlign:'center',
        color:'white',
        marginTop:'20px',
       
    }}>Complete your Resgistration</div>
      <form action="" style={
        {
            width:'400px',
            height:'500px',
            backgroundColor:'darkgreen',
            borderRadius:'10px',
            margin:'auto',
            marginTop:'40px',
            boxShadow:'10px 10px black'
        }
      }>
        <div style={{marginLeft:'20%', paddingTop:'50px'}}>
       <div className='input' >
        <label htmlFor="username">Full Name</label><br />
        <input style={{width:'250px',height:'30px'}} type="text" name='username' id='username' onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className='input'>
        <label htmlFor="email">Email Id</label><br />
        <input style={{width:'250px',height:'30px'}} type="email" name='email' id='email' onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div  className='input'>
        <label htmlFor="username">Mobile No</label><br />
        <input style={{width:'250px',height:'30px'}} type="text" name='phone' id='phone' onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className='input'>
        <label htmlFor="age">Age</label><br />
        <input style={{width:'250px',height:'30px'}} type="text" name='age' id='age' />
        </div>
        </div>
    
        <div style={{display:'flex', justifyContent:'center',marginTop:'20px'}} >
           <Link to='/'><button onClick={handleclick} style={{backgroundColor:'red', color:'white', }}>Done</button></Link> 
        </div>
        


      </form>
    </>
  )
}

export default Registration