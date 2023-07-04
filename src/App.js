import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Program from './Pages/Program'
import Price from './Pages/Price'
import Pagenotfound from './Pages/pagenotfound'
import Training from './Pages/Training'
import Wholeteam from './Pages/wholeteam'
import Registration from './Pages/registration'


const App = () => {
  return (
    <div>
    
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/Program' element={<Program/>}/>
             <Route path='/Registration' element={<Registration/>}/>

             <Route path='/Training' element={<Training/>}/>
             <Route path='/price' element={<Price/>}/>
             <Route path='/Wholeteam' element={<Wholeteam/>}/>
             <Route path='*' element={<Pagenotfound/>}/>
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App