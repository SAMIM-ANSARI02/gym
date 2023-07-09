import React, { useState } from 'react'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import { AppBar, Box, Typography,Toolbar, IconButton ,Drawer, Divider}  from '@mui/material'
import {Link,NavLink} from 'react-router-dom';
import '../Styles/Headerstyle.css'
import MenuIcon from '@mui/icons-material/Menu';
import Time from '../Pages/Time';




const Header = () => {
    const[mobile ,setmobiletoggle]=useState(false)
    // handle menu
  
  const handlemenu=()=>{
    setmobiletoggle(!mobile)
  } 
  // menu drawer
  const drawer=(
       <Box onClick={handlemenu} sx={{textAlign:'center'}}>
        <Typography color={'goldenrod'} 
                          variant='h6' 
                          component={'div'} 
                          sx={{flexGrow:1, my:2}}>
                         <Link to='/Home'><SportsGymnasticsIcon/></Link>
                          Health Gym
                    </Typography>
                    <Divider/>
                    
                      <ul className='Navigationmobile'>
                       
                         <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/About'}>About</NavLink></li>
                         {/* <li><NavLink to={'/Program'}>Program</NavLink></li> */}
                         <li><NavLink to={'/Training'}>Training</NavLink></li>
                         <li><NavLink to={'/Price'}>Price</NavLink></li>
                    </ul>
                    
        
        </Box>
  )
   return (
      <div>
           
           <Box>
              <AppBar component={'nav'} sx={{bgcolor:'rgb(18, 27, 88)'}}>
                <Toolbar>
                     <IconButton color='inherit' aria-label='open drawer' edge='start'
                     sx={{ mr:2, display:{sm:'none'}}}
                     onClick={handlemenu}>
                       <MenuIcon/>
                      </IconButton>
                     <Typography color={'white'} 
                          variant='h6' 
                          component={'div'} 
                          sx={{flexGrow:1}}>
                         <Link to='/'><SportsGymnasticsIcon style={{color:'white'}}/></Link>
                          Health Gym
                    </Typography>
                    <Box sx={{display:{xs:'none',sm:'block'}}}>
                      
                      <ul className='NavigationMenu'>
                      
                      <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/About'}>About</NavLink></li>
                         {/* <li><NavLink to={'/Program'}>Program</NavLink></li> */}
                         <li><NavLink to={'/Training'}>Training</NavLink></li>
                         <li><NavLink to={'/Price'}>Price</NavLink></li>
                         
                    </ul>
                    
                    </Box>
                   
                 </Toolbar>
              </AppBar>
              <Box component={'nav'}>
                  <Drawer variant="temporary"
                   open={mobile}
                    onClose={handlemenu}
                    sx={{display:{xs:'block',sm:'none'}, 
                    '& .MuiDrawer-paper':{
                      boxSizing:'border-box',
                      width:'280px'
                    }}}>
                    {drawer}
                   </Drawer>
              </Box>
              <Box>
                 <Toolbar/>
              </Box>
  
             
          </Box>
      </div>
   )
}

export default Header