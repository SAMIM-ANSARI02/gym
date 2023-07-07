import '../Pages/Registration.css'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import { SignUpschema } from './schemas'

 
const initialValues={
          username:'',
          email:'',
          phone:'',
          age:''
      }
  
      


const Registration = () => {
    const {values,errors,handleBlur,handleChange,handleSubmit,touched}= useFormik({
      initialValues:initialValues,
      validationSchema:SignUpschema,
      onSubmit:(values,action)=>{
        
         action.resetForm()
      }
    })
    
   
    

    const handleclick=()=>{
        alert("registration successful")
        localStorage.setItem("name:",values.username)
        localStorage.setItem("email:",values.email)
        localStorage.setItem("phone:",values.phone)
        localStorage.setItem("phone:",values.age)
     }
  return (
    <>
    <div style={{
        textAlign:'center',
        color:'white',
        marginTop:'20px',
        paddingBottom:'15px',
       
    }}>Complete your Resgistration</div>
      <form action="" onSubmit={handleSubmit} style={
        {
            width:'30%',
            
            backgroundColor:'orange',
            borderRadius:'10px',
            margin:'auto',
            marginTop:'20px',
            boxShadow:'10px 10px black',
            boxSizing:'border-box'
        }
      }>
        <div style={{marginLeft:'20%', paddingTop:'2px'}}>
       <div className='input' >
        <label htmlFor="username">Full Name</label><br />
        <input style={{width:'80%',height:'30px'}} 
        autoComplete='off' 
        type="text" 
        name='username' 
        id='username' 
        placeholder='Enter your name '
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}  />
      {errors.username && touched.username ?(<p style={{color:'red',fontSize:'15px'}}>{errors.username}</p>):null}
        </div>

        <div className='input'>
        <label htmlFor="email">Email Id</label><br />
        <input style={{width:'80%',height:'30px'}} 
        type="email" 
        autoComplete='off' 
        name='email' 
        id='email' 
         placeholder='Enter your email id'
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
          />
      {errors.email && touched.email ?(<p style={{color:'red' ,fontSize:'15px'}}>{errors.email}</p>):null}
        </div>

        <div  className='input'>
        <label htmlFor="username">Mobile No</label><br />
        <input style={{width:'80%',height:'30px'}} 
        type="string" 
        autoComplete='off' 
        name='phone' 
        id='phone' 
        placeholder='Enter your mobile no '
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      {errors.phone && touched.phone ?(<p style={{color:'red',fontSize:'15px'}}>{errors.phone}</p>):null}
       </div>

        <div className='input'>
        <label htmlFor="age">Age</label><br />
        <input style={{width:'80%',height:'30px',}} 
        type="string" 
        autoComplete='off' 
        name='age' 
        id='age' 
        placeholder='Enter your age '
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {errors.age && touched.age ?(<p style={{color:'red',fontSize:'15px'}}>{errors.age}</p>):null}
        
        </div>
        </div>
    
        <div style={{display:'flex', justifyContent:'center',marginTop:'15px',paddingBottom:'10px'}} >
          <Link to='/'><button onClick={handleclick}  style={{backgroundColor:'green', color:'white' }}>Done</button> </Link>
        </div>
        


      </form>
    </>
  )
}

export default Registration