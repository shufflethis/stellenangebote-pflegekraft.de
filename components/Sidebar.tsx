
import React from 'react';
import { Filter, Hospital, ShieldCheck, Microscope } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4 px-2">
        <Filter size={24} className="text-teal-500" />
        <h3 className="font-black text-teal-950 text-2xl tracking-tighter">Präzise Suche</h3>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-teal-50">
        <section className="mb-12">
          <h4 className="font-black text-teal-900/20 text-[10px] uppercase mb-8 tracking-[0.4em] flex items-center gap-3">
            <Hospital size={16} className="text-teal-500" /> Fachgebiet
          </h4>
          <div className="space-y-5">
            {[
              'Innere Medizin', 
              'Intensivpflege', 
              'Pädiatrie', 
              'Chirurgie', 
              'Anästhesie'
            ].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-teal-100 text-teal-600 focus:ring-teal-500/50 cursor-pointer appearance-none checked:bg-teal-600 border-2 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-has-[:checked]:opacity-100">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-teal-900/60 font-bold text-sm group-hover:text-teal-600 transition-colors uppercase tracking-wide">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h4 className="font-black text-teal-900/20 text-[10px] uppercase mb-8 tracking-[0.4em] flex items-center gap-3">
            <ShieldCheck size={16} className="text-teal-500" /> Arbeitsmodell
          </h4>
          <div className="space-y-5">
            {[
              'Unbefristet', 
              'Befristet', 
              'Springerpool', 
              'Minijob'
            ].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="radio" name="model" className="w-6 h-6 border-teal-100 text-teal-600 focus:ring-teal-500/50 cursor-pointer appearance-none border-2 rounded-full checked:border-teal-600 checked:bg-teal-50 transition-all" />
                <span className="text-teal-900/60 font-bold text-sm group-hover:text-teal-600 transition-colors uppercase tracking-wide">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-teal-50 p-8 rounded-[2rem] border border-teal-100 relative overflow-hidden group">
          <Microscope className="absolute -bottom-4 -right-4 text-teal-200/50 w-24 h-24 group-hover:scale-110 transition-transform" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">
              <span>Insights</span>
            </div>
            <p className="text-teal-900/50 text-[11px] leading-relaxed font-semibold italic">
              <b>Gehalts-Check:</b> Fachkrankenpfleger verdienen im Durchschnitt 18% mehr als der Basissatz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
