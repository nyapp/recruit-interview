import type { PracticeRole } from "@/data/practice-roles";

type PracticeRoleCardProps = {
  role: PracticeRole;
};

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function PracticeRoleCard({ role }: PracticeRoleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-accent">{role.label}</span>
        {role.category ? (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {role.category}
          </span>
        ) : null}
      </div>
      <blockquote className="mb-5 flex-1 text-base leading-relaxed">
        「{role.question}」
      </blockquote>
      <a
        href={role.gemUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 text-base font-medium text-white transition-colors hover:bg-accent-press focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        回答する
        <ExternalLinkIcon />
      </a>
    </article>
  );
}
