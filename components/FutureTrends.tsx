
import React from 'react';
import { FUTURE_TRENDS } from '../constants';

interface FutureTrendsProps {
  fullView?: boolean;
}

const FutureTrends: React.FC<FutureTrendsProps> = ({ fullView = false }) => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">تخصصات المستقبل 2030 🚀</h2>
          <p className="text-slate-500">لا تدرس لتخصص اليوم، ادرس لما سيحتاجه العالم غداً</p>
        </div>
        {!fullView && (
          <button className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">عرض كل الاتجاهات ←</button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FUTURE_TRENDS.map((trend, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-800 group hover:bg-indigo-600 transition-all duration-500 overflow-hidden relative">
            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 relative z-10">{trend.icon}</div>
            <h3 className="text-xl font-black mb-4 group-hover:text-white transition-colors relative z-10">{trend.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-100 transition-colors relative z-10 leading-relaxed">
              {trend.description}
            </p>
            {/* Hover decorative circle */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-[10] transition-transform duration-700"></div>
          </div>
        ))}
      </div>

      {fullView && (
        <div className="mt-20 space-y-12">
          <div className="bg-slate-100 dark:bg-slate-800/50 p-10 rounded-[3rem] border border-dashed border-slate-300 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span>⚠️</span> وظائف في طريقها للتلاشي
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['مدخل بيانات', 'محاسب تقليدي', 'صراف بنكي', 'وكيل سفر'].map(w => (
                <div key={w} className="bg-white dark:bg-slate-900 p-4 rounded-2xl text-center font-medium shadow-sm">{w}</div>
              ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm italic">* هذه الوظائف لن تختفي تماماً بل ستتحول لأشكال رقمية مدعومة بـ AI.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FutureTrends;
