
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  hasResult: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, darkMode, setDarkMode, hasResult }) => {
  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer shrink-0" 
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">م</div>
          <span className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">مستقبلي</span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button onClick={() => setActiveTab('home')} className={`font-bold transition-colors text-sm ${activeTab === 'home' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}>الرئيسية</button>
          <button onClick={() => setActiveTab('universities')} className={`font-bold transition-colors text-sm ${activeTab === 'universities' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}>الجامعات</button>
          <button onClick={() => setActiveTab('scholarships')} className={`font-bold transition-colors text-sm ${activeTab === 'scholarships' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}>المنح</button>
          <button onClick={() => setActiveTab('compare')} className={`font-bold transition-colors text-sm ${activeTab === 'compare' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}>المقارنة</button>
          <button onClick={() => setActiveTab('trends')} className={`font-bold transition-colors text-sm ${activeTab === 'trends' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}>رؤية 2030</button>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button 
            onClick={() => setActiveTab('quiz')}
            className="hidden sm:block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
          >
            حل الاختبار الذكي
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
