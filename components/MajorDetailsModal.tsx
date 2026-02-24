
import React from 'react';
import { Major } from '../types';

interface MajorDetailsModalProps {
  major: Major;
  onClose: () => void;
}

const MajorDetailsModal: React.FC<MajorDetailsModalProps> = ({ major, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative z-10 shadow-2xl animate-slideUp border border-slate-100 dark:border-slate-800">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-10">
            <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
              {major.category}
            </span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">{major.name}</h2>
            <p className="text-slate-500 text-lg leading-relaxed">{major.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Market Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 bg-green-50 dark:bg-green-900/10 rounded-3xl border border-green-100 dark:border-green-900/20">
                <span className="text-3xl">💰</span>
                <div>
                  <p className="text-[10px] font-black text-green-600 uppercase">متوسط الرواتب</p>
                  <p className="font-bold text-slate-800 dark:text-white">{major.salaryRange}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-900/20">
                <span className="text-3xl">📈</span>
                <div>
                  <p className="text-[10px] font-black text-indigo-600 uppercase">الطلب في السوق</p>
                  <p className="font-bold text-slate-800 dark:text-white">{major.marketDemand}</p>
                </div>
              </div>
            </div>

            {/* Difficulty & Years */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-100 dark:border-orange-900/20">
                <span className="text-3xl">⌛</span>
                <div>
                  <p className="text-[10px] font-black text-orange-600 uppercase">مدة الدراسة</p>
                  <p className="font-bold text-slate-800 dark:text-white">{major.years} سنوات</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/20">
                <span className="text-3xl">🧠</span>
                <div>
                  <p className="text-[10px] font-black text-purple-600 uppercase">درجة الصعوبة</p>
                  <p className="font-bold text-slate-800 dark:text-white">{major.difficulty}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <section className="mb-12">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm">📚</span>
              ماذا ستدرس؟ (المنهج)
            </h3>
            <div className="flex flex-wrap gap-3">
              {major.coreCourses.map((course, i) => (
                <span key={i} className="px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-sm font-bold text-slate-600 dark:text-slate-300">
                  {course}
                </span>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm">🗺️</span>
              خريطة الطريق للتميز
            </h3>
            <div className="space-y-4">
              {major.roadmap.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center rounded-full text-xs font-black shrink-0 mt-1">
                    {i+1}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Future Outlook */}
          <div className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] text-white">
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🚀</span> نظرة مستقبلية (2030)
            </h4>
            <p className="text-indigo-100 leading-relaxed font-medium">
              {major.futureOutlook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorDetailsModal;
