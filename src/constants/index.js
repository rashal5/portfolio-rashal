import project1 from "../assets/projects/project-1.webp.png";
import project2 from "../assets/projects/on_chain.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-3.webp.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With one year of hands-on experience. I am creative and technically proficient in front-end and back-end development, having built dynamic web apps with back-end frameworks like NodeJS, ExpressJS, and Django. I also have advanced knowledge of ReactJS, NextJS, GraphQL, and CSS frameworks like Tailwind and Bootstrap. Finally, I am proficient in relational (MySQL) and NoSQL (MongoDB) databases.`;

export const ABOUT_TEXT = `I have a degree in computer science and one year of experience. I am creative and technically 
proficient in both front-end and back-end development, having built dynamic web apps with back-end 
frameworks like Django and NodeJS. I also have advanced knowledge of ReactJS, GraphQL, and CSS 
frameworks like Tailwind and Bootstrap. Finally, I am proficient in both relational (MySQL) and NoSQL 
(MongoDB) databases. Possess a track record of effectively integrating front-end applications using RESTful 
APIs and web sockets. Proficient in Python and JavaScript, with a deep understanding of Time and Space 
complexity and algorithm optimization. In order to construct dynamic 3DWeb platforms for my work, I'm 
excited to experiment with Threejs and learn how to adapt to new technologies. Furthermore, I am skilled 
with top-tier creative tools, such as Figma ,Blender and Adobe  software.`;



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
  },
  {
    title: "Portfolio Website",
    image:  project1,
    link: "",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Motion Frame", "Gsap", "JavaScript"],
  },
];


