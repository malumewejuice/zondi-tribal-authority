import { Link, type LinkProps } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export type PillarContent = {
  eyebrow: string;
  title: string;
  intro: string;
  objectiveLabel: string;
  objective: string;
  initiativesTitle: string;
  initiatives: { title: string; body: string }[];
  convenerLine?: string;
  statusNote: string;
  related?: { to: LinkProps["to"]; label: string };
  contactCta: string;
};

/** Shared layout for the Pillars for Development pages. */
export function PillarPage({ content }: { content: { en: PillarContent; zu: PillarContent } }) {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <section className="mt-14 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">{c.objectiveLabel}</strong> {c.objective}
        </p>
        {c.convenerLine && (
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
            {c.convenerLine}
          </p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl md:text-3xl">{c.initiativesTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {c.initiatives.map((item) => (
            <div key={item.title} className="rounded-sm border bg-card p-6">
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 rounded-sm border border-dashed p-5 text-sm text-muted-foreground">
        {c.statusNote}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {c.related && (
          <Link
            to={c.related.to}
            className="inline-block rounded-full border border-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)] transition hover:bg-[color:var(--royal)] hover:text-background"
          >
            {c.related.label}
          </Link>
        )}
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.contactCta}
        </Link>
      </div>
    </main>
  );
}
