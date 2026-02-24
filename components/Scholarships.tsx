
import React, { useState } from 'react';
import { SCHOLARSHIPS } from '../constants';

const Scholarships: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'داخلي' | 'خارجي'>('all');

  const filtered = filter === 'all' ? SCHOLARSHIPS : SCHOLARSHIPS.filter(s => s.category === filter);

  return (
    <div className="py-12 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">مركز المنح الدراسية العالمي 🌍</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">طموحك لا يحتاج لتمويل كبير، اكتشف المنح المتاحة داخلياً ودولياً وكيفية التقديم عليها.</p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {['all', 'داخلي', 'خارجي'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${
              filter === f 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 scale-105' 
                : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50'
            }`}
          >
            {f === 'all' ? 'جميع المنح' : f === 'داخلي' ? 'منح داخل مصر' : 'منح خارجية'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl text-xs font-black uppercase">
                  تغطية {s.coverage}
                </span>
                <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-xl text-xs font-black uppercase">
                  {s.category}
                </span>
              </div>
              <span className="text-slate-400 text-xs font-bold">⌛ الموعد: {s.deadline}</span>
            </div>
            
            <h3 className="text-3xl font-black mb-4 group-hover:text-indigo-600 transition-colors">{s.title}</h3>
            <p className="text-slate-400 font-bold mb-10 italic">بواسطة: {s.provider}</p>

            <div className="space-y-8 mb-10">
               <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <h4 className="text-xs font-black text-indigo-600 uppercase mb-3 tracking-widest">من يستطيع التقديم؟ (الأهلية)</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.eligibility}</p>
               </div>
               <div className="p-6 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl">
                  <h4 className="text-xs font-black text-indigo-600 uppercase mb-3 tracking-widest">خطوات التقديم</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.process}</p>
               </div>
            </div>

            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all hover:-translate-y-1">
              التقديم الآن عبر الموقع الرسمي
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
