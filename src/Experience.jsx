import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Datos de tu experiencia estructurados
  const experiences = [
    {
      id: 1,
      role: "Desarrollador de Software e IA",
      company: "Bee Fractal SpA",
      type: "Práctica Profesional",
      date: "Ene 2026 - Mar 2026",
      description: "Diseño de flujos autónomos con n8n para mitigación de errores en diagnósticos técnicos. Integración de IA generativa sobre PHP/Laravel y desarrollo de un motor para traducir lenguaje natural a consultas SQL directas.",
      tech: ["n8n", "PHP (Laravel)", "IA Generativa", "SQL"],
      color: "from-emerald-400 to-teal-500",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      borderGlow: "group-hover:border-emerald-500/50"
    },
    {
      id: 2,
      role: "Ingeniero de Software Full Stack",
      company: "PrismaFinance",
      type: "Proyecto de Tesis / Sector Minero",
      date: "Mar 2025 - Dic 2025",
      description: "Arquitectura y despliegue de un ecosistema local-first. Creación de microservicios robustos en Python (FastAPI), frontend interactivo en React, y orquestación de LLMs para auditorías lógicas con 95% de precisión.",
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "LLMs"],
      color: "from-blue-500 to-indigo-500",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      borderGlow: "group-hover:border-blue-500/50"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Fondo decorativo (Malla sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Encabezado animado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Profesional</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Trayectoria en construcción de arquitecturas escalables y automatización de misiones críticas.
          </p>
        </motion.div>

        {/* LÍNEA DE TIEMPO INTERACTIVA */}
        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* El Punto de la línea de tiempo (Glowing Dot) */}
              <div className="absolute w-6 h-6 bg-slate-900 rounded-full -left-[12.5px] top-1 border-4 border-slate-800 group-hover:border-transparent transition-colors duration-300 z-10 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300`}></div>
              </div>

              {/* Lazo conector iluminado al hover */}
              <div className={`absolute w-[2px] h-full left-[-1px] top-6 bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>

              {/* Tarjeta de Experiencia (Glassmorphism) */}
              <div className={`p-8 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 ease-out transform group-hover:-translate-y-1 ${exp.borderGlow} ${exp.glow}`}>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                        {exp.company}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      <span className="text-sm">{exp.type}</span>
                    </div>
                  </div>
                  
                  {/* Etiqueta de Fecha */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-slate-400 text-sm font-semibold whitespace-nowrap w-max">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.date}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Badges de Tecnologías Usadas */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded-full group-hover:border-slate-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;