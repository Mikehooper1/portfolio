
import React,{useState} from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Navbar from './Components/Navbar';
import About from './Components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
 import ImageResizer from './Components/ImageResizer';
import News from './Components/News';

function App() {
 
  const [mode, setMode] = useState('light'); //weather Dark Mode is Enable or not

  const toggleMode =()=>{
    if(mode === 'light'){

      setMode ('dark');
      document.body.style.backgroundColor = '#353935';
    }
    else{

      setMode  ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Portfolio"  aboutText="About Portfolio" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container my-3 " >
      <h1  > -- MOHD SHAKIR HUSSAIN -- </h1>
    <Routes>
    <Route path="/" element={<ImageResizer/>}>
      </Route>
      <Route exact path="/contact" element={<ContactForm/>}>
      </Route>
          <Route exact path='/about' element={<About/>}>
          </Route>
          <Route exact path='/news' element={<News/>}>
          </Route>
        </Routes>
        </div>
    </Router>
    

            
          
          


    
    
    
    


    </>
  );
}

export default App;
