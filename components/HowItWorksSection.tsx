const steps = [
  {
    number: "1",
    title: "テーマを選ぶ",
    description: "下の練習テーマから、取り組みたい質問を選びます。",
  },
  {
    number: "2",
    title: "Gemini で回答する",
    description: "「回答する」から Gemini Gem を開き、質問に答えます。",
  },
  {
    number: "3",
    title: "フィードバックを読む",
    description:
      "最初のフィードバックをよく読み、回答を直してから次へ進みましょう。",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="rounded-2xl border border-border bg-surface px-6 py-6 shadow-sm"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="mb-4 text-xl font-semibold tracking-tight"
      >
        使い方
      </h2>
      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.number}
            className="rounded-xl border border-border bg-background px-4 py-4"
          >
            <span
              aria-hidden="true"
              className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
            >
              {step.number}
            </span>
            <h3 className="mb-1 font-medium">{step.title}</h3>
            <p className="text-sm leading-relaxed text-subtle">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
