
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4 px-8">
      <motion.h2  whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:0.5}} className="my-20 text-center text-4xl f5">Education</motion.h2>
      <div>
       
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{ opacity:1,x:0}} 
                initial={{ opacity:0,x:-100}}
                transition={{ duration:1}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm p7"> 
                2021-2024
              </p>
             </motion.div>
            <motion.div whileInView={{ opacity:1,x:0}} 
                initial={{ opacity:0,x:-100}}
                transition={{ duration:1}} className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold p7">
              BSc Computer Science - University of Calicut{" "}
                <span className="text-sm text-stone-500">
                (2024 Pass Out Batch, SGPA last Sem:7.3, CGPA:5.5)
                </span>
              </h3>
              <p className="mb-4 p6">
              Hold a BSc in Computer Science from University of Calicut, focusing on computer systems, software 
development, data structures, and algorithms. Gained proficiency in programming with JavaScript, Python, and 
C++, and built scalable web applications, developing strong problem-solving, analytical, and communication 
skills. Additionally, self-learned and developed a final year project using Django 
              </p>
             
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                
                >
                  DSA  
                </span>

                <h3 className="mb-2 font-semibold text-[#F3F3F3] ">
                COURSES
                
              </h3>
              <p className="mb-4 p6">
              Developing Back-End Apps with Node.js and Express
              </p>
              <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                
                >
                  Coursera I IBM
                </span>
              
            </motion.div>
            
          </div>
    
      </div>
    </div>
  );
};

export default Education;
