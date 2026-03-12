// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Activity, Star, HeartPulse, MapPin } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Pflegefachkraft (m/w/d)',
    company: 'DRK-Region Hannover e.V.',
    location: 'Hemmingen, Han',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (m/w/d)',
    postedAt: '2026-03-06'
  },
  {
    id: '2',
    title: 'Pflegekraft (m/w/d)',
    company: 'Alten- und Pflegeheim Schierholz GmbH',
    location: 'Treia bei Schleswig',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '3',
    title: 'Pflegekraft (m/w/d)',
    company: 'AAQUILA Personalservice GmbH',
    location: 'Freyung, Niederbayern',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '4',
    title: 'Pflegekraft (w/m/d)',
    company: 'SAH Leipzig gGmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Pflegekraft (w/m/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '5',
    title: 'Pflegekraft (m/w/d)',
    company: 'Johanniter-Unfall-Hilfe e.V. Landesverband Sachsen-Anhalt-Thüringen',
    location: 'Bad Blankenburg',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '6',
    title: 'Pflegekraft (m/w/d)',
    company: 'Johanniter-Unfall-Hilfe e.V. Landesverband Sachsen-Anhalt-Thüringen',
    location: 'Königsee',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '7',
    title: 'Pflegekraft (m/w/d)',
    company: 'Diakonisches Werk Schweinfurt e.V. Verwaltung',
    location: 'Maßbach',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-24'
  },
  {
    id: '8',
    title: 'Pflegekraft (m/w/d)',
    company: 'Actief Personalmanagement GmbH Gera',
    location: 'Triptis',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-24'
  },
  {
    id: '9',
    title: 'Pflegekraft (m/w/d)',
    company: 'AWO Soziale Dienste Vogtland gemeinnützige GmbH',
    location: 'Plauen, Vogtland',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '10',
    title: 'Pflegekraft (w/m/d)',
    company: 'AWO Bezirksverband BB Süd e.V.',
    location: 'Calau',
    type: 'Vollzeit',
    description: 'Pflegekraft (w/m/d)',
    postedAt: '2026-02-10'
  },
  {
    id: '11',
    title: 'Pflegekraft (m/w/d)',
    company: 'PERSO PLANKONTOR Nord GmbH',
    location: 'Edewecht',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-06'
  },
  {
    id: '12',
    title: 'Pflegekraft (m/w/d)',
    company: 'Pflegestation Pollex GmbH Hauskrankenpflege',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-05'
  },
  {
    id: '13',
    title: 'Pflegekraft (m/w/d)',
    company: 'Diaverum Deutschland GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-02-03'
  },
  {
    id: '14',
    title: 'Pflegekraft (m/w/d)',
    company: 'Diako Thüringen gem. GmbH',
    location: 'Jena',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-01-29'
  },
  {
    id: '15',
    title: 'Pflegekraft (m/w/d)',
    company: 'Johanniter-Unfall-Hilfe e.V. Landesverband Sachsen-Anhalt-Thüringen',
    location: 'Heldburg',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2026-01-28'
  },
  {
    id: '16',
    title: 'Pflegekraft (m/w/d)',
    company: 'Johanniter-Unfall-Hilfe e.V. Landesverband NRW Landesgeschäftsstelle',
    location: 'Dortmund',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-12-19'
  },
  {
    id: '17',
    title: 'Pflegekraft (m/w/d)',
    company: 'AWO pflegeplus gGmbH',
    location: 'Butzbach',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-12-17'
  },
  {
    id: '18',
    title: 'Pflegekraft (m/w/d)',
    company: 'LH Betreuungs- u. Pflege GmbH',
    location: 'Kurort Oybin',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-11-27'
  },
  {
    id: '19',
    title: 'Pflegekraft (m/w/d)',
    company: 'Johanniter-Unfall-Hilfe e.V. Landesverband Sachsen-Anhalt-Thüringen',
    location: 'Hildburghausen',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-11-26'
  },
  {
    id: '20',
    title: 'Pflegekraft (m/w/d)',
    company: 'Vivantes Netzwerk für Gesundheit GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-11-25'
  },
  {
    id: '21',
    title: 'Pflegekraft (m/w/d)',
    company: 'DRK Kreisverband Parchim e.V.',
    location: 'Lübz',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-11-20'
  },
  {
    id: '22',
    title: 'Pflegekraft (m/w/d)',
    company: 'Diako Thüringen gem. GmbH',
    location: 'Kahla, Thüringen',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-11-17'
  },
  {
    id: '23',
    title: 'Pflegekraft (m/w/d)',
    company: 'K&S Dr. Krantz Sozialbau und Betreuung SE & Co. KG SR Marktredwitz',
    location: 'Marktredwitz',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-10-02'
  },
  {
    id: '24',
    title: 'Pflegekraft (m/w/d)',
    company: 'Diako Thüringen gem. GmbH',
    location: 'Bad Salzungen',
    type: 'Vollzeit',
    description: 'Pflegekraft (m/w/d)',
    postedAt: '2025-08-28'
  },
  {
    id: '25',
    title: 'PFLEGEKRAFT (M/W/D)',
    company: 'Evang. Diakonissenhaus Berlin Teltow Lehnin Stiftung bürgerlichen Rechts',
    location: 'Teltow',
    type: 'Vollzeit',
    description: 'PFLEGEKRAFT (M/W/D)',
    postedAt: '2025-07-15'
  }
];

const Home: React.FC = () => {
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
            <aside className="w-full lg:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
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
        {/* German Cities Geo SEO Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-teal-950 tracking-tight mb-4 text-center">
            Pflegekraft-Jobs in <span className="text-teal-600">ganz Deutschland</span>
          </h2>
          <p className="text-teal-700/60 text-center mb-12 max-w-2xl mx-auto">
            Finden Sie Stellenangebote fuer Pflegekraefte in Ihrer Region. Wir bieten Jobangebote in allen grossen deutschen Staedten.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { city: 'Berlin', count: 87 },
              { city: 'Hamburg', count: 64 },
              { city: 'Muenchen', count: 72 },
              { city: 'Koeln', count: 53 },
              { city: 'Frankfurt am Main', count: 48 },
              { city: 'Stuttgart', count: 45 },
              { city: 'Duesseldorf', count: 39 },
              { city: 'Leipzig', count: 34 },
              { city: 'Dortmund', count: 31 },
              { city: 'Essen', count: 28 },
              { city: 'Bremen', count: 26 },
              { city: 'Dresden', count: 30 },
              { city: 'Hannover', count: 33 },
              { city: 'Nuernberg', count: 27 },
              { city: 'Duisburg', count: 22 },
              { city: 'Bochum', count: 19 },
              { city: 'Wuppertal', count: 17 },
              { city: 'Bielefeld', count: 20 },
              { city: 'Bonn', count: 23 },
              { city: 'Mannheim', count: 21 },
              { city: 'Karlsruhe', count: 18 },
              { city: 'Augsburg', count: 16 },
              { city: 'Wiesbaden', count: 15 },
              { city: 'Muenster', count: 19 },
              { city: 'Freiburg', count: 14 },
              { city: 'Aachen', count: 17 },
              { city: 'Braunschweig', count: 13 },
              { city: 'Kiel', count: 15 },
              { city: 'Magdeburg', count: 12 },
              { city: 'Rostock', count: 11 },
            ].map((item) => (
              <div key={item.city} className="bg-white border border-teal-100 rounded-2xl p-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-teal-500 flex-shrink-0" />
                  <span className="font-bold text-teal-950 text-sm group-hover:text-teal-600 transition-colors truncate">{item.city}</span>
                </div>
                <span className="text-teal-500/60 text-xs font-semibold">{item.count}+ Stellen</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-teal-950 tracking-tight mb-4 text-center">
            Haeufig gestellte <span className="text-teal-600">Fragen</span>
          </h2>
          <p className="text-teal-700/60 text-center mb-12 max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen rund um die Jobsuche als Pflegekraft.
          </p>
          <div className="space-y-6">
            {[
              {
                q: 'Wie finde ich passende Pflegekraft-Stellenangebote?',
                a: 'Nutzen Sie unsere Suchfunktion oben auf der Seite. Sie koennen nach Berufsbezeichnung, Ort oder Postleitzahl filtern. Alle Stellenangebote werden taeglich aktualisiert und stammen direkt von Arbeitgebern und Einrichtungen in ganz Deutschland.'
              },
              {
                q: 'Ist die Nutzung von stellenangebote-pflegekraft.de kostenlos?',
                a: 'Ja, fuer Bewerber ist die Nutzung unseres Portals vollstaendig kostenlos. Sie koennen sich auf Stellen bewerben und Ihren Lebenslauf hochladen, ohne dass Kosten entstehen.'
              },
              {
                q: 'Welche Qualifikationen brauche ich als Pflegekraft?',
                a: 'Die Anforderungen variieren je nach Stelle. Fuer eine examinierte Pflegefachkraft benoetigen Sie in der Regel eine abgeschlossene dreijaerige Ausbildung in der Gesundheits- und Krankenpflege, Altenpflege oder Kinderkrankenpflege. Fuer Pflegehilfskraefte gibt es kuerzere Ausbildungswege.'
              },
              {
                q: 'Wie viel verdient eine Pflegekraft in Deutschland?',
                a: 'Das Gehalt haengt von Qualifikation, Region und Arbeitgeber ab. Examinierte Pflegefachkraefte verdienen durchschnittlich zwischen 36.000 und 48.000 Euro brutto jaehrlich. Fachkrankenpfleger mit Spezialisierung (z.B. Intensivpflege) koennen deutlich mehr verdienen. Seit 2022 gelten Mindestlohn-Regelungen speziell fuer die Pflegebranche.'
              },
              {
                q: 'Kann ich mich auch initiativ bewerben?',
                a: 'Ja, ueber unsere Kontaktseite koennen Sie eine Initiativbewerbung einreichen. Geben Sie Ihren gewuenschten Beruf, Ihre bevorzugte Region und Ihre Erfahrung an. Wir leiten Ihre Bewerbung an passende Arbeitgeber weiter.'
              },
              {
                q: 'Welche Karrieremoeglichkeiten gibt es in der Pflege?',
                a: 'Die Pflegebranche bietet vielfaeltige Karrierewege: Weiterbildung zur Fachkraft fuer Intensivpflege, Palliativpflege oder Geriatrie, Studium im Bereich Pflegemanagement oder Pflegewissenschaft, Aufstieg zur Stationsleitung oder Pflegedienstleitung, sowie Wechsel in die ambulante Pflege oder Selbststaendigkeit.'
              },
            ].map((item, i) => (
              <details key={i} className="bg-white border border-teal-100 rounded-2xl overflow-hidden group">
                <summary className="px-8 py-6 cursor-pointer font-bold text-teal-950 hover:text-teal-600 transition-colors list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-teal-400 text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-8 pb-6 text-teal-700/70 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Career Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-[3rem] border border-teal-100 p-12 md:p-16">
            <h2 className="text-3xl font-extrabold text-teal-950 tracking-tight mb-4 text-center">
              Karriere in der <span className="text-teal-600">Pflege</span>
            </h2>
            <p className="text-teal-700/60 text-center mb-12 max-w-2xl mx-auto">
              Die Pflegebranche bietet sichere Arbeitsplaetze mit Zukunft. Hier erfahren Sie mehr ueber Ihre Moeglichkeiten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-sm">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Activity size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-950 text-lg mb-3">Ausbildung & Einstieg</h3>
                <p className="text-teal-700/60 text-sm leading-relaxed">
                  Die generalistische Pflegeausbildung dauert drei Jahre und vereint seit 2020 die Alten-, Kranken- und Kinderkrankenpflege. Auch Quereinstieg mit Pflegebasiskurs ist moeglich.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-sm">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Star size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-950 text-lg mb-3">Spezialisierung</h3>
                <p className="text-teal-700/60 text-sm leading-relaxed">
                  Nach der Ausbildung stehen zahlreiche Fachweiterbildungen offen: Intensivpflege, Anesthesie, OP-Pflege, Palliativpflege, Psychiatrie oder Wundmanagement. Spezialisierung bringt hoehere Gehaelter und spannendere Aufgaben.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-sm">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <HeartPulse size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-teal-950 text-lg mb-3">Zukunftsaussichten</h3>
                <p className="text-teal-700/60 text-sm leading-relaxed">
                  Bis 2030 werden in Deutschland ueber 500.000 zusaetzliche Pflegekraefte benoetigt. Die Branche bietet maximale Jobsicherheit, steigende Gehaelter und vielfaeltige Arbeitszeitmodelle.
                </p>
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
            <Link to="/datenschutz" className="hover:text-teal-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="mt-8 text-[10px] text-teal-800">© 2024 stellenangebote-pflegekraft.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
