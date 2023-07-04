import React from 'react'
import data from '../components/data'
import '../Pages/wholeteam.css'
import Layout from '../components/Layout'

const Wholeteam = () => {
  return (
    <Layout>

    <h1 style={{color:'white',textAlign:'center'}}>Our Team Member</h1>
    <div className='team'>
     
        {data.map((event)=>(
            <div className='card1'>
                <div><img src={event.Img} alt="" /></div>
                <div>
                    <h1 className='cont'>{event.name}</h1>
                    <p className='cont'>{event.description}</p>
                </div>


            </div>

        ))}
        
    </div>
    </Layout>
  )
}

export default Wholeteam