import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import back4 from '../images/back4.jpg'
import '../Styles/Home.css'
import Mymodal from './Showmodal'
import Time from '../Pages/Time';

const Home = () => {

const[showmodal,setshowmodal]=useState(false);
const Closemodal=()=>setshowmodal(false);

  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${back4})`}} >
           <div className='container'>
           <h1>Your Fitness Our Priority </h1> 
           <Time/>
           <p style={{color:'rgb(130, 10, 10)',fontWeight:'bolder'}}>Health is Wealth</p>
            <button onClick={()=>setshowmodal(true)}>join now</button>
            {showmodal && <Mymodal Closemodal={Closemodal} /> }
           
           </div>
      </div>
       
    </Layout>
  )
}
export default Home