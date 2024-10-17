import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4 px-8">
      <motion.h2  whileInView={{ opacity:1,y:0}} 
                initial={{ opacity:0,y:-100}}
                transition={{ duration:0.5}} className="my-20 text-center text-4xl text-[#F3F3F3]">Experience</motion.h2>
      <div>
       
          <div  className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{ opacity:1,x:0}} 
                initial={{ opacity:0,x:-100}}
                transition={{ duration:1}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400"> 
              03/2024 - Present
              </p>
             </motion.div>
            <motion.div whileInView={{ opacity:1,x:0}} 
                initial={{ opacity:0,x:-100}}
                transition={{ duration:1}} className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-[#F3F3F3]">
              Software Developer -{" "}
                <span className="text-sm text-stone-500">
                SMEC Labs
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
              • Developed full-stack applications leveraging   JavaScript, Node, React, Express 
 <br/>
• Enhanced data management and user interface functionalities to improve application efficiency. <br/>
• Having knowledge in JavaScript data structures and algorithms means you are familiar with the <br/>
fundamental concepts and techniques used to organize and manipulate data efficiently in language and 
Proficient in handling application data with precision using MongoDB and Mysql <br/>
• Succeeded in collaborative development setups, leveraging Git for version control to uphold code quality 
and all-encompassing methodology that encompasses backend logic.
              </p>
            
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 React.js
                </span>
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 NodeJS
                </span>
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 Express
                </span>
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 mongoDB
                </span>
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 Django
                </span>
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
               
                >
                 NextJS
                </span>
       
       
            </motion.div>
          </div>
     
      </div>
    </div>
  );
};

export default Experience;
