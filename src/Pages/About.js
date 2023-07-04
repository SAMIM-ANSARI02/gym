import React from 'react'
import Layout from '../components/Layout'
import { useState,useEffect } from 'react'
import { useState, CSSProperties } from "react";


const About = () => {
  const[loader,setloader]=useState(false)
    
    useEffect(()=>{
        setloader(true)
        setTimeout(() => {
            setloader(false)
        },5000);
    },[])
  return (
    
    <Layout >
      <div className='main' style={{backgroundColor:'grey'}}>
      <div className="video" style={{display:'flex',alignItems:'center', justifyContent:"space-between"}}>
        <iframe width="350" height="480" style={{margin:'20px'}} src="https://www.youtube.com/embed/eaRQF-7hhmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div style={{marginRight:'2%',color:'white' , width:'50%'}}>
          <h1 style={{color:'white'}}>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam quas consequatur sint quae facilis quis natus id voluptas quo! Numquam ipsa enim repellat repudiandae provident animi, vitae dignissimos minus!</p>
          <button style={{height:'30px', borderRadius:'5px',border:'none',color:'white',backgroundColor:'red'}}>Learn more</button>
          </div>
        
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
       
       <div style={{color:'white' ,width:'30%',marginLeft:'150px',textAlign:'left'}}>
        <h1>Why choose us?</h1>
            <h2><ul><li>consultation with experts</li></ul></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates incidunt ea minima doloribus placeat hic sit quibusdam temporibus nulla ducimus.</p>
            <h2><ul><li>Best workout facilities</li></ul></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates incidunt ea minima doloribus placeat hic sit quibusdam temporibus nulla ducimus.</p>
            

       </div> 
      <iframe width="560" height="315" style={{margin:'20px'}} src="https://www.youtube.com/embed/C5WJ0BMYuUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      </Layout>
 
  )
}

export default About