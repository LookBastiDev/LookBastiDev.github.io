import { experience } from "./data";

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-sky-400">02.</span> Experiencia
      </h2>

      <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8">
            {/* El puntito en la línea de tiempo */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400" />
            
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            <p className="text-sky-400 font-mono text-sm mb-2">{job.company} | {job.date}</p>
            <p className="text-slate-400 max-w-xl">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;