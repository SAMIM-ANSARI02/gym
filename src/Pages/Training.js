import React from 'react'
import data from '../components/data';
import Layout from '../components/Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import '../Styles/Training.css'
import { Link } from 'react-router-dom';

const Training = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Layout>
      <h1 style={{textAlign:'center',textDecoration:'underline', marginTop:'10px',color:'white'}}>Meet Your Team</h1>
      <p style={{textAlign:'center',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus perspiciatis delectus architecto labore? Nostrum hic atque quasi reprehenderit quo?</p>
      <div className="main_1">
        <Slider {...settings}>
        {data.map((event)=>(
          <div className="card">
          <div className="topcard"><img src={event.Img} alt="" /></div>
          <div className="bottomcard">
            <h2> {event.name}</h2>
            <p>{event.description}</p>
          </div>
      </div>

        ))}
        </Slider>
       
           
      </div>
      <div  style={{display:'flex',justifyContent:'center',margin:'30px'}}>
        <Link to='/Wholeteam'><button style={{borderRadius:'5px',width:'150px',height:'25px', color:'white',backgroundColor:'green'}}>See Whole Team</button> </Link>
        
        </div>
      
    </Layout>
  )
}

export default Training
