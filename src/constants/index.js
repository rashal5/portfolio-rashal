import project1 from "../assets/projects/project-1.webp.png";
import project2 from "../assets/projects/on_chain.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-3.webp.png";

export const HERO_CONTENT = `I am a Full Stack & Backend Developer with one year of experience building robust, scalable web applications, 3D interfaces, and data-driven systems. I work confidently with JavaScript and Python, with strong foundations in data structures, algorithms, and core programming concepts in C and C++. My expertise includes backend services, microservices, and infrastructure using Express.js, Node.js, Django, AWS, Docker, MySQL, and MongoDB, along with real-time integrations through RESTful APIs and WebSockets. As part of an R&D team, I develop high-performance 3D applications, digital-twin dashboards, and interactive UI components using React, Three.js, Tailwind, and Bootstrap. I also work with design and asset creation tools like Figma and Blender. Adaptable and curious, I continuously learn new technologies and frameworks to build efficient, innovative, production-ready solutions.`;

export const ABOUT_TEXT = `I am a Full Stack Developer with hands-on experience building scalable web applications, real-time 3D digital-twin systems, and data-driven dashboards. My expertise spans JavaScript, Python, and modern frameworks such as React, Node.js, Django, and Three.js. I have worked on both frontend and backend development, integrating REST APIs, WebSockets, microservices, and optimized data pipelines.

During my internships and full-time roles at SMEC Labs and SMEC Automation Pvt Ltd, I contributed to the development of dynamic applications, high-performance 3D visualizations, ML-assisted failure prediction systems, and large-scale monitoring platforms. I am proficient in designing clean, user-friendly interfaces using Figma, and creating 3D assets using Blender.

Strong foundations in algorithms, databases, cloud deployment (AWS EC2/S3), and Linux environments allow me to build reliable, production-ready systems. I am continuously learning, experimenting with new technologies, and committed to delivering efficient, innovative, full-stack solutions.`;



export const PROJECTS = [
  {
    title: "Cryptocurrency Chart Analysis And Roadmap to Trading ",
    image: project4,
    link: "",
    description:
      "This Node.js and React.js project is to predict the right time to buy and sell within a market. It incorporates an automated real-time price tracker so that the users are always updated with the current prices and trends; there is specifically an algorithm which helps in predicting the market moves and decisions as to which time is best for buying and selling. In addition, it provides an online trading course whereby users are able to learn how to make a trading strategy and doing market analysis.",
    technologies: [ "Express", "React", "Node.js", "MongoDB"],
  },
  {
    title: "BlockChain Prototype",
    image: project2,
    link: "https://github.com/rashal5/BlockChain-using-Nodejs",
    description:
      "Developed my own blockchain concept using Node.js, featuring the concepts of hash keys and preceding hashes. The implementation is structured around two classes: one for block creation and another for chain connection. It also includes a validation function that ensures integrity across all nodes.",
    technologies: ["JavaScript", "NodeJs", "Express"],
  },
  {
    title: "College Management System",
    image: project3,
    link: "https://github.com/rashal5/CampusPlus",
    description:
      "It comprises a comprehensive college website strategically designed to improve the learning experience through three key aspects: Add-On Course Registration, Study Materials, and Program Information.",
    technologies: ["HTML", "CSS", "React","JavaScript", "Bootstrap","Django","SQLite"],
  }
];


