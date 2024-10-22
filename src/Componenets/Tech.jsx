
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import {  motion } from "framer-motion";
import figma from "../assets/projects/figma.png";
import PS from "../assets/projects/ps.png";
import Bl from "../assets/projects/bl.png";
import Ae from "../assets/projects/ae.png";




const iconVarient = (duration)=>({
  initial:{y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
}) 

const Tech = () => {
  return (
    <div className="pb-24">
      <motion.h2 whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}} 
      
      className="my-20 text-center text-4xl text-[#bcd2e8]">Softwares And Design Frameworks</motion.h2>
      <motion.div whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(2.5)}
              className="relative p-4 group">
            <SiBootstrap  className="text-7xl text-violet-900" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Bootstrap
            </span>
            </motion.div>
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(3)}
              className="relative p-4 group">
            <SiTailwindcss className="text-7xl text-blue-800" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tailwind
            </span>
            </motion.div>

           

            <motion.div initial="initial"
            animate="animate"
            variants={iconVarient(7)}
            className="relative p-4 group">
  <img 
    src={figma} 
    alt="Tailwind CSS Logo" 
    className="text-7xl" 
    style={{ width: '80px', height: '80px' }} // Set your desired size
  />
  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
  figma
  </span>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVarient(4)}
            className="relative p-4 group">
  <img 
    src={PS} 
    alt="Tailwind CSS Logo" 
    className="text-7xl" 
    style={{ width: '100px', height: '100px' }} // Set your desired size
  />
  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
  photoshop
  </span>
            </motion.div>

            
            <motion.div initial="initial"
            animate="animate"
            variants={iconVarient(2)}
            className="relative p-4 group">
  <img 
    src={Ae} 
    alt="Tailwind CSS Logo" 
    className="text-7xl" 
    style={{ width: '100px', height: '100px' }} // Set your desired size
  />
  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
  After Effects
  </span>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVarient(5)}
            className="relative p-4 group">
  <img 
    src={Bl} 
    alt="Tailwind CSS Logo" 
    className="text-7xl" 
    style={{ width: '130px', height: '100px' }} // Set your desired size
  />
  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
  Blender 
  </span>
            </motion.div>

            

          

      </motion.div>
    </div>
  );
};

export default Tech;
