export function HeroSection() {
  return (
    <header className="rounded-2xl border border-border bg-surface px-6 py-8 text-center shadow-sm">
      <p className="mb-2 text-sm font-medium text-accent">就活サポート</p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
        AI と面接練習
      </h1>
      <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-subtle">
        採用面接官（人事責任者）役の Gemini
        が、あなたの回答をその場でフィードバックします。
        まずは 1 問だけ、気軽に試してみましょう。
      </p>
      <a
        href="#practice-roles"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-press focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        練習を選ぶ
        <span aria-hidden="true" className="ml-1.5">
          ↓
        </span>
      </a>
    </header>
  );
}
