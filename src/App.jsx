import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";        
import Education from "./Education";  
import SmallProjects from "./Smallprojects";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-sky-400/30 font-sans">
      
      {/* Fondo decorativo animado */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-900/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
      </div>
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <SmallProjects />
        <Skills />  
        <Education />  
        
        <footer className="text-center py-8 text-slate-600 text-sm font-mono border-t border-slate-800/50 mt-10">
          <p>© 2025 Bastián Cerda. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;