import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // Configura aquí los nombres EXACTOS de tus archivos PDF guardados en la carpeta /public
  const mainDegree = {
    title: "Ingeniero en Informática",
    institution: "Instituto Profesional INACAP",
    date: "Titulado - Marzo 2026",
    description: "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    pdfFile: "/certificado_titulo.pdf", // El archivo debe estar en public/certificado_titulo.pdf
    glow: "from-blue-600 to-indigo-600"
  };

  const certifications = [
    {
      id: 1,
      title: "Arquitectura Cloud",
      institution: "INACAP",
      pdfFile: "/cert_cloud.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      )
    },
    {
      id: 2,
      title: "Desarrollo Full Stack",
      institution: "INACAP",
      pdfFile: "/cert_fullstack.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      )
    },
    {
      id: 3,
      title: "Diseño y Gestión de BD",
      institution: "INACAP",
      pdfFile: "/cert_bd.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      )
    },
    {
      id: 4,
      title: "Diseño Ágil de Sistemas",
      institution: "INACAP",
      pdfFile: "/cert_agile.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      )
    },
    {
      id: 5,
      title: "Innovación y Emprendimiento",
      institution: "INACAP",
      pdfFile: "/cert_innovacion.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
      )
    },
    {
      id: 6,
      title: "Soporte Computacional",
      institution: "INACAP",
      pdfFile: "/cert_soporte.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      id: 7,
      title: "Desarrollo de Aplicaciones Básicas",
      institution: "INACAP",
      pdfFile: "/cert_aplicaciones_basicas.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Efecto de luz de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Educación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Certificaciones</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Respaldo académico y certificaciones oficiales que avalan mis competencias técnicas.
          </p>
        </motion.div>

        {/* 1. TARJETA PRINCIPAL: Título Universitario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative p-[2px] rounded-3xl overflow-hidden group">
            {/* Borde animado del título */}
            <span className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e293b_0%,#4f46e5_50%,#1e293b_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 md:p-10 rounded-[22px] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                  {mainDegree.date}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{mainDegree.title}</h3>
                <p className="text-xl text-slate-300 mb-4">{mainDegree.institution}</p>
                <p className="text-slate-400">{mainDegree.description}</p>
              </div>
              
              <a 
                href={mainDegree.pdfFile} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center gap-2"
              >
                Ver Título Oficial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. GRILLA DE CERTIFICACIONES DE ESPECIALIDAD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 leading-tight group-hover:text-blue-200 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-400">{cert.institution}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <a 
                  href={cert.pdfFile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-400 transition-colors w-full p-2 -ml-2 rounded-lg hover:bg-blue-500/10"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Ver Certificado PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;