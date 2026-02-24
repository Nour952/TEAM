
export type PersonalityTrait = 'Analytical' | 'Creative' | 'Social' | 'Technical' | 'Managerial';

export interface QuizQuestion {
  id: number;
  scenario: string;
  options: {
    text: string;
    trait: PersonalityTrait;
    score: number;
  }[];
}

export interface University {
  id: string;
  name: string;
  type: 'حكومية' | 'خاصة' | 'دولية' | 'أهلية';
  location: string;
  ranking?: string;
  image: string;
  description: string;
  availableMajors: string[]; 
  courses: string[]; // كورسات تدريبية إضافية
  scholarshipInfo?: {
    forWho: string;
    howToApply: string;
    benefits: string;
  };
}

// Added Scholarship interface to resolve the missing export member error in constants.tsx
export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  coverage: string;
  deadline: string;
  link: string;
  category: 'داخلي' | 'خارجي';
  eligibility: string;
  process: string;
}

export interface Major {
  id: string;
  name: string;
  category: string;
  years: number;
  difficulty: 'سهلة' | 'متوسطة' | 'عالية' | 'عالية جداً';
  marketDemand: 'عالية جداً' | 'عالية' | 'متوسطة';
  salaryRange: string;
  skills: string[];
  description: string;
  traits: PersonalityTrait[];
  futureOutlook: string;
  universities: {
    public: string[];
    private: string[];
  };
  jobRoles: string[];
  roadmap: string[];
  coreCourses: string[]; // المواد الدراسية الأساسية داخل الكلية
}

export interface UserResult {
  scores: Record<PersonalityTrait, number>;
  recommendedMajors: Major[];
  analysisText: string;
  timestamp: string;
}
