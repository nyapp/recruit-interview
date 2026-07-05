export type PracticeRole = {
  id: string;
  label: string;
  question: string;
  gemUrl: string;
  category?: string;
};

export const practiceRoles: PracticeRole[] = [
  {
    id: "self-pr-1",
    label: "ロール 1",
    question: "あなたの自己PRを教えてください",
    gemUrl: "https://gemini.google.com/gem/1bDtrZTCZX3PpCO7Pj4L-6Uo4O9fRRSzk?usp=sharing",
    category: "自己PR",
  },
  {
    id: "self-pr-2",
    label: "ロール 2",
    question: "あなたの自己PRを教えてください",
    gemUrl: "#",
    category: "自己PR",
  },
  {
    id: "self-pr-3",
    label: "ロール 3",
    question: "あなたの自己PRを教えてください",
    gemUrl: "#",
    category: "自己PR",
  },
];
