import React from 'react';
import {Route,Routes,Link} from 'react-router-dom';
import Home from '../../Component/Home/Home';
import About from '../../Component/About/About'


const Navbar = () => {
  return (
    <div>
    
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
   
    
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/About" element={<About/>} />
         </Routes>
    
     
      </div>
      
     
  )
}

export default Navbar





  


