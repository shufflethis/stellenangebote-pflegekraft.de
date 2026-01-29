
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import JobCard from './components/JobCard';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { Job } from './types';
import { Activity, Star, HeartPulse } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'nurs1',
    title: 'Gesundheits- und Krankenpfleger (m/w/d)',
    company: 'Zentralklinikum Nord-West',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '3.900€ - 4.800€',
    description: 'Einsatz auf der kardiologischen Station. Wir bieten ein hochmodernes Arbeitsumfeld, Mitgestaltung des Dienstplans und ein attraktives Fortbildungsprogramm.',
    postedAt: 'Vor 1 Std.',
    logo: 'https://picsum.photos/seed/clinic1/120/120'
  },
  {
    id: 'nurs2',
    title: 'Fachkrankenpfleger für Intensivpflege',
    company: 'St. Marien Hospital',
    location: 'Köln',
    type: 'Vollzeit',
    salary: '4.500€ - 5.500€',
    description: 'Verstärken Sie unser Intensiv-Team. Wir arbeiten im 3-Schicht-System mit festen Besetzungsschlüsseln und übertariflicher Zulage für Fachweiterbildung.',
    postedAt: 'Vor 4 Std.',
    logo: 'https://picsum.photos/seed/hosp2/120/120'
  },
  {
    id: 'nurs3',
    title: 'Pflegekraft (m/w/d) für Dialyse',
    company: 'Dialysezentrum Mitte',
    location: 'Berlin',
    type: 'Teilzeit',
    salary: '2.800€ - 3.400€',
    description: 'Betreuung unserer Patienten während der Dialyse. Geregelte Arbeitszeiten (keine Nachtdienste) und ein familiäres Team erwarten Sie.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/dialysis/120/120'
  }
];

const App: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-10 bg-teal-900/5 p-8 rounded-[2.5rem] border border-teal-100">
                <div className="flex items-center gap-6">
                  <div className="bg-teal-600 p-4 rounded-2xl text-white shadow-xl rotate-3">
                    <HeartPulse size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-teal-950 tracking-tight">
                      Top-Jobs für <span className="text-teal-600">Pflegeprofis</span>
                    </h2>
                    <p className="text-teal-700/60 font-semibold uppercase text-xs tracking-[0.2em] mt-1">Status: Täglich aktualisiert</p>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-52 bg-white/50 animate-pulse rounded-[2rem] border border-teal-50"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-8">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Call to Action Card */}
              <div className="mt-24 bg-teal-900 rounded-[3rem] p-16 text-white relative overflow-hidden shadow-2xl group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="max-w-xl text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <Star size={20} className="text-teal-400 fill-teal-400" />
                      <Star size={20} className="text-teal-400 fill-teal-400" />
                      <Star size={20} className="text-teal-400 fill-teal-400" />
                    </div>
                    <h3 className="text-4xl font-extrabold mb-6 leading-tight">Pflege ist mehr als ein Job. <br/><span className="text-teal-400 font-serif-italic">Es ist Leidenschaft.</span></h3>
                    <p className="text-teal-100/70 text-lg font-medium leading-relaxed mb-8">
                      Wir verbinden dich mit Kliniken und Einrichtungen, die deine Arbeit wertschätzen und fördern.
                    </p>
                  </div>
                  <button className="bg-teal-400 hover:bg-teal-300 text-teal-950 font-black px-14 py-6 rounded-full transition-all shadow-2xl uppercase tracking-widest text-sm whitespace-nowrap">
                    Lebenslauf hochladen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-teal-950 text-teal-100/40 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-white mb-8">
              pflege<span className="text-teal-400">kraft</span>.de
            </div>
            <p className="max-w-sm leading-relaxed text-teal-100/60 font-medium">
              Das Fachportal für die moderne Gesundheits- und Krankenpflege. Wir setzen Standards in der Jobsuche.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Kategorien</h4>
            <a href="#" className="hover:text-teal-400 transition-colors">Klinik & Hospital</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Spezialpflege</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Ambulante Dienste</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Plattform</h4>
            <a href="#" className="hover:text-teal-400 transition-colors">Über uns</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Datenschutz</a>
            <p className="mt-8 text-[10px] text-teal-800">© 2024 stellenangebote-pflegekraft.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
