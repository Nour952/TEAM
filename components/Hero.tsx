
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="space-y-32">
      {/* Main Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 py-10 lg:py-24 animate-fadeIn">
        <div className="flex-1 space-y-10 text-center lg:text-right">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-black border border-indigo-100 dark:border-indigo-800 animate-pulse">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            مستشارك الذكي للمستقبل متاح الآن 🤖
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            لا تختار كليتك <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              اكتشف شغفك
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
            نحن نستخدم الذكاء الاصطناعي لربط مهاراتك الشخصية بالوظائف الأكثر طلباً في عام 2030. ابدأ رحلتك الآن.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button 
              onClick={onStart}
              className="group relative px-10 py-6 bg-indigo-600 text-white text-xl font-black rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">ابدأ الاختبار الذكي</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-10 py-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-xl font-black rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
              تصفح الجامعات 🏫
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Student" />
                   </div>
                ))}
             </div>
             <p className="text-sm font-bold text-slate-400">
                انضم لـ <span className="text-indigo-600">+10,000</span> طالب وجدوا طريقهم
             </p>
          </div>
        </div>
        
        <div className="flex-1 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[4rem] blur-3xl group-hover:blur-[100px] transition-all duration-700"></div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
               alt="Student Success" 
               className="rounded-[4rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 relative z-10 border-8 border-white dark:border-slate-900"
             />
             <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 dark:border-slate-700 animate-bounce-slow">
                <p className="text-4xl font-black text-indigo-600 mb-1">98%</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">نسبة دقة التوافق</p>
             </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'تحليل شخصي عميق', desc: 'نستخدم خوارزميات نفسية لتحليل 5 جوانب في شخصيتك.', icon: '🧠' },
              { title: 'توقعات سوق 2030', desc: 'كل التوصيات مبنية على دراسات مستقبل الوظائف عالمياً.', icon: '📊' },
              { title: 'دليل المنح المتجدد', desc: 'تحديثات يومية لأحدث المنح الدراسية في مصر والعالم.', icon: '💎' },
            ].map((f, i) => (
               <div key={i} className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all">
                  <div className="text-5xl mb-6">{f.icon}</div>
                  <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Hero;
