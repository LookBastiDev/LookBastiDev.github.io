import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      
      {/* Resplandor de fondo premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Etiqueta de estatus (Micro-interacción de "En línea") */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Disponible para nuevos desafíos</span>
          </div>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-6">
          Hola, soy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Bastián Cerda
          </span>
        </motion.h1>

        {/* Propuesta de Valor */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ingeniero en Informática especializado en el desarrollo Full Stack, arquitecturas Cloud y orquestación avanzada de flujos con IA.
        </motion.p>

        {/* EL BOTÓN INNOVADOR (Conic Gradient Border) */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.a
            href="mailto:bastiiian.c.b@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
          >
            {/* El gradiente cónico que gira en el fondo creando el efecto de luz perimetral */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#2563eb_50%,#e2e8f0_100%)]" />
            
            {/* El interior del botón (Efecto Cristal) */}
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-white/95 px-8 py-3 text-base font-semibold text-slate-800 backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-50 group-hover:text-blue-600">
              <svg 
                className="w-5 h-5 mr-2 text-blue-600 group-hover:animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Hablemos de tu proyecto
            </span>
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;