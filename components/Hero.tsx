
import React from 'react';
import { Search, MapPin, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-40 px-4 relative overflow-hidden bg-white">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-teal-100/50 text-teal-800 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] mb-12 border border-teal-100">
          <Zap size={16} className="text-teal-500" />
          Finde deinen Platz im Team
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-teal-950 mb-10 leading-[0.9] tracking-tighter">
          Echte Pflege. <br/>
          <span className="text-teal-600 font-serif-italic">Wahre Wertschätzung.</span>
        </h1>
        <p className="text-xl text-teal-900/40 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
          Deutschlands modernstes Portal für Pflegeberufe. Wir bringen dich zu Arbeitgebern, die nicht nur Personal suchen, sondern Teammitglieder gewinnen wollen.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(13,148,136,0.15)] flex flex-col md:flex-row items-center gap-4 border border-teal-50">
          <div className="flex-grow flex items-center px-8 py-5 w-full bg-teal-50/20 rounded-[2rem] border border-transparent focus-within:border-teal-200 transition-colors">
            <Search className="text-teal-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Berufsbild oder Qualifikation..." 
              className="w-full bg-transparent focus:outline-none text-teal-950 font-bold placeholder-teal-200/60"
            />
          </div>
          <div className="flex-grow flex items-center px-8 py-5 w-full bg-teal-50/20 rounded-[2rem] border border-transparent focus-within:border-teal-200 transition-colors">
            <MapPin className="text-teal-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Stadt oder PLZ" 
              className="w-full bg-transparent focus:outline-none text-teal-950 font-bold placeholder-teal-200/60"
            />
          </div>
          <button className="w-full md:w-auto btn-vibrant text-white font-black px-14 py-6 rounded-[2rem] transition-all uppercase tracking-[0.2em] text-sm">
            Finden
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
