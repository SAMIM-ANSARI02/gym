import React from 'react'
import Layout from '../components/Layout'
import '../Pages/price.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Price = () => {
  return (
    <Layout>
     
        {/* <div className="pricepass">
           samim
        </div> */}
        <div className="pass" style={{display:'flex'}}>
          <Card sx={{ width:200 , height:400, marginLeft:'100px',marginTop:'50px',marginBottom:'50px', paddingLeft:'60px', paddingTop:'40px'}}>
   
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Day pass
        </Typography>
        <Typography variant="h4" color="green">
          100 Rs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          /day
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{}}>
          <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'50px'}}/>
          1 day pass
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{}}>
          <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
          From Gym action
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{}}>
          <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
          24 hours Access
        </Typography>
        
        

      </CardContent>
      <CardActions style={{paddingTop:'',backgroundColor:'black',width:'110px',height:'20px'}}>
        
        <Button size="small">Get started</Button>
      </CardActions>
    </Card>

    <Card sx={{ width:200, height:450, marginLeft:'100px',marginTop:'50px',marginBottom:'50px', paddingLeft:'60px', paddingTop:'40px'}}>
   
   <CardContent>
     <Typography gutterBottom variant="h6" component="div">
       Month to Month
     </Typography>
     <Typography variant="h4" color="green">
       600 Rs
     </Typography>
     <Typography variant="body2" color="text.secondary">
       /Month
     </Typography>
     <Typography variant="body2" color="text.secondary" style={{}}>
       <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'50px'}}/>
       1 day pass
     </Typography>
     <Typography variant="body2" color="text.secondary" style={{}}>
       <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
       From Gym action
     </Typography>
     <Typography variant="body2" color="text.secondary" style={{}}>
       <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
       24 hours Access
     </Typography>
     <Typography variant="body2" color="text.secondary" style={{}}>
       <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
       Free Access
     </Typography>
     <Typography variant="body2" color="text.secondary" style={{}}>
       <CheckCircleOutlineIcon fontSize='samll' style={{paddingTop:'10px'}}/>
       group facility
     </Typography>
     
     

   </CardContent>
   <CardActions style={{paddingTop:'',backgroundColor:'green',width:'110px',height:'20px'}}>
     
     <Button size="small" style={{color:'white'}}>Get started</Button>
   </CardActions>
 </Card>
  <div className="last" style={{color:'white', width:'400px', marginLeft:'50px'}}>
    <h6 style={{textDecoration:'underline'}}>Membership</h6>
    <h2>From Punch pass to monthly to Annual</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, natus culpa molestiae est tempore ex iure earum, dolores repellendus ut ipsum cupiditate fugiat molestias. Non dolores doloremque facilis, natus nostrum architecto in ea corrupti qui sint ut sequi ad. Fuga suscipit inventore corporis ipsum perspiciatis rerum explicabo, reiciendis voluptatum quidem.</p>
    <h3>Each plan Included</h3>
      <Typography style={{color:'grey'}}>
      <ArrowRightAltIcon style={{fontSize:'15px'}}/>
      best equipment global world
      </Typography>
      <Typography style={{color:'grey'}}>
      <ArrowRightAltIcon style={{fontSize:'15px'}}/>
      best equipment global world
      </Typography>
      <Typography style={{color:'grey'}}>
      <ArrowRightAltIcon style={{fontSize:'15px'}}/>
      best equipment global world
      </Typography>
      <Typography style={{color:'grey'}}>
      <ArrowRightAltIcon style={{fontSize:'15px'}}/>
      best equipment global world
      </Typography>
      <Typography style={{color:'grey'}}>
      <ArrowRightAltIcon style={{fontSize:'15px'}}/>
      best equipment global world
      </Typography>
     
        
   


  </div>
         
  
 </div>
    </Layout>
  )
}

export default Price