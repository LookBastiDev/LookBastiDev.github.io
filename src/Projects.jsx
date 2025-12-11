import { projects } from "./data";
import { Folder } from "lucide-react";

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-sky-400">03.</span> Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <a 
            key={index} 
            href={proj.link} 
            target="_blank"
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-400 hover:-translate-y-2 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder size={40} className="text-sky-400" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400">{proj.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{proj.desc}</p>
            
            <div className="flex gap-2 flex-wrap mt-auto">
              {proj.tech.map(t => (
                <span key={t} className="text-xs font-mono text-sky-300 bg-sky-900/30 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;