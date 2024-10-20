import bg from "./assets/Visual.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect,useState } from "react";
import React from "react";
import Navbar from "./Componenets/Navbar";
import Technologies from "./Componenets/Technologies";
import Projects from "./Componenets/project";
import Experience from "./Componenets/Experience";
import Contact from "./Componenets/Contact";
import Skills from "./Componenets/Skills";
import Tech from "./Componenets/Tech";
import Education from "./Componenets/Education";
import About from "./Componenets/About";
import  Home  from "./Componenets/Home";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const navb = useRef(null);

useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    
    ScrollTrigger.create({
      trigger: navb.current, 
      pin: navb.current,    
      start: "top top",     
      end: "bottom top",    
      scrub: true,      
    });

    
    gsap.timeline({
      scrollTrigger: {
        trigger: navb.current, 
        start: "top top",      
        end: "bottom+=200",     
        scrub: true,            
      },
    })
      .to(navb.current, { y: -200,opacity:0}, 0.06, "<")
      .to(navb.current, { y: 0, opacity: 1, duration: 0.6 ,delay: 0.09})
  });

  return () => ctx.revert(); 
}, []);
  return (
    <div className="relative ">
    <div ref={navb} className="fixed top-0 left-0  w-full z-50">
       <Navbar />
    </div>  
      <Home/>
      <Skills/>
      <Technologies/>
      <Projects/>
      <Tech/>
      <Education/>
      <Experience/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
