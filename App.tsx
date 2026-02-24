
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import Comparison from './components/Comparison';
import FutureTrends from './components/FutureTrends';
import Chatbot from './components/Chatbot';
import Scholarships from './components/Scholarships';
import Universities from './components/Universities';
import { UserResult } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [quizResult, setQuizResult] = useState<UserResult | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'compare' | 'trends' | 'scholarships' | 'universities'>('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleQuizComplete = (result: UserResult) => {
    setQuizResult(result);
    setActiveTab('home'); 
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        hasResult={!!quizResult}
      />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        {activeTab === 'home' && (
          <>
            {quizResult ? (
              <Dashboard result={quizResult} onRetake={() => setActiveTab('quiz')} />
            ) : (
              <Hero onStart={() => setActiveTab('quiz')} />
            )}
            
            <div className="mt-24">
              <FutureTrends />
            </div>
          </>
        )}

        {activeTab === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {activeTab === 'compare' && (
          <Comparison />
        )}

        {activeTab === 'trends' && (
          <FutureTrends fullView />
        )}

        {activeTab === 'scholarships' && (
          <Scholarships />
        )}

        {activeTab === 'universities' && (
          <Universities />
        )}
      </main>

      <Footer />
      <Chatbot />

      {/* Mobile Sticky Nav Update */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-effect p-2 flex justify-around items-center border-t border-slate-200 dark:border-slate-800 z-40 overflow-x-auto">
        <button onClick={() => setActiveTab('home')} className={`p-2 min-w-[50px] rounded-xl ${activeTab === 'home' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' : 'text-slate-400'}`}>🏠</button>
        <button onClick={() => setActiveTab('quiz')} className={`p-2 min-w-[50px] rounded-xl ${activeTab === 'quiz' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' : 'text-slate-400'}`}>📝</button>
        <button onClick={() => setActiveTab('universities')} className={`p-2 min-w-[50px] rounded-xl ${activeTab === 'universities' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' : 'text-slate-400'}`}>🏫</button>
        <button onClick={() => setActiveTab('scholarships')} className={`p-2 min-w-[50px] rounded-xl ${activeTab === 'scholarships' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' : 'text-slate-400'}`}>🎓</button>
        <button onClick={() => setActiveTab('compare')} className={`p-2 min-w-[50px] rounded-xl ${activeTab === 'compare' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' : 'text-slate-400'}`}>⚖️</button>
      </div>
    </div>
  );
};

export default App;
