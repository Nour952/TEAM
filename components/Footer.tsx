
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-32 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-500/30">م</div>
              <span className="text-2xl font-black text-slate-900 dark:text-white">مستقبلي</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              أول منصة عربية ذكية تساعد الطلاب على اكتشاف شغفهم وربطهم بسوق العمل باستخدام أحدث تقنيات الذكاء الاصطناعي.
            </p>
            <div className="flex gap-4">
               {['fb', 'tw', 'ig', 'li'].map(social => (
                  <button key={social} className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                     🌐
                  </button>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-8 text-slate-900 dark:text-white">المنصة</h4>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">عن مستقبلي</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">كيف يعمل الاختبار؟</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">مقارنة التخصصات</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-8 text-slate-900 dark:text-white">المصادر التعليمية</h4>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">دليل الجامعات المصرية</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">منح بكالوريوس</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">منح ماجستير</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">مقالات مهنية</a></li>
            </ul>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800">
            <h4 className="text-lg font-black mb-4 text-indigo-600">اشترك في النشرة</h4>
            <p className="text-sm text-slate-500 mb-6 font-medium">احصل على أحدث المنح مباشرة على بريدك.</p>
            <div className="flex gap-2">
               <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 text-sm border-none focus:ring-2 focus:ring-indigo-500 outline-none" />
               <button className="bg-indigo-600 text-white p-3 rounded-xl">🚀</button>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-10 border-t border-slate-100 dark:border-slate-900">
           <p className="text-slate-400 text-sm font-bold">
              تم التطوير بكل ❤️ لدعم مستقبل الطلاب العربي © {new Date().getFullYear()}
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
