// src/data/portfolioData.js
export const portfolioData = {
  profile: {
    name: "Elo Marco",
    title: "Mataheru.",
    subtitle: "I am a Freelance Designer and Full Stack Developer",
    image: "/profile.jpg",
    contact: {
      email: "elomarco@gmail.com",
      phone: "62-XXX-XXX-XX"
    }
  },
  
  about: {
    title: "Hello I'm Clio !",
    description: "I am a UI/UX designer and Full Stack Developer"
  },
  
  education: [
    {
      id: 1,
      year: "2018 - 2022",
      degree: "Bachelor's Degree",
      institution: "Sam Ratulangi University",
      icon: "🎓"
    },
    {
      id: 2,
      year: "2022 - 2023",
      degree: "Intensive Bootcamp",
      institution: "SMKN 1 Manado",
      icon: "🎓"
    },
    {
      id: 3,
      year: "2023 - Now",
      degree: "Intermediate Course",
      institution: "—",
      icon: "🎓"
    }
  ],
  
  experience: [
    {
      id: 1,
      year: "2022 - 2023",
      position: "Web Designer",
      company: "Pt. Infomedia Nusantara"
    },
    {
      id: 2,
      year: "2023 - Now",
      position: "Intern Front-end",
      company: "PT. Matahariku Sejahtera"
    }
  ],
  
  skills: {
    software: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe XD", icon: "adobe" },
      { name: "Framer", icon: "framer" },
      { name: "Blender", icon: "blender" }
    ],
    coding: [
      { name: "Next JS/React JS", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Java", level: "Beginner" },
      { name: "Node JS", level: "Intermediate" },
      { name: "C#", level: "Beginner" }
    ]
  },
  
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Indonesian", level: "Native" }
  ],
  
  activities: [
    {
      id: 1,
      year: "2021 - 2023",
      role: "Coordinator",
      organization: "KKN Community"
    },
    {
      id: 2,
      year: "2021",
      role: "Participant",
      organization: "Wirausahaan"
    }
  ],
  
  hobbies: [
    { name: "Gaming", icon: "🎮" },
    { name: "Cycling", icon: "🚴" },
    { name: "Reading", icon: "📚" }
  ]
};