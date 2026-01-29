
import React from 'react';
import { MapPin, Clock, ChevronRight, Zap, CheckCircle } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="vibrant-card p-10 flex flex-col md:flex-row items-center gap-10 cursor-pointer group">
      <div className="w-28 h-28 rounded-[2.5rem] bg-teal-50 flex-shrink-0 flex items-center justify-center border border-teal-100 overflow-hidden shadow-inner group-hover:rotate-3 transition-transform">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div>
            <h3 className="text-2xl font-black text-teal-950 group-hover:text-teal-600 transition-colors mb-2 tracking-tight">
              {job.title}
            </h3>
            <div className="inline-flex items-center gap-2 text-teal-500 font-bold text-sm bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              <Zap size={14} fill="currentColor" /> {job.company}
            </div>
          </div>
          <div className="bg-teal-900 text-teal-400 font-black text-xl px-7 py-3 rounded-3xl shadow-lg border border-teal-800">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm font-bold text-teal-900/30 mb-8 uppercase tracking-[0.15em]">
          <span className="flex items-center gap-2">
            <MapPin size={20} className="text-teal-500" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={20} className="text-teal-500" />
            {job.type}
          </span>
          <span className="bg-teal-950/5 text-teal-400 px-3 py-1 rounded-md text-[10px] lowercase font-medium">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {['Bonuszahlung', 'Job-Ticket', 'Fortbildung'].map(tag => (
            <span key={tag} className="bg-white text-teal-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-teal-100 group-hover:border-teal-300 transition-colors">
              <CheckCircle size={14} className="text-teal-500" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-200 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all shadow-inner group-hover:shadow-teal-900/20">
          <ChevronRight size={36} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
