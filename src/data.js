import { Brain, Code, Cloud, Terminal, Database, Layout, Server, Cpu } from "lucide-react";

export const personalData = {
  name: "Bastián Cerda",
  role: "AI Automation Builder | Full Stack Developer", 
  location: "La Serena, Chile. Vallenar, Chile. Disponibilidad total en Santiago - Chile.",  
  socials: {
    github: "https://github.com/BastiTrollOne" || "https://github.com/LookBastiDev",
    linkedin: "https://www.linkedin.com/in/bastian-cerda-776478244",
    email: "bastiiian.c.b@gmail.com",
    whatsapp: "56984854353"
  }
};

export const skills = [
  {
    category: "Lenguajes & Core",
    icon: Code,
    items: ["Python", "JavaScript (ES6+)", "Java", "PHP", "SQL", "HTML5/CSS3"]
  },
  {
    category: "Frameworks & Web",
    icon: Layout,
    items: ["React.js", "Django", "Bootstrap", "Integración de APIs REST", "Arquitectura MVC"]
  },
  {
    category: "IA & Datos",
    icon: Brain,
    items: ["LangChain", "RAG (Retrieval-Augmented Gen)", "Neo4j (Grafos)", "Vectores & Embeddings", "OCR Pipelines"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (EC2, S3)", "Docker", "Linux (Kali)", "Git/GitHub", "Arquitectura Local-First"]
  }
];

export const experience = [
  {
    title: "Desarrollador de IA y Automatización (Práctica)",
    company: "Bee Fractal SpA",
    date: "Ene 2026 - 06/Marzo/2026",
    type: "Práctica Profesional",
    description: "Liderazgo en el proyecto B-MaiA. Desarrollo de agentes de IA en n8n con lógica de SQL dinámico y procesamiento de archivos binarios en JavaScript.",
  },
  {
    title: "Logística y Gestión de Operaciones",
    company: "Los Quebrachos SPA",
    date: "Ene 2022 - Feb 2025",
    type: "Experiencia Laboral",
    description: "Liderazgo en gestión de inventarios y optimización de rutas de despacho críticas. Desarrollé habilidades clave en resolución de problemas bajo presión y cumplimiento de SLAs.",
  },
  {
    title: "Co-Founder & Lead AI Architect", 
    company: "Prisma Finance",
    date: "2024 - 2025",
    type: "Emprendimiento / Proyecto",
    description: "Co-fundé una startup Fintech junto a un equipo de 3 especialistas. Lideré la arquitectura técnica y el desarrollo de IA, logrando llevar el proyecto a ganar el 1er Lugar en Innovación en la UCN Coquimbo.",
  }
];

export const projects = [
  {
    title: "B-MaiA: Agente Experto Agrícola",
    tech: ["n8n", "SQL", "JavaScript", "AI Agents", "Knowledge Chains"],
    desc: "Sistema experto en n8n que automatiza diagnósticos técnicos. Incluye un generador de SQL dinámico y un motor de análisis de audio para transcripciones precisas. todo incorporandolo en laravel dentro de php",
    link: "https://github.com/LookBastiDev/WorkFlows" 
  },
  {
    title: "PrismaFinance (AI Fintech)",
    tech: ["Python", "React", "LangChain", "Neo4j", "OCR"],
    desc: "🏆 1er Lugar Innovación y Emprendimiento (UCN Coquimbo). Como Co-Founder en un equipo de 3, desarrollé esta plataforma SaaS 'Local-First'. Diseñé el pipeline RAG con pre-chunking + OCR + Neo4j mediante agente de IA por LangChain para procesar documentos financieros sin exponer datos a la nube.",
    link: "https://github.com/BastiTrollOne/PrismaFinance-graph"
  },
  {
    title: "Plataforma Web Transaccional",
    tech: ["Django", "MySQL", "Bootstrap", "MVC", "Auth"],
    desc: "Sistema web robusto para gestión de usuarios y transacciones. Desarrollé una arquitectura MVC limpia con autenticación segura, integración de base de datos relacional MySQL optimizada y operaciones CRUD complejas.",
    link: "https://github.com/BastiTrollOne"
  }
];

export const smallProjects = [
  {
    title: "Gestor de Inventario Android",
    tech: ["Java", "Android Studio", "SQLite"],
    description: "Aplicación móvil nativa para control de stock, empleados, clientes y administradores."
  },
  {
    title: "Sistema De Gestion De Articulos",
    tech: ["PHP", "Bootstrap", "MySQL"],
    description: "CRUD clásico para gestión de Articulos de empresas."
  }
];

export const education = [
  {
    institution: "INACAP",
    degree: "Ingeniería en Informática",
    date: "2022 - Presente (Egreso 2025)",
    desc: "Especialización en Arquitecturas Cloud, Seguridad Informática y Desarrollo de Software Escalable."
  }
];

export const certifications = [
  "Arquitectura Cloud (198 hrs) - INACAP",
  "Desarrollador Full Stack (162 hrs) - INACAP",
  "Diseño y Gestión de Bases de Datos (126 hrs) - INACAP",
  "Diseño Ágil de Sistemas (126 hrs) - INACAP",
  "Soporte Computacional (126 hrs) - INACAP"
];