import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Tu Stack Principal (Las que tienen barra de progreso animada)
  const mainTech = [
    { name: "Python (FastAPI)", level: 90, color: "bg-blue-500" },
    { name: "Automatización (n8n)", level: 85, color: "bg-orange-500" },
    { name: "React & Node.js", level: 80, color: "bg-cyan-400" },
    { name: "SQL (PostgreSQL)", level: 85, color: "bg-emerald-500" },
    { name: "IA & Arquitecturas RAG", level: 75, color: "bg-purple-500" }
  ];

  // TODO TU ARSENAL SECUNDARIO (Agrega aquí todo lo que sabes usar)
  const additionalTech = [
    "Docker", "AWS (EC2, S3)", "Git / GitHub", "Linux (Ubuntu)",
    "PHP / Laravel", "Tailwind CSS", "MongoDB", "Supabase",
    "Web Scraping", "APIs REST", "Figma", "Metodologías Ágiles"
  ];

  const powerSkills = [
    {
      title: "Logística y Despacho Operativo",
      description: "Experiencia real gestionando flujos de entrega y coordinación. Capacidad probada para resolver cuellos de botella bajo presión.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Comunicación y Orientación al Cliente",
      description: "Habilidad para traducir requerimientos técnicos complejos a un lenguaje comercial, forjada tras 4 años en atención directa al público.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Resolución de Crisis en Terreno",
      description: "Mentalidad ágil para tomar decisiones críticas en tiempo real, manteniendo la continuidad operativa y la satisfacción del usuario.",
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Competencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Core</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            El equilibrio perfecto entre código robusto y habilidades operativas forjadas en el mundo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMNA IZQUIERDA: Stack Tecnológico Completo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Especialidad Principal
            </h3>
            
            {/* Barras animadas (Las Core) */}
            <div className="space-y-6 mb-8">
              {mainTech.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                    <span>{skill.name}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-700/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className={`h-full ${skill.color} rounded-full relative group-hover:brightness-110 transition-all`}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* NUEVA SECCIÓN: Ecosistema Adicional (Píldoras) */}
            <div className="mt-auto pt-6 border-t border-slate-700/50">
              <h4 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Ecosistema y Herramientas
              </h4>
              <div className="flex flex-wrap gap-2">
                {additionalTech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-700 rounded-lg hover:border-blue-500/50 hover:text-blue-300 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* COLUMNA DERECHA: Power Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              Power Skills (Trayectoria)
            </h3>

            {powerSkills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 rounded-2xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 flex gap-4 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 cursor-default h-[calc(33%-1rem)]"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-700 flex items-center justify-center shadow-inner">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">{skill.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;