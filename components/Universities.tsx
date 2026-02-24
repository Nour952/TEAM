
import React, { useState } from 'react';
import { UNIVERSITIES, MAJORS } from '../constants';
import { University, Major } from '../types';
import MajorDetailsModal from './MajorDetailsModal';

const Universities: React.FC = () => {
  const [selectedUni, setSelectedUni] = useState<University | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('الكل');

  const filteredUnis = UNIVERSITIES.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         u.availableMajors.some(m => m.includes(searchTerm));
    const matchesType = filterType === 'الكل' || u.type === filterType;
    return matchesSearch && matchesType;
  });

  // مساعد للحصول على تفاصيل المنهج الدراسي لتخصص معين
  const getMajorCurriculum = (majorName: string) => {
    const major = MAJORS.find(m => m.name === majorName);
    return major?.coreCourses || ['سيتم تحديث المنهج قريباً'];
  };

  const handleMajorClick = (majorName: string) => {
    const majorObj = MAJORS.find(m => m.name === majorName);
    if (majorObj) {
      setSelectedMajor(majorObj);
    }
  };

  return (
    <div className="py-12 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">دليل الجامعات الذكي 🏫</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">استكشف التخصصات، المنح، والمناهج الدراسية لأكثر من {UNIVERSITIES.length} جامعة في مصر.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input 
            type="text"
            placeholder="ابحث باسم الجامعة أو التخصص (مثلاً: طب، هندسة)..."
            className="w-full p-4 pr-12 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-30">🔍</span>
        </div>
        <select 
          className="p-4 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 font-bold outline-none cursor-pointer"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option>الكل</option>
          <option>حكومية</option>
          <option>خاصة</option>
          <option>أهلية</option>
          <option>دولية</option>
        </select>
      </div>

      {filteredUnis.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🏜️</div>
          <h3 className="text-2xl font-bold text-slate-400">عذراً، لم نجد نتائج تطابق بحثك</h3>
          <button onClick={() => {setSearchTerm(''); setFilterType('الكل');}} className="mt-4 text-indigo-600 font-bold">إعادة تعيين البحث</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredUnis.map((u) => (
            <div key={u.id} className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col md:flex-row transition-all hover:shadow-2xl">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img src={u.image} alt={u.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-bold">{u.type}</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-2">{u.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-4">📍 {u.location}</p>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{u.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {u.availableMajors.slice(0, 3).map(m => (
                    <span key={m} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg text-[10px] font-bold">
                      {m}
                    </span>
                  ))}
                  {u.availableMajors.length > 3 && <span className="text-[10px] font-bold text-slate-400 pt-1">+{u.availableMajors.length - 3} المزيد</span>}
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedUni(u)}
                    className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                  >
                    استكشف التخصصات والكورسات
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed University Modal */}
      {selectedUni && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedUni(null)}></div>
          <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative z-10 shadow-2xl animate-slideUp border border-white/10">
             <button 
                onClick={() => setSelectedUni(null)}
                className="absolute top-6 left-6 p-3 bg-white/20 hover:bg-red-500 text-white rounded-full transition-all z-20 backdrop-blur-md"
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>

             <div className="h-64 md:h-96 relative">
                <img src={selectedUni.image} className="w-full h-full object-cover" alt={selectedUni.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 right-8 text-right">
                   <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{selectedUni.name}</h2>
                   <p className="text-white/70 font-bold">📍 {selectedUni.location} • {selectedUni.ranking}</p>
                </div>
             </div>
             
             <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-right">
                   <div className="lg:col-span-2 space-y-12">
                      <section>
                         <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl">📘</span>
                            التخصصات (اضغط للتفاصيل)
                         </h3>
                         <div className="grid grid-cols-1 gap-4">
                            {selectedUni.availableMajors.map((m, idx) => (
                               <button 
                                  key={idx} 
                                  onClick={() => handleMajorClick(m)}
                                  className="w-full text-right p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex justify-between items-center"
                               >
                                  <div>
                                     <h4 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600">{m}</h4>
                                     <p className="text-xs text-slate-400 mt-1">انقر لمعرفة المنهج والرواتب والوظائف</p>
                                  </div>
                                  <span className="text-indigo-500 font-black">←</span>
                               </button>
                            ))}
                         </div>
                      </section>
                   </div>

                   <div className="space-y-8">
                      <section className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800">
                         <h3 className="text-xl font-black mb-6 text-indigo-600 dark:text-indigo-400">المنح المتاحة</h3>
                         {selectedUni.scholarshipInfo ? (
                           <div className="space-y-6">
                              <div>
                                 <p className="text-[10px] font-black text-slate-400 uppercase mb-1">لمن هي؟</p>
                                 <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{selectedUni.scholarshipInfo.forWho}</p>
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-slate-400 uppercase mb-1">المميزات</p>
                                 <p className="text-sm font-bold text-green-600">{selectedUni.scholarshipInfo.benefits}</p>
                              </div>
                              <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">قدم الآن</button>
                           </div>
                         ) : (
                           <p className="text-slate-400 italic text-sm text-center">لا توجد منح نشطة</p>
                         )}
                      </section>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Shared Major Details Modal */}
      {selectedMajor && (
        <MajorDetailsModal 
          major={selectedMajor} 
          onClose={() => setSelectedMajor(null)} 
        />
      )}
    </div>
  );
};

export default Universities;
