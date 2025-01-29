// Second component [Hero] :

import "./hero.css";

// A] using [lottie files library] for animation :
  // A] / 1- Import the main [lottie files library] to be able to used inside this file   :
  import Lottie from "lottie-react";
  
  
  // A] / 2- Import the certian downloaded [Animation file] form [lottie files library] to be able to used inside this file as an element :
  // @ts-ignore
  import devAnimation from "../../animation/dev.json";
  
  // A] / 3- Importing    :
  import {useRef} from 'react' ; 
  
  // B] Using the [framer motion] library  :
    // B] / 1 Using the [framer motion] library  :
    import {motion} from 'framer-motion' ; 


const Hero = () => {
  // A] / 4- Define  an extreacted  variable from the [useRef()] to be used within the advanced property of the [Animation speed ] :
  const lottieRef = useRef() ;
  
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          
         <motion.img 
          // B] / 2   using the imported animation from the [framer motion] library , [wiht using 'transform' css property ] :     
            // initial = {{ scale : 0  }} 
            initial = {{ transform : 'scale(0)'  }} 
            
            // animate = {{ scale : 1  }} 
            animate = {{ transform : 'scale(1)'  }} 
            
            // B] / 3  using the imported animation from the [framer motion] library , [wiht using 'damping' & 'type/spring' & 'stiffness '  css property & framer motion library  ] :     
            transition = {{ damping :5 , type : 'spring' , stiffness: 100 }} 
            src="/me.jpg" 
            className="avatar"
             alt="" 
          />

          <span className="icon-verified"> </span>
        </div>

        <motion.h1 
          initial =  {{ scale:0 }}  
          animate  =  {{scale:1}}  
          transition =  {{duration : 1}}  
          className="title"> 
          Fullstack & React Web developer
        </motion.h1>


        <motion.p 
          initial = {{scale:0}} 
          animate = {{scale:1}} 
          transition = {{ duration: 2}}
          className="sub-title">
          Im Shadi Sayed , a Fullstack web developer and React web developer
          frontend
        </motion.p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"> </div>
          <div className="icon icon-instagram"> </div>
          <div className="icon icon-github"> </div>
          <div className="icon icon-linkedin"> </div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          style={{ height: '100%' }}
          loop={true}
          onLoadedImages={ () =>  {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(3) ; 
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
