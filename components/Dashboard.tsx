
import React, { useState } from 'react';
import { UserResult, PersonalityTrait, Major } from '../types';
import MajorDetailsModal from './MajorDetailsModal';

interface DashboardProps {
  result: UserResult;
  onRetake: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ result, onRetake }) => {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">أهلاً بك في رحلتك القادمة 🚀</h1>
          <p className="text-slate-500 mt-1">هذا هو تحليلك الذكي للمستقبل الدراسي</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onRetake} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/50">إعادة التقييم</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-white/20 rounded-lg text-xl">✨</span>
              <h2 className="text-2xl font-bold">تحليل خبيرنا الذكي</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-95 italic font-medium">"{result.analysisText}"</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold mb-6">تركيبة شخصيتك</h3>
          <div className="space-y-6">
            {(Object.entries(result.scores) as [PersonalityTrait, number][]).map(([trait, score]) => (
              <div key={trait}>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {trait === 'Analytical' ? 'التحليلي' : trait === 'Creative' ? 'الإبداعي' : trait === 'Social' ? 'الاجتماعي' : trait === 'Technical' ? 'التقني' : 'القيادي'}
                  </span>
                  <span className="text-indigo-600 font-bold">{score}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(79,70,229,0.5)]" style={{ width: `${Math.min(score, 100)}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
          <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl">🎯</span>
          أنسب المسارات التعليمية لك
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {result.recommendedMajors.map(major => (
            <div 
              key={major.id} 
              onClick={() => setSelectedMajor(major)}
              className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-md border border-slate-100 dark:border-slate-800 flex flex-col hover:shadow-2xl transition-all group overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between mb-6">
                  <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-wider">{major.category}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600 transition-colors">{major.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">المواد الأساسية</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {major.coreCourses.slice(0, 4).map(c => (
                        <span key={c} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 rounded-lg">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                   <span className="text-xs font-black text-indigo-600">اضغط للتفاصيل ←</span>
                   <div className="flex flex-col text-right">
                      <span className="text-[10px] text-slate-400">سوق العمل</span>
                      <span className="text-xs font-black text-indigo-600">{major.marketDemand}</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Major Details */}
      {selectedMajor && (
        <MajorDetailsModal 
          major={selectedMajor} 
          onClose={() => setSelectedMajor(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
