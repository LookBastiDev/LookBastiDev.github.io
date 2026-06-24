import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Datos reales de tus proyectos estructurados para el Bento Box
  const projects = [
    {
      id: 1,
      title: "PrismaFinance: RAG & Multi-Agentes",
      description: "Ecosistema financiero local-first con IA. Auditorías lógicas automatizadas mediante modelos LLM y extracción OCR con 95% de precisión.",
      tags: ["Python", "FastAPI", "React", "PostgreSQL", "IA Generativa"],
      colSpan: "md:col-span-2", // Toma 2 columnas (Proyecto Estrella)
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Cambia esto por tu captura real
      link: "#"
    },
    {
      id: 2,
      title: "AgroTech Automation",
      description: "Flujos de trabajo autónomos para diagnósticos técnicos. Reducción drástica de carga operativa interconectando APIs críticas.",
      tags: ["n8n", "PHP / Laravel", "SQL Dinámico"],
      colSpan: "md:col-span-1 md:row-span-2", // Toma 1 columna pero baja 2 filas (Vertical)
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", 
      link: "#"
    },
    {
      id: 3,
      title: "La Magia de la Limpieza",
      description: "Landing page publicitaria de alta conversión y SEO optimizado para un servicio local en la Región de Atacama.",
      tags: ["HTML5", "Tailwind CSS", "Netlify"],
      colSpan: "md:col-span-2", // Toma 2 columnas en la parte inferior
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo (Efecto Cyberpunk sutil) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Encabezado de Sección Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Destacados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Soluciones escalables, desde automatización de misión crítica y ecosistemas web, hasta implementaciones arquitectónicas con Inteligencia Artificial.
          </p>
        </motion.div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 ${project.colSpan}`}
            >
              {/* Imagen de fondo con Zoom al hacer Hover */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                {/* Overlay oscuro para que el texto siempre sea legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Badges de Tecnologías (Aparecen apilados y coloridos) */}
                <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold text-blue-100 bg-blue-600/40 backdrop-blur-md border border-blue-400/30 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* Botón Flotante que aparece en el Hover */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                >
                  <svg className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;