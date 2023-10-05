import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  devtown,
  free,
  redux,
  tailwind,
  zomatoClone,
  nodejs,
  mongodb,
  git,
  figma,
  amazonClone,
  fitness,
  ecommerce,
  movieapp,
  buttons,
  mobileapp,
  bitcoins,
  admindahboard,
  openai,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    description:
      "Skilled Web Developer with 1 Year of Experience Building Dynamic Online Presence",
  },
  {
    title: "Web Animations",
    icon: mobile,
    description:
      "Bringing Websites to Life: Expert Web Animator Specializing in Engaging Web Animations",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:
      "Experienced Backend Developer with 1 Year of Proficiency",
  },
  {
    title: "UI/UX",
    icon: creator,
    description:
      "UI/UX Developer Creating Intuitive and Engaging Digital Experiences",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "DevTown",
    icon: devtown,
    iconBg: "#ffffff",
    date: "Sept 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: free,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image:
      "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Website",
    description:
      "An all-inclusive movie website that enables users to explore films, watch trailers, read reviews, and receive personalized recommendations for a wide range of cinematic experiences.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link:
      "https://github.com/PremSagarC/movieClone",
    source_link: "https://movies-and-shows.netlify.app/",
    disable: false,
  },
  {
    name: "E-commerce",
    description:
      "A versatile e-commerce platform that empowers users to shop for a diverse range of products, access customer reviews, and receive tailored product recommendations for their unique preferences.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/PremSagarC/e-commerce",
    source_link: "https://e-commerce-7pp.pages.dev/",
    disable: false,
  },
  {
    name: "Fitness Website",
    description:
      "A complete gym website offering booking, workouts, and equipment, along with expert tips for reaching fitness goals..",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: fitness,
    source_code_link:
      "https://github.com/PremSagarC/fitness-club",
    source_link: "https://fitness-c9f.pages.dev/",
    disable: false,
  },
  {
    name: "Open AI image generator",
    description:
      "Experience the magic of AI-generated images on our website. Create captivating visuals effortlessly with just a few clicks.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs, Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "DALL•E-AI",
        color: "green-text-gradient",
      },
    ],
    image: openai,
    source_code_link:
      "https://github.com/PremSagarC/Open_AI",
    source_link:
      "https://image-generator-open-ai.netlify.app/",
    disable: false,
  },
  {
    name: "NFT Mobile App",
    description:
      "Discover the future of digital ownership with our NFT app. Explore, collect, and trade unique digital assets securely on the blockchain. Join the NFT revolution today!",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
    ],
    image: mobileapp,
    source_code_link:
      "https://github.com/PremSagarC/nft-app",
    source_link: "https://nft-app-download.netlify.app/",
    disable: false,
  },
  {
    name: "Finance Website",
    description:
      "A comprehensive Data analytics website created as Your financial guide. Get insights, stay updated, and make informed decisions with us.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bitcoins,
    source_code_link:
      "https://github.com/PremSagarC/finance",
    source_link: "https://finance-app.pages.dev/",
    disable: false,
  },
  {
    name: "Admin Website",
    description:
      "Efficiency at your fingertips. The admin dashboard simplifies management tasks, tracks key metrics, and streamlines operations. Experience hassle-free administration with our user-friendly platform.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: admindahboard,
    source_code_link:
      "https://github.com/PremSagarC/admin-dashboard",
    source_link: "https://admin-dashboard-449.pages.dev/",
    disable: false,
  },
  {
    name: "Amazon Clone",
    description:
      "Welcome to our Amazon-inspired shopping platform. Discover a world of products, competitive prices, and convenient shopping. Experience the essence of online retail with our user-friendly Amazon clone website.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs, ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: amazonClone,
    source_code_link:
      "https://github.com/PremSagarC/amazon-clone",
    source_link:
      "https://github.com/PremSagarC/amazon-clone",
    disable: true,
  },
  {
    name: "Zomato Clone",
    description:
      "Explore culinary delights in your city with our Zomato-inspired platform. Discover restaurants, read reviews, and order delicious meals for delivery. Satisfy your cravings effortlessly on our Zomato clone website.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs, ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: zomatoClone,
    source_code_link:
      "https://github.com/PremSagarC/Zomato-clone",
    source_link:
      "https://github.com/PremSagarC/Zomato-clone",
    disable: true,
  },
  {
    name: "Button Animations",
    description:
      "Unlock creativity with our button design showcase. Explore a variety of button styles, from sleek and modern to playful and colorful. Elevate your web design with our curated collection of button designs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: buttons,
    source_code_link:
      "https://github.com/PremSagarC/buttons-designs.github.io",
    source_link:
      "https://premsagarc.github.io/buttons-designs.github.io/",
    disable: false,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
