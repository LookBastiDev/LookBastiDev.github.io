import { skills } from "./data";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-sky-400">04.</span> Stack Tecnológico
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => {
          // Extraemos el icono para usarlo como componente
          const IconComponent = skill.icon;
          
          return (
            <div 
              key={index} 
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-900/30 rounded-lg text-sky-400">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 text-sm bg-slate-900 text-slate-300 rounded border border-slate-700/50 hover:text-sky-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;