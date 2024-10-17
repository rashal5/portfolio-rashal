import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiDjango, SiMysql, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa"; // Import Node.js icon
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

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}} 
      
      className="my-20 text-center text-4xl text-[#bcd2e8]">Technologies</motion.h2>
      <motion.div whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(2.5)}
              className="relative p-4 group">
            <RiReactjsLine  className="text-7xl text-cyan-400" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              React
            </span>
            </motion.div>
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(3)}
              className="relative p-4 group">
            <TbBrandNextjs className="text-7xl text-gray-700" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
           Next.js
            </span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(5)}
            className="relative p-4 group">
            <SiDjango className="text-7xl text-green-700" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Django
            </span>
            </motion.div>
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(7)}
              className="relative p-4 group">
            <SiExpress className="text-7xl text-gray-800" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Express
            </span>
            </motion.div>
            <motion.div initial="initial"
              animate="animate"
              variants={iconVarient(4)}
              className="relative p-4 group">
            <FaNodeJs className="text-7xl text-green-600" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Node.js
            </span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2)}
            className="relative p-4 group">
            <SiMysql className="text-7xl text-blue-600" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            MySQL
            </span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(3.5)}
            className="relative p-4 group">
            <SiMongodb className="text-7xl text-green-400" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            MongoDB
            </span>
            </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Technologies;
