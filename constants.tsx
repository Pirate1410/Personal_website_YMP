
import React from 'react';
import { Project, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yashodhar Parmar",
  title: "AI Consultant & Creative Tech Specialist",
  email: "Yasshodharparmar@gmail.com",
  phone: "+1 (480) 560-1852",
  location: "Tempe, AZ",
  linkedin: "https://www.linkedin.com/in/yashodhar-parmar-b9b52125a",
  about: "I bridge the gap between business strategy and cutting-edge Artificial Intelligence. Currently pursuing my Masters in AI in Business at ASU, I leverage my background from Deloitte USI and Zoom Innovation Labs to help enterprises reimagining their pipelines with Generative AI.",
  personalMission: "I operate at the intersection of Tech and Business, fueled by Creativity and Design. My mission is to translate complex machine intelligence into scalable, high-impact business solutions that never compromise on human-centric aesthetics."
};

export const PERSONAL_STORY = {
  narrative: [
    "My journey bridges the analytical and the artistic. At NIT Surat, I mastered signal processing, but was always fascinated by its business impact and user experience.",
    "At Deloitte USI, leading XR initiatives for global giants taught me that AI's true potential lies in solving enterprise friction points. This drove my pivot to Generative AI, focusing on intelligent systems that act as partners.",
    "Now pursuing my Master's at ASU's W.P. Carey School, I orchestrate AI in Business. I approach prompt engineering and RAG pipelines as design challenges—making AI accurate for the CFO, yet intuitive for creatives.",
    "Whether architecting strategy at London Tech Week or directing production at Zoom Innovation Labs, I remain fluent in both code and commerce."
  ],
  quickFacts: [
    { label: "Obsession", value: "GenAI and Ethical AI Strategy" },
    { label: "Global Perspective", value: "Delegate @ London Tech Week" },
    { label: "Academics", value: "4.0 GPA @ ASU W.P. Carey" },
    { label: "Mantra", value: "Design-Led AI Strategy" }
  ],
  pillars: [
    { title: "Tech", description: "Python, FastAPI, RAG, and XR development.", icon: "code" },
    { title: "Business", description: "Consulting strategy, ROI-driven AI, and data analytics.", icon: "briefcase" },
    { title: "Creativity", description: "Podcast direction, storytelling, and innovative media.", icon: "sparkles" },
    { title: "Design", description: "Figma, UI/UX, and immersive experience architecture.", icon: "palette" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI Business Strategist",
    company: "City of Scottsdale, Scottsdale, AZ",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Partnered with the City of Scottsdale for capstone project to improve the resident complaint system (ScottsdaleEZ), by implementing prediction models, and displaying data analysis driven insights PowerBI dashboard, enabling officials to predict community issues. Thus, incorporating quality monitoring, safety constraints, and evaluation metrics to reduce resolution time by 30%."
    ]
  },
  {
    role: "Creative Technology Consultant",
    company: "Enterprise Tech ASU, Tempe",
    period: "Oct 2025 – May 2026",
    highlights: [
      "Worked at Zoom Innovation Labs, supporting client engagements through podcast direction, recording, and production management to enhance content quality and engagement.",
      "Did end-to-end production setup for major podcasts, like the Pat Tillman Podcast, Taiwan Club Podcast, etc."
    ]
  },
  {
    role: "Cohort Engagement Board member",
    company: "MS-AIB W. P. Carey School of Business, Tempe",
    period: "Oct 2025 – May 2026",
    highlights: [
      "Planned, managed, and executed an Alumni meet and a Tech Talk for the cohort, addressing student questions towards current AI market.",
      "Served as the primary liaison between students and the program coordinator, ensuring smooth communication."
    ]
  },
  {
    role: "AI Consultant",
    company: "Deloitte USI, Bangalore",
    period: "June 2022 – Aug 2025",
    highlights: [
      "Worked as a Digital Customer Consultant at Deloitte USI (US offices in India), leading various XR and AI projects, majorly catering international clients from US (Major Fortune 500 companies), Canada, UAE and Saudi Arabia.",
      "Later Upskilled and Promoted to AI Consultant.",
      "Owned GenAI product roadmap for enterprise automation tools, defining POCs, success metrics, and release milestones in collaboration with engineering team, design team and business stakeholder.",
      "AWARDS: “Excellence Applause Award”- 2023 and 2024 performance year, “Outstanding Performance Award”- 2024-25 performance year, “EXCEPTIONAL” Rating in 2024 and 2025."
    ]
  },
  {
    role: "Project Team Lead",
    company: "Technokrat Solutions (Internship)",
    period: "June 2021 – Aug 2021",
    highlights: [
      "Created and implemented a full-proof hardware to software pipeline for RFID based asset tracking solution for POWERGRID Corporation of India Limited (PGCIL), reducing the error margin from 40% to almost null."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Masters in AI in Business",
    institution: "W. P. Carey School of Business, Arizona State University",
    period: "Aug 2025 – May 2026",
    details: "4.0 CGPA. Focused on Machine Learning, Programming for AI, and Enterprise Data Analytics."
  },
  {
    degree: "Bachelors of Technology (Electronics & Communication)",
    institution: "National Institute of Technology (NIT), Surat, India",
    period: "2018 – 2022",
    details: "Focus on electronics, signal processing, and telecommunications."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Tiershift",
    description: "Customer subscription fit analyzer tool created using Netflix user dataset, to help streaming services understand and improve client subscription fit.",
    tags: ["Data Analysis", "Python", "Machine Learning"],
    link: "https://github.com/Pirate1410/TierShift.git"
  },
  {
    title: "VibeCheckAI",
    description: "An award-winning AI tool designed to bridge the gap between different generations and communication styles within teams.",
    tags: ["GenAI", "Communication", "LLM"],
    link: "https://gemini.google.com/share/e84107e4c613"
  },
  {
    title: "Agentic AI Blog Expert",
    description: "Designed an end-to-end agentic AI system that automates the content creation workflow from ideation to revision, integrating Groq and OpenAI APIs for task-specific roles (Planner → Researcher → Writer → Editor → Reviser).",
    tags: ["Agentic AI", "OpenAI API", "Groq"],
    link: "https://github.com/Pirate1410/Agentic-AI-Blog-Expert.git"
  },
  {
    title: "Customer Service Automation Chatbot",
    description: "Implemented an agentic AI-powered chatbot that augments customer service operations by partially automating representative tasks through intelligent workflow orchestration.",
    tags: ["Agentic AI", "Chatbot", "Workflow Orchestration"],
    link: "https://github.com/Pirate1410/Customer_Service_agentic_bot.git"
  },
  {
    title: "Phoenix Sky Harbor Airport Visualization",
    description: "Created a dashboard to visualise live car parking data, thus improving the parking lot management.",
    tags: ["Data Visualization", "Dashboard", "Analytics"],
    link: "https://github.com/Pirate1410/PHX_SkyHarbor_Airport_ParkingViz"
  }
];

export const PRESENTATIONS = [
  {
    title: "Why Fear AI",
    description: "Presentation on why we fear AI, psychology behind it, how it started and how can we mitigate the risks and reduce the fear of AI.",
    videoUrl: "https://drive.google.com/file/d/1K5V0b64Eb3oPDMTVyYbVgTIuQ0DlQ4z3/view?usp=drive_link"
  },
  {
    title: "The AI Mischief",
    description: "Presentation on how people use AI for wrong deeds and psychology behind it. What are the common risks that we should be aware of, and how to avoid them.",
    videoUrl: "https://drive.google.com/file/d/1vy7Zf7RpTV1UhpHgF9jVtp93J_EDN1Ez/view?usp=drive_link"
  }
];

export const SKILLS = {
  ai: ["Agentic AI Workflow", "LLMs", "RAG", "FAISS", "PDF parsers", "Python", "Scikit", "FastAPI", "Streamlit", "Gradio", "Google AI Studios", "Cursor", "Antigravity", "GPT-Family", "Claude", "GeminiPro", "Copilot", "PerplexityPro", "ElevenLabs", "Veo3"],
  dataAnalytics: ["Pandas", "Numpy", "MySQL", "PostgreSQL", "SQLalchemy", "Tableau", "PowerBI"],
  rendering3D: ["Architectural Visualization (ArchViz)", "Product visualization and Animation", "Interior Visualization", "3D asset development", "3D environment development", "Modelling for 3D Printing", "3D storytelling", "AR 3D assets", "Minting NFTs"],
  arVr: ["Reality Composer Pro", "XCode", "ReadyPlayerMe", "Spatial.io", "ARcore", "Unity AR", "LightShip ARDK"],
  uiUx: ["High fidelity prototyping", "Figma", "Framer", "HTML", "CSS", "JavaScript"],
  other: ["Unreal Engine 5", "Unity3D", "Adobe Creative Suite", "Microsoft Office", "Google Suite", "Maya", "Blender3D"]
};

export const RESUME_CONTEXT = `
Full Name: Yashodhar Parmar
Role: AI Consultant & Creative Tech Specialist
Education: MS in AI in Business (ASU, 4.0 GPA), B.Tech in Electronics (NIT Surat)
Experience Highlights: 
- AI Consultant at Deloitte USI (XR & GenAI projects for global Fortune 500s).
- Creative Tech Consultant for Zoom Innovation Labs.
- Delegate at London Tech Week 2024 (British High Commission).
- Reduced error margins from 30% to 0% for POWERGRID Corp.
Skills: Expert in Prompt Engineering (Gemini, Claude, GPT), Python development, UI/UX (Figma), and XR (Unreal/Unity).
Awards: Multiple "Excellence" awards and "EXCEPTIONAL" performance ratings.
Contact: Yasshodharparmar@gmail.com, +1 (480) 560-1852.
Location: Tempe, Arizona.
Current Focus: The intersection of Tech, Business, Creativity, and Design.
`;
