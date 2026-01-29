
import React from 'react';
import { User, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-24 flex items-center bg-white/80 backdrop-blur-xl border-b border-teal-100 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="bg-teal-600 text-white p-3 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500">
            <Activity size={26} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-teal-950">
            pflege<span className="text-teal-600">kraft</span><span className="text-teal-200">.de</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-12 font-bold text-teal-900/40 uppercase text-[10px] tracking-[0.3em]">
          <a href="#" className="hover:text-teal-600 transition-colors">Jobs finden</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Arbeitgeber</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Akademie</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-teal-50 text-teal-700 px-7 py-3 rounded-full font-extrabold hover:bg-teal-600 hover:text-white transition-all flex items-center gap-2 border border-teal-100">
            <User size={18} />
            <span className="text-xs uppercase tracking-wider">Mein Bereich</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
