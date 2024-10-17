import bg from "./assets/Visual.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect,useState } from "react";
import React from "react";
import Navbar from "./Componenets/Navbar";
import Hero from "./Componenets/Hero";
import Technologies from "./Componenets/Technologies";
import Projects from "./Componenets/project";
import Experience from "./Componenets/Experience";
import Contact from "./Componenets/Contact";
import Skills from "./Componenets/Skills";
import Tech from "./Componenets/Tech";
import Education from "./Componenets/Education";
import About from "./Componenets/About";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const container = useRef(null);
  const navb =useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        end: "bottom bottom",
      });

      gsap.set(container.current, { marginTop: -container.current.offsetHeight });

      gsap.timeline({
        scrollTrigger: {
          trigger: img_container.current,
          pin: img_container.current,
          scrub: 1,
          start: "0% 0%",
        },
      })
      .to(img.current, { transform: "translateZ(2200px)", opacity: 0.4 }, 0) 
      .to(text1.current, { y: -800 }, 0.05, "<")
      .to(text3.current, { y: -800 }, 0.07, "<") 
      .to(text2.current, { y: 340 ,opacity:0}, 0.04, "<")
      .to(navb.current, { y: -200,opacity:0}, 0.04, "<")
      .to(navb.current, { y: 0, opacity: 1, duration: 0.4 })
      .fromTo(container.current, 
        { yPercent: 100, scaleY: 1 }, 
        { yPercent: 0, scaleY: 1, duration: 0.2 } // Adjust the duration to your preference
    );
    
   
      // Pin Navbar and Hero components
     

      gsap.to(img.current, {
        y: 10,
        repeat: -1,
        yoyo: true, 
        duration: 1,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative ">
      <div ref={navb} className="fixed top-0 left-0  w-full z-50">
  <Navbar />
</div>

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <section>
        <div
          ref={img_container}
          className="img-container perspective flex items-center justify-center h-screen w-screen relative"
        >
          <img ref={img} className="image relative z-10" src={bg} alt="" />

          <div className="text-white absolute flex flex-col items-center justify-center">
            <h1 className="kalnia text-[100px] flex items-center">
              <span ref={text3} className="text-stroke">Hello, I'm</span>
              <span ref={text1} className="relative z-20 ml-4">Rashal M</span>
            </h1>

            <p ref={text2} className="opacity-50 w-48 text-[13px] text-center">
            Creative coding for exceptional web and app experiences.
            </p>
          </div>
        </div>

        {/* Image grid section */}
        <div ref={container}  >
          
           
            <Hero /> 
           
        </div>
        
      </section>
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
