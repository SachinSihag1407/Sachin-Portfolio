// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import expressLogo from './assets/tech_logo/express.png'
import mongodb from './assets/tech_logo/mongodb.png'
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import ThinkIndia from './assets/company_logo/Think-India.jpg';
import IIITLogo from './assets/company_logo/1.png';
import InternWay from './assets/company_logo/internway_solutions_logo.jpeg'
// import IIITLogo1 from './assets/company_logo/IIIT-Logo.png';

// Education Section Logo's
import RpsLogo from './assets/education_logo/Rps_Logo.jpg';


// Project Section Logo's
import periodic from './assets/work_logo/periodic.png';
import addBlog from './assets/work_logo/add-blog.png';
import currency from './assets/work_logo/currency.png';
import password from './assets/work_logo/password.png';
import amazon from './assets/work_logo/amazon.png';
import netflix from './assets/work_logo/netflix.png';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },

        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'MySQL', logo: mysqlLogo },
            { name: 'NodeJs', logo: nodejsLogo },
            { name: 'Express', logo: expressLogo },
            { name: 'mongodb', logo: mongodb }

        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascriptLogo },

        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: InternWay,
        role: "Sofware Developer Intern",
        company: "InternWay Solution",
        date: "May 2025 - July 2025",
        desc: "Contributed to the development and testing of 5+ backend APIs, ensuring smooth data exchange between server and client applications. Debugged and resolved over 10+ minor issues, leading to an approximate 15% improvement in application performance. As a member of a 4 person team, I actively participated in Agile sprints and contributing to the implementation of 3 new features.",
        skills: [
            "HTML",
            "TailwindCss",
            "Javascript",
            "React",
            "NodeJs",
            "ExpressJs",
            "MongoDb",
            "Postman",
            "Commucation",

        ],
    },
    {
        id: 1,
        img: ThinkIndia,
        role: "Convener",
        company: "Think India",
        date: "April 2024 - Present",
        desc: "As the Convener of Think India Club at IIIT Agartala, I led the successful organization of 10+ events and workshops, managed a dedicated team of volunteers, and oversaw planning, budgeting, and promotional activities to enhance student engagement.",
        skills: [
            "Leadership",
            "Management",
            "Public relation",
            "Commucation",
            "Team-Work",
            "Team Building",

        ],
    },
    {
        id: 2,
        img: IIITLogo,
        role: "Cricket Team Captain",
        company: "IIIT Agartala",
        date: "July 2023 - March 2025",
        desc: "As the Cricket Team Captain at IIIT Agartala, I led the team in the 6th Inter-IIIT Sports Meet 2024 at IIIT Allahabad  and 7th Inter-IIIT Sports Meet 2024 at IIIT Gwalior and coordinated training sessions, team strategy, and event management for tournaments involving over 200 participants.",
        skills: [
            "Leadership ",
            "Team Coordination",
            "Strategic Planning",
            "Sportsmanship",
            "Event Coordination",

        ],
    },
    {
        id: 3,
        img: IIITLogo,
        role: " Team Lead – Tech Competitions",
        company: "IIIT Agartala",
        date: "September 2023 - August 2025",
        desc: "As a team leader in national-level tech competitions like Flipkart Grid 5.0 & 6.0 and GirlScript Summer of Code 2024, I guided my team through multiple problem-solving rounds and project contributions. I coordinated task distribution, code reviews, and ensured timely submissions while fostering collaboration and learning.",
        skills: [
            "Leadership",
            "Competitive Programming",
            "Collaboration",
            "Open Source",
            "Problem Solving",
            "Github",
            "Communication",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: IIITLogo,
        school: "IIIT Agartala, Tripura",
        date: "Nov 2022 - May 2026",
        grade: "8.51 CGPA",
        desc: "I am Pursuing B.Tech in Computer Applications from Indain Institute Of Information Technology, Agartala. During my time at B.tech, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at IIIT Agrtala has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor Of Technology - B.Tech",
    },
    {
        id: 1,
        img: RpsLogo,
        school: "Rajasthan Public Senior Secondary School, Mandawa",
        date: "July 2020 - April 2021",
        grade: "97.40%",
        desc: "I completed my class 12 education fromRajasthan Public Senior Secondary School, Mandawa, under the RBSE Board, where I studied Physics, Chemistry, and Mathematics (PCM) with Hindi, English..",
        degree: "RBSE(XII) - PCM ",
    },
    {
        id: 2,
        img: RpsLogo,
        school: "Rajasthan Public Senior Secondary School, Mandawa",
        date: "July 2018 - April 2019",
        grade: "93.83%",
        desc: "I completed my class 10 education fromRajasthan Public Senior Secondary School, Mandawa, under the RBSE Board, where I studied Science .",
        degree: "RBSE(X) - Science",
    },

];

export const projects = [
    {
        id: 0,
        title: "Periodic Table",
        description:
            "A powerful and user-friendly React.js application designed to uncover and showcase detailed periodic table with interactive element filters by category (e.g., metals, nonmetals, noble gases). Designed for quick exploration of element properties with a clean UI and responsive layout.",
        image: periodic,
        tags: ["HTML", "TailwindCSS", "JavaScript", "React JS", "API"],
        github: "https://github.com/SachinSihag1407/periodic-Table",
        webapp: "https://periodic-table-lime.vercel.app/",
    },
    {
        id: 1,
        title: "Currency Convertor",
        description:
            "The Currency Converter App is a React-based web application that enables users to convert values between different international currencies.The app features a user-friendly interface with intuitive input fields and dropdown selections, making it easy for users to perform quick calculations. Designed with simplicity and responsiveness in mind, it offers a smooth experience across devices.",
        image: currency,
        tags: ["React JS", "HTML", "TailwindCSS", "JavaScript"],
        github: "https://github.com/SachinSihag1407/Chai_aur_React/tree/main/06_CurrencyConverter",
        webapp: "https://currencyconverter-lake.vercel.app/",
    },
    {
        id: 2,
        title: "Add Blog",
        description:
            "This Blog Web App is a React-web application that allows authenticated users to log in, create, edit, and delete blog posts. The app features secure login/logout functionality, ensuring that only registered users can access and manage content. Blogs are hidden from public view, maintaining privacy and control — users must log in to view or interact with posts. With a clean and responsive UI, the platform offers a seamless blogging experience tailored for both writing and reading.",
        image: addBlog,
        tags: ["React JS", "HTML", "TailwindCSS", "JavaScript"],
        github: "https://github.com/SachinSihag1407/Blog-App",
        webapp: "https://blog-app-rust-nine.vercel.app/",
    },
    {
        id: 3,
        title: "Password Generator",
        description:
            "This Password Generator is a web application that creates secure, random passwords based on user-defined criteria. Users can customize the password length and choose to include numbers, special characters, uppercase, and lowercase letters. The app also features a convenient copy-to-clipboard function for quick use. Designed with simplicity and security in mind, it provides an easy way to generate strong passwords for personal or professional use.",
        image: password,
        tags: ["React JS", "HTML", "TailwindCSS", "Javascript"],
        github: "https://github.com/SachinSihag1407/Chai_aur_React/tree/main/05_passwordgenerator",
        webapp: "https://password-generator-beta-two-76.vercel.app/",
    },
    {
        id: 4,
        title: "Amazon Clone",
        description:
            "This is a simple Amazon clone built using HTML and CSS, designed to replicate the look and feel of the original Amazon homepage. It focuses on delivering a visually appealing and responsive user interface, enhancing the user experience across different screen sizes. The layout includes key sections like the navigation bar, product listings, and footer, styled to closely mimic the original site. This project highlights front-end development skills in creating structured and user-friendly web pages.",
        image: amazon,
        tags: ["HTML", "CSS"],
        github: "https://github.com/SachinSihag1407/Amazon-clone",
        webapp: "https://amazon-clone-eta-bice.vercel.app/",
    },
    {
        id: 5,
        title: "Netflix Clone",
        description:
            "This Netflix clone is a front-end project crafted using HTML and CSS, focused on replicating the visual design of the original streaming platform. It features a sleek, responsive layout with a modern UI that adapts seamlessly across devices. The design includes key elements like the navigation bar, banner section, and content rows for an immersive user experience.",
        image: netflix,
        tags: ["HTML", "CSS"],
        github: "https://github.com/SachinSihag1407/Netflix-Clone",
        webapp: "https://amazon-clone-tpm7.vercel.app/",
    },

];  