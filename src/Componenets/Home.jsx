import { React,useState,useEffect } from 'react'
import bg from "../assets/Visual.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import profilePic from "../assets/img3.png";
import profilePic1 from "../assets/img2.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import resumePDF from "../assets/Muhammed_Rashal_M.pdf";


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

export const Home = () => {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
    const container = useRef(null);

    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setShowFirstImage(prevState => !prevState);
      }, 7000);
  
      return () => clearInterval(interval);
    }, []);
    
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: bg1.current,
          pin: bg1.current,
          pinSpacing: false,
          start: "top top",
          endTrigger: ".last",
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
        .fromTo(container.current, 
          { yPercent: 100, scaleY: 1 }, 
          { yPercent: 0, scaleY: 1, duration: 0.2 } 
      );
      
     
      
  
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

        <div ref={container}   >
          
           
        <div className="pb-4 lg:mb-36 px-8  ">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
      {showFirstImage ? (
        <motion.img 
          src={profilePic}
          alt="First" 
          className="border border-stone-800 rounded-2xl" 
          style={{ transform: 'scale(0.9)' }} 
          initial={{x:100,opacity:0}}
          animate={{x:1,opacity:1}}
          transition={{duration:1,delay:1.5}}
        />
      ) : (
        <motion.img 
          src={profilePic1} 
          alt="Second" 
          className="border border-stone-800 rounded-2xl" 
          style={{ transform: 'scale(0.9)' }} 
          initial={{x:100,opacity:0}}
          animate={{x:1,opacity:1}}
          transition={{duration:1,delay:1.5}}
        />
      )}
    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <motion.div
                     initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl text-[#bcd2e8]">Muhammed Rashal M</motion.h2>
                        <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-[#efefef]">
                            {HERO_CONTENT}
                        </motion.p> 
                        <motion.a
                            variants={childVariants} 
                            href={resumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 last"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
           
        </div>
        
      </section>
    </div>
  )
}

export default Home;


