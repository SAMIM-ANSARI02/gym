import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import back4 from '../images/back4.jpg'
import '../Styles/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${back4})`}} >
           <div className='container'>
           <h1>Your Fitness Our Priority </h1> 
           <p>Health is Wealth</p>
            <Link to='/Registration'><button>join now</button></Link>
           
           </div>
      </div>
       
    </Layout>
  )
}
export default Home