import React ,{ useEffect } from 'react'
import '../Styles/Modal.css'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';





const Mymodal=({Closemodal})=>{
    useEffect(()=>{
        document.body.style.overflowY='hidden';
        return()=>{document.body.style.overflowY='scroll'}
    },[])
    return(
        <> 
        <div className="modal_wrapper"></div>
        <div className="modal_container">
            <div style={{display:'flex',margin:'0',padding:'0'}}>
            <h2 style={{fontSize:'50px',padding:'4px', textAlign:'center',margin:'0px'}} >Welcome To Gym</h2>
            <CloseIcon onClick={Closemodal} style={{color:'red', marginTop:'30px',marginLeft:'12px' ,fontSize:'30px'}}/>
            </div>
        
        <p style={{fontSize:'20px',
        color:'yellow',
        // textAlign:'center',
        display:'flex',
        justifyContent:'flex-start'
    }}><DoneIcon style={{color:'white'}}/>Done-for-you SEO service: SEO takes time and consistent updating to stay relevant. We’re the experts and we handle it for you. Always.</p>
    <p style={{fontSize:'20px',
        color:'yellow',
        // textAlign:'center',
        display:'flex',
        justifyContent:'flex-start'
    }}><DoneIcon style={{color:'white'}}/>Done-for-you SEO service: SEO takes time and consistent updating to stay relevant. We’re the experts and we handle it for you. Always.</p>
    <p style={{fontSize:'20px',
        color:'yellow',
        // textAlign:'center',
        display:'flex',
        justifyContent:'flex-start'
    }}><DoneIcon style={{color:'white'}}/>Done-for-you SEO service: SEO takes time and consistent updating to stay relevant. We’re the experts and we handle it for you. Always.</p>
        <Link to='/registration'><button style={{width:'20% ',float:"left"}} className='modal_button'>registration</button></Link>
        </div>
       
        </>
       
    )
 }
export default Mymodal