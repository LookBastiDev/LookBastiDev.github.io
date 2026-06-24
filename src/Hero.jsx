import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Estado para controlar la ventanilla (modal) de contacto
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* Etiqueta de estatus */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Disponible para nuevos desafíos</span>
          </div>
        </motion.div>

        {/* Título Principal con el NOMBRE ANIMADO igual que el botón */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-8 flex flex-col items-center gap-4">
          <span>Hola, soy</span>
          {/* El contenedor con el borde rotativo para tu nombre */}
          <span className="relative inline-flex overflow-hidden rounded-3xl p-[3px] shadow-sm">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#2563eb_50%,#e2e8f0_100%)]" />
            <span className="relative inline-flex items-center justify-center rounded-[22px] bg-slate-50 px-8 py-2 backdrop-blur-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Bastián Cerda
              </span>
            </span>
          </span>
        </motion.h1>

        {/* Propuesta de Valor */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ingeniero en Informática especializado en el desarrollo Full Stack, arquitecturas Cloud y orquestación avanzada de flujos con IA.
        </motion.p>

        {/* BOTÓN INNOVADOR MODIFICADO */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#2563eb_50%,#e2e8f0_100%)]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-white/95 px-8 py-3 text-base font-semibold text-slate-800 backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-50 group-hover:text-blue-600">
              <svg className="w-5 h-5 mr-2 text-blue-600 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Hablemos de proyectos
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* =========================================
          MODAL (VENTANILLA FLOTANTE) DE CONTACTO
          ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
            onClick={() => setIsModalOpen(false)} // Cierra el modal si haces clic fuera de la caja
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Evita que al hacer clic dentro de la caja se cierre
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
            >
              {/* Botón de cerrar (X) */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Contacto Directo</h3>
                <p className="text-slate-500">¿Tienes un proyecto en mente o una oportunidad de equipo? Hablemos.</p>
              </div>

              {/* Botones de Redes/Contacto */}
              <div className="flex flex-col gap-4">
                {/* 1. WhatsApp */}
                <a 
                  href="https://wa.me/56984854353?text=Hola%20Bastián,%20estoy%20viendo%20tu%20portafolio%20y%20me%20gustaría%20contactarte." 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-4 rounded-2xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all duration-300 font-semibold group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>

                {/* 2. Correo Electrónico */}
                <a 
                  href="mailto:bastiiian.c.b@gmail.com" 
                  className="flex items-center gap-4 w-full p-4 rounded-2xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold group"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Correo Electrónico
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>

                {/* 3. LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/lookbastidev/" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-4 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-semibold group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;