import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-8 px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      {/* Software Developer Intern - SMEC Labs */}
      <div className="mb-12">
        <div className="mb-8 flex flex-wrap lg:justify-center items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-gray-600">June 2024 - December 2025</p>
            <p className="text-sm text-gray-500">Ernakulam</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.9 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold">
              Software Developer Intern - <span className="text-sm font-normal">SMEC Labs</span>
            </h3>

            <ul className="mb-4 list-disc list-inside text-sm space-y-2 text-gray-700">
              <li>
                Developed dynamic web applications using JavaScript and Python frameworks (Express, Django), building scalable and efficient solutions.
              </li>
              <li>
                Specialized in integrating front-end applications with RESTful APIs and WebSockets; implemented server-side logic and API endpoints for data processing and business rules.
              </li>
              <li>
                Used Git for version control, collaborated in team workflows, and continuously learned new technologies and best practices.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">JavaScript</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Python</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Express</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Django</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">REST APIs</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">WebSockets</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">MongoDB</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">MySQL</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Stack Developer - SMEC Automation Pvt Ltd */}
      <div className="mb-6">
        <div className="mb-8 flex flex-wrap lg:justify-center items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-gray-600">January 2025 - Present</p>
            <p className="text-sm text-gray-500">Infopark, Ernakulam</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.9 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold">
              Full Stack Developer - <span className="text-sm font-normal">SMEC Automation Pvt Ltd</span>
            </h3>

            <ul className="mb-4 list-disc list-inside text-sm space-y-2 text-gray-700">
              <li>
                Built high-performance 3D web applications and digital-twin dashboards with real-time mechanical visualization, part comparison and interactive controls.
              </li>
              <li>
                Integrated vibration analytics and ML-based failure prediction into 3D environments to enable early detection via visual highlights and analytical charts.
              </li>
              <li>
                Engineered backend infrastructures and data pipelines for large-scale monitoring and analytics, optimized to run on low-resource devices (Raspberry Pi, thin clients).
              </li>
              <li>
                Led UI/UX efforts using Figma and created 3D assets with Blender, focusing on clean, responsive interfaces and efficient asset pipelines.
              </li>
              <li>
                Worked on scalable backend systems using Node.js, Prisma, Django and deployed solutions to AWS (EC2, S3) on Linux environments.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">React.js</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Node.js</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Three.js</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Prisma</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Django</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">AWS (EC2/S3)</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">MongoDB</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Figma</span>
              <span className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">Blender</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
