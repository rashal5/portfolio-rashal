import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4 px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl f5"
      >
        Experience
      </motion.h2>

      <div>
        {/* Software Developer Intern - SMEC Labs */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm p7">June 2024 - December 2025</p>
            <p className="text-sm p7">Ernakulam</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold p7">
              Software Developer Intern -{" "}
              <span className="text-sm p7">SMEC Labs</span>
            </h3>

            <p className="mb-4 p6">
              • Developed dynamic web applications using JavaScript and Python frameworks (Express, Django), contributing to scalable and efficient web solutions.<br />
              • Specialized in integrating front-end applications with RESTful APIs and WebSockets; implemented server-side logic and API endpoints for data processing and business rules.<br />
              • Utilized version control systems (Git) for code management and collaboration; continuously learned and applied new technologies and industry best practices.
            </p>

            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Python
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Express
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Django
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              REST APIs
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              WebSockets
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              MongoDB
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              MySQL
            </span>
          </motion.div>
        </div>

        {/* Full Stack Developer - SMEC Automation Pvt Ltd */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm p7">January 2025 - Present</p>
            <p className="text-sm p7">Infopark, Ernakulam</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold p7">
              Full Stack Developer -{" "}
              <span className="text-sm p7">SMEC Automation Pvt Ltd</span>
            </h3>

            <p className="mb-4 p6">
              • Developed high-performance 3D web applications and digital-twin dashboards with real-time mechanical visualization, part comparison, advanced animations, and interactive controls.<br />
              • Integrated vibration analytics and ML-based failure prediction into 3D environments, enabling early detection of mechanical issues through visual highlights and analytical graphs.<br />
              • Engineered backend infrastructures and efficient data pipelines for large-scale monitoring and analytics, optimized for low-resource devices (Raspberry Pi, thin clients).<br />
              • Led UI/UX efforts using Figma and created 3D assets with Blender, focusing on clean, responsive interfaces and efficient asset pipelines.<br />
              • Built scalable backend systems with Node.js, Prisma, and Django; deployed solutions on AWS (EC2, S3) running on Linux environments.
            </p>

            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              React.js
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              NodeJS
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Three.js
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Prisma
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Django
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              AWS (EC2/S3)
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              MongoDB
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Figma
            </span>
            <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
              Blender
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
