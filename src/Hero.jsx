import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { personalData } from "./data";

const Hero = () => {
  // Enlace a Gmail
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.socials.email}`;
  
  // Enlace a WhatsApp con mensaje predefinido
  const whatsappLink = `https://wa.me/${personalData.socials.whatsapp}?text=Hola%20Bastián,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar.`;

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <span className="text-sky-400 font-mono text-lg mb-4 block">Hola, soy</span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {personalData.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-400 mb-8">
          {personalData.role}
        </h2>

        <div className="flex items-center gap-2 text-slate-500 mb-8 border border-slate-700/50 w-fit px-4 py-2 rounded-full bg-slate-800/30">
            <MapPin size={18} className="text-sky-400" />
            <span>{personalData.location}</span>
        </div>

        {/* CONTENEDOR DE BOTONES */}
        <div className="flex flex-wrap gap-4">
          
          {/* Botón Principal: Gmail */}
          <a 
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-sky-500/10 text-sky-400 border border-sky-500/50 rounded-lg font-bold hover:bg-sky-500/20 transition-all group"
          >
            <Mail size={20} />
            <span>Contactar</span>
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* GitHub */}
          <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-700 rounded-lg hover:border-white text-slate-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>

          {/* LinkedIn */}
          <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-700 rounded-lg hover:border-blue-500 text-slate-400 hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>

          {/* WhatsApp (NUEVO) */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 border border-slate-700 rounded-lg hover:border-green-500 text-slate-400 hover:text-green-500 transition-colors"
            title="Enviar WhatsApp"
          >
            <MessageCircle size={24} />
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;