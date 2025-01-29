// The main assembling file [App.jsx] of the project : 
 
 
// import {useState} from 'react' ;

import { useEffect, useState } from 'react';
import Header from './components/1-header/Header' ;

import Hero from './components/2-hero/Hero' ;

import Main from './components/3-main/Main';
 
import Contact from './components/4-contact/Contact';

import Footer from './components/5-footer/Footer' 
 
 
function App() {

  // Define a useState variable of boolean value  to be uwsed within the  [useEffect] :
  const [showScrollBTN  , setshowScrollBTN ] = useState(false) ;   
   
  // Define a [useEffect] to  create a reponsive of the defiened useState to the  a certain value of scroll :  
  useEffect(()=>{
    window.addEventListener('scroll' , () => {
      if( window.scrollY > 300 ) {
        setshowScrollBTN(true) ;
      } else {
        setshowScrollBTN(false) ;

      }
    })
  } , [] )


  return (
      
    <div className = 'container' id="up" > 
       
      <Header/>
      
      <Hero />
      <div className='divider'  />
      
      <Main />
      <div className='divider'  />
      
      <Contact />
      <div className='divider'  />
      
      <Footer />
      
        
      <a href='#up'  style={{  opacity :  showScrollBTN ? 1 : 0 , transition : 'all 1s'  }} >
      <button  className='icon-keyboard_arrow_up scroll2Top'> </button>
      </a>  
         
    </div>
    
  )
}

export default App ;
 