const feedbackItems = [
  {
    id: "rating",
    title: "総合評価（A〜D）",
    description: "今の回答がどのレベルかの目安です。",
  },
  {
    id: "strengths",
    title: "良かった点",
    description: "そのまま活かせる強みや、説得力のある部分を指摘します。",
  },
  {
    id: "improvements",
    title: "改善すべき点",
    description:
      "具体性に欠ける部分や、論理の飛躍など、直した方がよいところを示します。",
  },
  {
    id: "rewrite",
    title: "修正案（リライト案）",
    description:
      "答え方のプロセスに着目した、具体的な書き直し例を提示します。",
  },
  {
    id: "follow-up",
    title: "深掘り質問",
    description:
      "面接官として、次にツッコんで聞いてみたいこと（1 問）を提示します。",
  },
];

export function FeedbackGuideSection() {
  return (
    <section
      className="rounded-2xl border border-border bg-surface px-6 py-6 shadow-sm"
      aria-labelledby="feedback-guide-heading"
    >
      <h2
        id="feedback-guide-heading"
        className="mb-2 text-xl font-semibold tracking-tight"
      >
        AI フィードバックの見方
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-subtle">
        企業の採用面接官にロールした Gemini
        は、あなたの回答に対して次の 5
        項目でフィードバックします。何度もやり取りもできますが、まずは
        <strong className="font-medium text-foreground">
          最初のフィードバックを丁寧に読む
        </strong>
        ことを大切にしましょう。
      </p>
      <ul className="grid gap-3">
        {feedbackItems.map((item, index) => (
          <li key={item.id}>
            <details className="group rounded-xl border border-border bg-background">
              <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 marker:content-none [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent"
                >
                  {index + 1}
                </span>
                <span className="flex-1 font-medium">{item.title}</span>
                <span
                  aria-hidden="true"
                  className="text-subtle transition-transform group-open:rotate-180"
                >
                  ▼
                </span>
              </summary>
              <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-subtle">
                {item.description}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
