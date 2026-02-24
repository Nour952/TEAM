
import { GoogleGenAI } from "@google/genai";
import { PersonalityTrait, Major } from "../types";

// Always use process.env.API_KEY directly in the named parameter.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDetailedAnalysis(scores: Record<PersonalityTrait, number>, majors: Major[]) {
  const model = 'gemini-3-flash-preview';
  
  const scoreSummary = Object.entries(scores)
    .map(([trait, val]) => `${trait}: ${val}`)
    .join(', ');

  const majorList = majors.map(m => m.name).join(', ');

  const prompt = `بصفتك مستشاراً تعليمياً ذكياً، قم بتحليل النتائج التالية لطالب:
  الدرجات في السمات الشخصية: ${scoreSummary}
  التخصصات المقترحة: ${majorList}
  
  المطلوب:
  1. شرح لماذا تناسب هذه التخصصات شخصية الطالب بناءً على درجاته.
  2. نصيحة للمستقبل المهني لهذا الطالب.
  3. جملة ملهمة واحدة في النهاية.
  
  اجعل الرد مشجعاً، قصيراً، وباللغة العربية الفصحى البسيطة.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: "أنت مستشار توجيه مهني خبير، تساعد الطلاب في اختيار مستقبلهم بناءً على ميولهم.",
      }
    });
    // The text property directly returns the string output.
    return response.text;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return "نعتذر، لم نتمكن من تحليل النتائج بشكل مفصل الآن، ولكن بناءً على الأرقام، أنت تمتلك قدرات رائعة في المجالات المقترحة!";
  }
}

export async function chatWithAI(userMessage: string, context?: string) {
  const model = 'gemini-3-flash-preview';
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: `سؤال المستخدم: ${userMessage}${context ? `\nسياق الطالب الحالي: ${context}` : ''}`,
      config: {
        systemInstruction: "أنت 'مرشد مستقبلي'، بوت ذكي يساعد الطلاب في مصر والوطن العربي على فهم سوق العمل والجامعات. ردودك قصيرة، ذكية، وودودة.",
      }
    });
    // The text property directly returns the string output.
    return response.text;
  } catch (error) {
    return "أنا هنا لمساعدتك! هل يمكنني الإجابة عن أي تساؤل بخصوص الجامعات؟";
  }
}