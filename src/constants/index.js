import project1 from "../assets/projects/project-1.webp.png";
import project2 from "../assets/projects/on_chain.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-3.webp.png";

export const HERO_CONTENT = `As a Backend Developer with one year of experience in building robust web applications, Proficient in Back-end services, Databases & Infrastructure including ExpressJS, NodeJS, Django, AWS, Docker, MySQL and MongoDB.Also expertise lies in integrating front-end applications with RESTful APIs and WebSockets, and I am highly skilled in both Python and JavaScript, with a solid grasp of algorithm optimization. 

I have a good understanding of the basic programming concepts in C and C++, which enhances my problem-solving skills and code efficiency and have experience with front-end technology such as ReactJS and CSS frameworks Tailwind and Bootstrap. I am always eager to learn new technologies and experiment with various frameworks, enabling me to adapt and grow in fast-paced environments.`;

export const ABOUT_TEXT = `I hope you're doing well. I have been working as a backend developer for the past 9 months, specializing in Node.js.`;



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


