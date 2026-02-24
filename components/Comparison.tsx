
import React, { useState } from 'react';
import { MAJORS } from '../constants';
import { Major } from '../types';

const Comparison: React.FC = () => {
  const [selectedMajors, setSelectedMajors] = useState<Major[]>([MAJORS[0], MAJORS[1]]);

  const updateSelection = (index: number, majorId: string) => {
    const major = MAJORS.find(m => m.id === majorId);
    if (major) {
      const newList = [...selectedMajors];
      newList[index] = major;
      setSelectedMajors(newList);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">أيهما تختار لمستقبلك؟ ⚖️</h2>
        <p className="text-slate-500 max-w-xl mx-auto">قارن بين التفاصيل الأكاديمية والمالية والوظيفية لتتخذ قراراً مبنياً على أرقام وحقائق.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {/* Attribute Labels */}
        <div className="hidden md:flex flex-col pt-32 space-y-16 text-slate-500 font-black text-sm pr-4 uppercase tracking-widest">
          <div className="h-14 flex items-center">مدة الدراسة</div>
          <div className="h-14 flex items-center border-t border-slate-100 dark:border-slate-800 pt-4">الصعوبة الأكاديمية</div>
          <div className="h-14 flex items-center border-t border-slate-100 dark:border-slate-800 pt-4 text-indigo-600">فرص العمل</div>
          <div className="h-24 flex items-center border-t border-slate-100 dark:border-slate-800 pt-4">الوظائف المتاحة</div>
          <div className="h-24 flex items-center border-t border-slate-100 dark:border-slate-800 pt-4">أفضل الجامعات</div>
          <div className="h-14 flex items-center border-t border-slate-100 dark:border-slate-800 pt-4">الدخل المتوقع</div>
        </div>

        {/* Major Columns */}
        {[0, 1].map((idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-2">
            <div className="mb-10">
              <label className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-widest">اختر التخصص</label>
              <select 
                value={selectedMajors[idx].id}
                onChange={(e) => updateSelection(idx, e.target.value)}
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-black text-indigo-600 dark:text-indigo-400 focus:ring-4 focus:ring-indigo-500/10 transition-all cursor-pointer"
              >
                {MAJORS.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-16">
              <div className="h-14 flex flex-col justify-center">
                <span className="md:hidden text-xs text-slate-400 mb-1">مدة الدراسة</span>
                <span className="text-2xl font-black text-slate-800 dark:text-white">{selectedMajors[idx].years} سنوات</span>
              </div>
              
              <div className="h-14 flex flex-col justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="md:hidden text-xs text-slate-400 mb-1">صعوبة الدراسة</span>
                <span className={`px-4 py-1.5 rounded-xl text-xs font-black inline-block w-fit ${
                  selectedMajors[idx].difficulty === 'عالية جداً' ? 'bg-red-50 text-red-600' :
                  selectedMajors[idx].difficulty === 'عالية' ? 'bg-orange-50 text-orange-600' :
                  'bg-green-50 text-green-600'
                }`}>
                  {selectedMajors[idx].difficulty}
                </span>
              </div>

              <div className="h-14 flex flex-col justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="md:hidden text-xs text-slate-400 mb-1">الطلب في السوق</span>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">{selectedMajors[idx].marketDemand}</span>
                </div>
              </div>

              <div className="h-24 flex flex-col justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="md:hidden text-xs text-slate-400 mb-1">الوظائف المتاحة</span>
                <div className="flex flex-wrap gap-1">
                  {selectedMajors[idx].jobRoles.slice(0, 3).map(role => (
                    <span key={role} className="text-[10px] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-lg font-bold">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-24 flex flex-col justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="md:hidden text-xs text-slate-400 mb-1">أبرز الجامعات</span>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {selectedMajors[idx].universities.public[0]}، {selectedMajors[idx].universities.private[0]}...
                </p>
              </div>

              <div className="h-14 flex flex-col justify-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="md:hidden text-xs text-slate-400 mb-1">الدخل المتوقع</span>
                <span className="text-sm font-black text-green-600 dark:text-green-400">{selectedMajors[idx].salaryRange}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
