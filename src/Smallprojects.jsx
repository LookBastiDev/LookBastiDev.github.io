import { smallProjects } from "./data";
import { FolderGit2, ExternalLink } from "lucide-react";

const SmallProjects = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <h3 className="text-2xl font-bold mb-6 text-slate-300 flex items-center gap-2">
        <FolderGit2 className="text-sky-400" /> Más Proyectos
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {smallProjects.map((proj, index) => (
          <a 
            key={index} 
            href={proj.link}
            target="_blank"
            className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-400/50 transition-all group"
          >
            <div>
              <h4 className="font-bold text-slate-200 group-hover:text-sky-400 transition-colors">
                {proj.title}
              </h4>
              <p className="text-sm text-slate-500 mb-2">{proj.description}</p>
              <div className="flex gap-2">
                {proj.tech.map(t => (
                  <span key={t} className="text-xs text-slate-400 font-mono">{t}</span>
                ))}
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-600 group-hover:text-sky-400" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SmallProjects;