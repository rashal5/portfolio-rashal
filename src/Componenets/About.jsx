import React from 'react'
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";
const About = () => {
  return (
    
        <div className="pb-4 px-8">
      <motion.h2  whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:0.5}} className="my-20 text-center text-4xl text-[#F3F3F3]">About Me </motion.h2>
      <div>
       
          <div className="mb-8 flex flex-wrap lg:justify-center">
           
            <motion.div whileInView={{ opacity:1,x:0}} 
                initial={{ opacity:0,x:-100}}
                transition={{ duration:1}} className="w-full max-w-xl lg:w-3/4">
              <p className="mb-4 text-stone-400">
             {ABOUT_TEXT}
              </p>
              
            </motion.div>
            
          </div>
    
      </div>
    </div>
  )
}

export default About