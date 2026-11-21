export const links = {
  github: "https://github.com/Bhanubathini2002",
  linkedin: "https://www.linkedin.com/in/bathini-bhanu-prakash-1106151b5/",
  email: "bbathini57@gmail.com",
  phoneHref: "+16605282536",
  phoneLabel: "+1 660 528 2536",
};

export const navItems = [
  { label: "Expertise", id: "expertise" },
  { label: "History", id: "history" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const expertise = [
  {
    title: "GenAI and LLMs",
    text: "Enterprise GenAI features built on LLMs: agent workflows, retrieval over vector databases, and evaluation for quality and safety.",
    stack: ["OpenAI", "Groq", "LangChain", "LlamaIndex", "Qdrant", "Hugging Face", "Streamlit"],
  },
  {
    title: "DevOps and automation",
    text: "After the build: automated testing, CI/CD pipelines and deployment automation through go-live.",
    stack: ["Git", "GitHub Actions", "Docker", "AWS", "Azure", "Linux", "Snowflake", "Pandas", "Selenium"],
  },
  {
    title: "Full stack web",
    text: "Web applications built from scratch with React and Flask, across frontend, backend and the full SDLC.",
    stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Sass", "Flask", "Python", "SQL", "PostgreSQL", "Postman"],
  },
];

export const roles = [
  {
    when: "Jan 2023 – present",
    title: "Gen AI engineer",
    where: "Mondee · Fairmont, CA",
    tags: ["LLMs", "RAG", "Embeddings", "Vector databases", "Prompting and evaluation", "FastAPI", "Observability", "Project management"],
  },
  {
    when: "Apr 2020 – Nov 2022",
    title: "Machine learning engineer",
    where: "Cosmic Reality · Missouri",
    tags: ["Feature engineering", "Model training and evaluation", "MLOps", "Model APIs", "Monitoring"],
  },
];

export type ProjectItem = {
  title: string;
  href: string;
  meta: string;
  text: string;
  subtitle?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Data Copilot",
    href: "https://github.com/Bhanubathini2002/datacopilot",
    meta: "github.com/Bhanubathini2002/datacopilot",
    text: "Turns plain-English questions into executable SQL for self-service analytics. Schema-aware prompting and iterative refinement reduce invalid queries and raise execution success.",
  },
  {
    title: "Auto Email",
    href: "https://github.com/Bhanubathini2002/Gmail_autoreply_finalrepo",
    meta: "github.com/Bhanubathini2002/Gmail_autoreply_finalrepo",
    text: "An LLM email assistant that turns plain-language requests into context-aware drafts and follow-ups. An agent workflow detects intent, applies tone rules and keeps a thread consistent, with PII redaction and action constraints as guardrails.",
  },
  {
    title: "Job Day",
    href: "https://github.com/Bhanubathini2002/PRODUCT_RECOMMENDER_SYSTEM",
    meta: "github.com/Bhanubathini2002/PRODUCT_RECOMMENDER_SYSTEM",
    text: "A recruiting workflow tool that keeps applications in one candidate profile, tracks each role through pipeline stages and keeps resume details consistent across submissions.",
  },
  {
    title: "1000+ AI Projects",
    href: "https://github.com/Bhanubathini2002/1000-AI-projects",
    meta: "github.com/Bhanubathini2002/1000-AI-projects",
    text: "A collection of projects across NLP, computer vision, reinforcement learning, time series, recommendation systems, generative models, graph neural networks and healthcare AI, using PyTorch, TensorFlow and LangChain.",
  },
  {
    title: "Conversational AI research",
    href: "https://link.springer.com/chapter/10.1007/978-3-031-92178-0_4",
    meta: "Springer · CATA 2025",
    subtitle: "Conversational AI in Healthcare: A Framework for Privacy, Security, Ethics, Transparency and Harm Prevention",
    text: "A framework for deploying conversational AI with privacy, security, ethical transparency and harm-prevention guardrails.",
  },
];

export const copilotExample = {
  question: "Top 5 product categories by revenue last quarter, with the change vs the quarter before",
  status: "Checked against schema · 1 refinement · 5 rows · 184 ms",
  rows: [
    { category: "Outdoor", revenue: 412380, change: 8.4 },
    { category: "Kitchen", revenue: 356910, change: 3.1 },
    { category: "Electronics", revenue: 301450, change: -2.7 },
    { category: "Apparel", revenue: 248120, change: 5.9 },
    { category: "Home office", revenue: 187640, change: 12.2 },
  ],
};
