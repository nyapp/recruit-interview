const tips = [
  "Gemini Gem は新しいタブで開きます。Google アカウントへのログインが必要な場合があります。",
  "個人情報や機密情報は入力しないでください。",
  "フィードバックを読んだあと、同じ Gem で回答を改善してから次のテーマに進みましょう。",
];

export function TipsSection() {
  return (
    <section
      className="rounded-2xl border border-border bg-surface px-6 py-6 shadow-sm"
      aria-labelledby="tips-heading"
    >
      <h2
        id="tips-heading"
        className="mb-3 text-xl font-semibold tracking-tight"
      >
        ヒント・注意
      </h2>
      <ul className="space-y-2 text-sm leading-relaxed text-subtle">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span aria-hidden="true" className="text-accent">
              •
            </span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
