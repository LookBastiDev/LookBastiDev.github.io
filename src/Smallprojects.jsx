import React from 'react';
import { motion } from 'framer-motion';

const Smallprojects = () => {
  // Lista de proyectos secundarios o repositorios menores
  const smallProjects = [
    {
      id: 1,
      title: "API de Telemetría OBD-II",
      description: "Script en Python para lectura y parseo de datos de sensores automotrices en tiempo real vía puerto serial, estructurado para análisis de flotas.",
      tech: ["Python", "Pandas", "PySerial"],
      github: "https://github.com/lookbastidev",
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard de Rendimiento",
      description: "Interfaz administrativa ligera para visualizar métricas de servidores locales. Consumo de endpoints REST y renderizado de gráficos dinámicos.",
      tech: ["React", "Tailwind", "Chart.js"],
      github: "https://github.com/lookbastidev",
      link: "#"
    },
    {
      id: 3,
      title: "Bot de Automatización Discord",
      description: "Agente conversacional integrado con Discord para gestionar recordatorios de turnos y alertas de caída de servicios web.",
      tech: ["Node.js", "Discord.js", "MongoDB"],
      github: "https://github.com/lookbastidev",
      link: "#"
    },
    {
      id: 4,
      title: "Scraper de Precios Tech",
      description: "Herramienta automatizada que extrae precios de hardware (GPUs, CPUs) de tiendas locales y alerta por bajadas de precio.",
      tech: ["Python", "BeautifulSoup", "Cron"],
      github: "https://github.com/lookbastidev",
      link: "#"
    }
  ];

  return (
    <section id="small-projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              Otras <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Exploraciones</span>
            </h2>
            <p className="text-slate-400">Scripts, repositorios secundarios y utilidades técnicas.</p>
          </div>
          
          {/* Botón directo a tu GitHub general */}
          <a 
            href="https://github.com/lookbastidev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-900/20 px-4 py-2 rounded-full border border-cyan-800/30 hover:border-cyan-500/50"
          >
            Ver todo en GitHub
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Grid de Tarjetas Compactas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smallProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              {/* Cabecera de la tarjeta: Icono Carpeta y Enlaces */}
              <div className="flex justify-between items-start mb-4">
                <svg className="w-10 h-10 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                
                <div className="flex gap-3 text-slate-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Código Fuente">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Enlace Externo">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>

              {/* Título y Descripción */}
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tecnologías Usadas */}
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-slate-500 group-hover:text-cyan-200/70 transition-colors mt-auto">
                {project.tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Smallprojects;