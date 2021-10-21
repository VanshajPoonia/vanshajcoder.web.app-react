import emoji from "react-easy-emoji";

export const greetings = {
  name: "Vanshaj Poonia",
  title: "Hi all, I'm Vanshaj Poonia",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
  resumeLink:
    "https://drive.google.com/file/d/1zdTdmMj9f6dJruoF0sMS2hyCrjhFOnNP/view?usp=sharing",
};

export const openSource = {
  githubUserName: "VanshajPoonia",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/profile.php?id=100007527074987",
  instagram: "https://www.instagram.com/vanshajpoonia",
  twitter: "https://twitter.com/VanshajPoonia",
  github: "https://github.com/VanshajPoonia",
  linkedin: "https://www.linkedin.com/in/vanshaj-poonia-941204201/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
  ],

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "logos:angular-icon",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "vscode-icons:file-type-npm",
    // },
    {
      skillName: "Php",
      fontAwesomeClassname: "logos:php",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "logos:aws",
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "React", //Insert stack or technology you have experience in
    progressPercentage: "99", //Insert relative proficiency in percentage
  },
  {
    Stack: "Vanilla JavaScript",
    progressPercentage: "90",
  },
  {
    Stack: "HTML & CSS",
    progressPercentage: "85",
  },
  {
    Stack: "Mongo DB",
    progressPercentage: "70",
  },
  {
    Stack: "Angular",
    progressPercentage: "80",
  },
  {
    Stack: "Node.Js",
    progressPercentage: "80",
  },
  {
    Stack: "C/C++",
    progressPercentage: "70",
  },
  {
    Stack: "Python",
    progressPercentage: "75",
  },
  {
    Stack: "PHP",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Wev Development Course",
    subHeader: "Udemy",
    duration: "May 2021 - August 2021",
    desc: "Currently polishing my web dev skills",
    descBullets: [
      "Planning to learn Vue.js",
      "End goal is to make a website with all the services like mailing, search engine, social media etc.",
    ],
  },
  {
    schoolName: "Game Development Course",
    subHeader: "Udemy",
    duration: "June 2021 - July 2021",
    desc: "Currently working on a AAA game",
    descBullets: [
      "Planning to publish a game on Steam",
      "End goal is to be a Dev at Rockstar North",
    ],
  },
];

export const experience = [
  {
    role: "Wordpress Developer",
    company: "Yumhungry",
    // companylogo:
    //   "data:image/png;base64,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",
    date: "Nov 2020 – Jan 2021",
    desc: "Worked as a WordPress developer and developed a food-ordering website single-handedly.",
    descBullets: [
      "I was the only developer for that startup and have developed the website in just a week!",
    ],
  },
  // {
  //   role: "Fullstack - Freelancer",
  //   company: "Fiverr",
  //   companylogo:
  //     "data:image/png;base64,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",
  //   date: "Dec 2020 – Present",
  //   desc: "Been working as a Freenlancer as a Fullstack & Game Developer.",
  //   descBullets: [
  //     "Over months of freelancing I must say I enjoy working with people and helping them fulfill their goal",
  //     "I also love the challenge of getting new things all the time and different clients",
  //     "Fiverr profile link: https://www.fiverr.com/vanshaj_poonia?public_mode=true",
  //   ],
  // },
  {
    role: "CEO",
    company: "Hypnosys",
    // companylogo:
    //   "data:image/png;base64,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",
    date: "July 2020 – Present",
    desc: "Currently working on my own startup and helping people get their apps and websites ready at very reasonable prices.",
    descBullets: [
      "Through Hypnosys I am fulfilling my dream to empower people with technology.",
      "We offer applications and websites at the lowest prices so that one can start his/her startup.",
      "Hypnosys site link : https://hypnosys.business.site",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Talkieto",
    // companylogo:
    //   "data:image/png;base64,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",
    date: "Nov 2020 – April 2021",
    desc: "Worked as a Full-Stack developer and developed a Social media website.",
    descBullets: [
      "Worked for a startup and designed as well as developed the website.",
    ],
  },
];

export const projects = [
  {
    name: "Moogle",
    desc: "Google clone with React",
    link: "https://moogle-india.web.app/",
  },
  {
    name: "Mewtube",
    desc: "Youtube clone with Login functionality",
    link: "https://www.mewtube-op.web.app/",
  },
  {
    name: "WhatsApp",
    desc: "WhatsApp clone made with React and firebase.",
    link: "https://whatsapp-fdb50.web.app/",
  },
];

export const feedbacks = [
  {
    name: "Chetan Rathi - IN",
    feedback:
      "He is very patient and intelligent and always pay attention to customers requirement also i like the honesty in him through his processes of getting jobs done. Most definitely i recommend him for your next project",
  },
  {
    name: "Ravi Kumar - IN",
    feedback:
      "He is has amazing knowledge of react and node development. If I say mern stack development it would be great. More patient and skilled person. Really amazing. Highly recommended.",
  },
  // {
  //   name: "elenalarreategi - 🇪🇸",
  //   feedback:
  //     "He is brilliant! He makes sure that he is providing the best solution for the client and explains the job done in an easy way to understand. I felt really comfortable with him.",
  // },
  // {
  //   name: "edwardantonyin - 🇮🇳",
  //   feedback:
  //     "Its great to work with Ntshembo. Good in communication and faster results. Thank you",
  // },
  // {
  //   name: "secretdoctor - 🇫🇷",
  //   feedback:
  //     "Did an incredible work in a short time, was really kind and helpful, amazing communication skills. He took time to explain me in depth what he did and how was it done. Explanations were really great and showed that he had incredible technological background, helped me understand what the code and what was happening in the back seen. Very skillful. Really enjoyed working with him. Recommand him 200%",
  // },
];
