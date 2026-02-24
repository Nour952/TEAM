
import React, { useState } from 'react';
import { QUESTIONS, MAJORS } from '../constants';
import { PersonalityTrait, UserResult, Major } from '../types';
import { getDetailedAnalysis } from '../services/geminiService';

interface QuizProps {
  onComplete: (result: UserResult) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityTrait, number>>({
    Analytical: 0,
    Creative: 0,
    Social: 0,
    Technical: 0,
    Managerial: 0
  });
  const [loading, setLoading] = useState(false);

  const handleAnswer = (trait: PersonalityTrait, score: number) => {
    const newScores = { ...scores, [trait]: scores[trait] + score };
    setScores(newScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishQuiz(newScores);
    }
  };

  const finishQuiz = async (finalScores: Record<PersonalityTrait, number>) => {
    setLoading(true);
    
    // Logic to find top majors: Find traits with highest scores
    const sortedTraits = (Object.entries(finalScores) as [PersonalityTrait, number][])
      .sort((a, b) => b[1] - a[1]);
    
    const topTraits = sortedTraits.slice(0, 2).map(t => t[0]);

    // Simple matching: majors that share at least one top trait
    const recommended = MAJORS.filter(major => 
      major.traits.some(trait => topTraits.includes(trait))
    ).slice(0, 3);

    const analysis = await getDetailedAnalysis(finalScores, recommended);

    const result: UserResult = {
      scores: finalScores,
      recommendedMajors: recommended,
      analysisText: analysis || '',
      timestamp: new Date().toISOString()
    };

    setLoading(false);
    onComplete(result);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">جاري تحليل شخصيتك بالذكاء الاصطناعي...</h3>
        <p className="text-slate-500 mt-2">نحن نربط أحلامك بسوق العمل الحقيقي</p>
      </div>
    );
  }

  const question = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-500">سؤال {currentStep + 1} من {QUESTIONS.length}</span>
          <span className="text-sm font-bold text-indigo-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white leading-relaxed">
        {question.scenario}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option.trait, option.score)}
            className="w-full text-right p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-200 group flex items-center justify-between"
          >
            <span className="text-lg font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{option.text}</span>
            <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-indigo-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
