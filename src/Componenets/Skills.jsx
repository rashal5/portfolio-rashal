
import { SiPython, SiJavascript, SiCplusplus } from "react-icons/si";
import {  motion } from "framer-motion";
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

const Skills = () => {
  return (
    <div className="pb-24">
      <motion.h2 whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}} 
      
      className="my-20 text-center text-4xl text-[#bcd2e8]">Programming Languages</motion.h2>
      <motion.div whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(2.5)}
              className="relative p-4 group">
            <SiPython  className="text-7xl text-blue-900" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Python
            </span>
            </motion.div>
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(3)}
              className="relative p-4 group">
            <SiJavascript className="text-7xl text-yellow-500" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            JavaScripts
            </span>
            </motion.div>

            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(7)}
              className="relative p-4 group">
            <SiCplusplus className="text-7xl  text-blue-500" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              C++
            </span>
            </motion.div>

      </motion.div>
    </div>
  );
};

export default Skills;
