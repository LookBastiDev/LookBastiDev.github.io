import { education, certifications } from "./data";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 mb-20">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna Izquierda: Educación Formal */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-sky-400">05.</span> Educación
          </h2>
          
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-slate-700 ml-3">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400" />
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-sky-400 font-mono text-sm mb-2">{edu.institution} | {edu.date}</p>
              <p className="text-slate-400 text-sm">{edu.desc}</p>
            </div>
          ))}
        </div>

        {/* Columna Derecha: Certificaciones */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-sky-400" size={32} /> Certificaciones
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="min-w-[8px] h-[8px] rounded-full bg-sky-500/50" />
                <span className="text-slate-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Education;