// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import drizzleLogo from "./assets/tech_logo/drizzle.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import shadcnLogo from "./assets/tech_logo/shadcn.png";
import appwriteLogo from "./assets/tech_logo/appwrite.png";
import betterAuthLogo from "./assets/tech_logo/betterauth.png";
import intellijLogo from "./assets/tech_logo/intellij.png";
import dictionaryImg from "./assets/projects/dictionary.png";
import careerLogo from "./assets/projects/career.png";
import taskbuddyLogo from "./assets/projects/taskbuddy.png";
import eatandsplitLogo from "./assets/projects/eatandsplit.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "ShadCN UI", logo: shadcnLogo }, // add your ShadCN logo import
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Drizzle-Neon", logo: drizzleLogo }, // add your Drizzle logo import
      { name: "Appwrite", logo: appwriteLogo }, // add your Appwrite logo import
      { name: "Firebase", logo: firebaseLogo },
      { name: "BetterAuth", logo: betterAuthLogo }, // add your BetterAuth logo import
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C", logo: cLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "IntelliJ IDEA", logo: intellijLogo }, // add your IntelliJ logo import
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer Intern",
    company: "RevoSeven Technologies",
    date: "Jun 2024 – Sep 2024",
    desc: `- Assisted in building and improving web application interfaces using React.js and basic web technologies.
- Collaborated with team members to implement features, fix issues, and ensure smooth application functionality.
- Gained exposure to professional work environment and effective team communication practices.
- Learned to use Git for version control and participated in discussions to plan and track project progress.`,
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Git"],
  },
];

export const education = [
  {
    id: 0,
    // img: svceLogo, // Add the logo for Sri Venkateshwara College of Engineering
    school: "Sri Venkateshwara College of Engineering, Bangalore",
    date: "Aug 2021 - May 2025",
    grade: "7.9 CGPA",
    desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering (B.E.) from Sri Venkateshwara College of Engineering, Bangalore. During my studies, I have gained a strong foundation in software development, algorithms, data structures, and computer science principles. I have worked on multiple projects and actively participated in technical events to enhance my practical skills.",
    degree: "Bachelor of Engineering - B.E. (Computer Science)",
  },
  {
    id: 1,
    // img: vijayaPULogo, // Add the logo for Vijaya Pre-University College
    school: "Vijaya Pre-University College, Tumkur",
    date: "Jun 2019 - Mar 2021",
    grade: "83%",
    desc: "I completed my PUC (Class 12) at Vijaya Pre-University College, Tumkur, where I studied PCMB (Physics, Chemistry, Mathematics, Biology). This helped me build a strong foundation in science and analytical skills, preparing me for higher education in engineering.",
    degree: "Pre-University Education",
  },
  {
    id: 2,
    // img: slkhrhsLogo, // Add the logo for SLKHRHS High School
    school: "SLKHRHS High School, Challakere",
    date: "Apr 2017 - Mar 2019",
    grade: "89%",
    desc: "I completed my SSLC (Class 10) at SLKHRHS High School, Challakere, following the state syllabus. This laid the groundwork for my interest in science and technology.",
    degree: "High School Education",
  },
];

export const projects = [
  {
    id: 0,
    title: "Dictionary App",
    description:
      "A simple and interactive dictionary app built using HTML, CSS, and JavaScript. It fetches word meanings, synonyms, and pronunciations using the Dictionary API, providing users with a fast and reliable word lookup experience.",
    image: dictionaryImg,
    tags: ["HTML", "CSS", "JavaScript", "Dictionary API"],
    github: "https://github.com/gbakash/DictionaryApp",
    webapp: "",
  },

  {
    id: 1,
    title: "TaskBuddy",
    description:
      "A simple and efficient task management app built with React and JavaScript. It helps users create, update, and track their daily tasks for improved productivity.",
    image: taskbuddyLogo,
    tags: ["React JS", "JavaScript", "ToDo App", "Task Management", ""],
    github: "https://github.com/gbakash/task-buddy",
    webapp: "",
  },
  {
    id: 2,
    title: "Eat & Split",
    description:
      "A bill-splitting application that allows friends to calculate shared expenses easily. Built with React and JavaScript, focusing on clean UI and smooth interactions.",
    image: eatandsplitLogo,
    tags: ["React JS", "JavaScript", "Tailwind CSS", "Bill Splitter"],
    github: "https://github.com/gbakash/eat-and-split",
    webapp: "",
  },

  {
    id: 3,
    title: "Career Guidance System for Personalized Career Pathways",
    description:
      "An AI-enhanced system that provides personalized domain suggestions, aptitude evaluation, tailored career paths, and curated learning resources, helping users plan their ideal career journey effectively.",
    image: careerLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Gemini API",
      "AppWrite",
      "Some External APIs",
    ],
    github: "https://github.com/gbakash/AI-powered-career-guidance-system-",
    webapp: "",
  },

  {
    id: 4,
    title: "Movie Recommendation System",
    description:
      "A personalized movie recommendation system built using React, Tailwind CSS, and the TMDB API. It suggests movies based on user preferences, genres, and trending media with a smooth and responsive UI.",
    image: "", // no image yet
    tags: [
      "React JS",
      "Tailwind CSS",
      "TMDB API",
      "Redux",
      "Gemini API",
      "Firebase",
    ],
    github: "https://github.com/gbakash/AI-powered-movie-recommendation-system",
    webapp: "",
  },

  {
    id: 5,
    title: "MeetAI",
    description:
      "An ongoing AI-powered personal assistant platform designed to schedule meetings, manage tasks, and interact with an AI agent in real time. Built using modern frontend tools and API integrations.",
    image: "", // no screenshot yet
    tags: ["React JS", "JavaScript", "AI Integration", "Project in Progress"],
    github: "https://github.com/gbakash/meetai",
    webapp: "",
  },
];
