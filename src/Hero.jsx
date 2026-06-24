import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Definimos variantes de animación para mantener el componente limpio y profesional
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // Cada elemento hijo aparecerá con 0.2s de diferencia
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      
      {/* Elemento de UI: Resplandor de fondo (Efecto "Glow" Premium) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Etiqueta de disponibilidad */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Disponible para traslado a Santiago
          </span>
        </motion.div>

        {/* Título Principal con punto focal en el nombre */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-6">
          Hola, soy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Bastián Cerda
          </span>
        </motion.h1>

        {/* Subtítulo / Propuesta de Valor */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ingeniero en Informática especializado en el desarrollo Full Stack, arquitecturas Cloud y orquestación avanzada de flujos con IA.
        </motion.p>

        {/* Botones de Acción (CTAs) con microinteracciones de hover */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Ver mis proyectos
          </a>
          <a 
            href="https://www.linkedin.com/in/lookbastidev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 font-medium rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;