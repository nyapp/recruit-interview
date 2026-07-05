import { practiceRoles } from "@/data/practice-roles";
import { PracticeRoleCard } from "./PracticeRoleCard";

export function PracticeRolesSection() {
  return (
    <section
      id="practice-roles"
      className="scroll-mt-6 rounded-2xl border border-border bg-surface px-6 py-6 shadow-sm"
      aria-labelledby="practice-roles-heading"
    >
      <h2
        id="practice-roles-heading"
        className="mb-2 text-xl font-semibold tracking-tight"
      >
        練習テーマ
      </h2>
      <p className="mb-5 text-sm leading-relaxed text-subtle">
        テーマを選んで「回答する」を押すと、Gemini Gem が新しいタブで開きます。
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {practiceRoles.map((role) => (
          <li key={role.id}>
            <PracticeRoleCard role={role} />
          </li>
        ))}
      </ul>
    </section>
  );
}
