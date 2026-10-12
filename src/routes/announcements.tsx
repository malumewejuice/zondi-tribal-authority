import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { announcements, type Category } from "@/lib/announcements";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Official notices, imbizo dates, programme updates, safety alerts and opportunities from the Zondi Tribal Authority.",
      },
    ],
  }),
  component: AnnouncementsPage,
});


const content = {
  en: {
    eyebrow: "Announcements",
    title: "Announcements",
    intro:
      "Official notices, imbizo dates, programme updates, safety alerts and opportunities from the Zondi Tribal Authority.",
    filterLabel: "Filter announcements by category",
    filters: {
      all: "All",
      notices: "Notices",
      events: "Imbizos & events",
      programmes: "Programmes",
      safety: "Safety",
      opportunities: "Opportunities",
    },
    emptyAll:
      "No announcements have been published yet. Official notices from the Traditional Council will appear here.",
    emptyCat: "No announcements in this category yet.",
    closed: "Closed",
    otherTitle: "How else you will hear from us",
    other:
      "Notices are also shared through your Izinduna, community meetings, notice boards and WhatsApp or SMS alerts.",
    contactCta: "Contact the office",
  },
  zu: {
    eyebrow: "Izaziso",
    title: "Izaziso",
    intro:
      "Izaziso ezisemthethweni, izinsuku zezimbizo, izibuyekezo zezinhlelo, izixwayiso zokuphepha namathuba avela eSigungwini SakwaZondi.",
    filterLabel: "Hlunga izaziso ngesigaba",
    filters: {
      all: "Konke",
      notices: "Izaziso",
      events: "Izimbizo nemicimbi",
      programmes: "Izinhlelo",
      safety: "Ukuphepha",
      opportunities: "Amathuba",
    },
    emptyAll:
      "Azikho izaziso ezishicilelwe okwamanje. Izaziso ezisemthethweni zeSigungu Sendabuko zizovela lapha.",
    emptyCat: "Azikho izaziso kulesi sigaba okwamanje.",
    closed: "Selivaliwe",
    otherTitle: "Ezinye izindlela ozokwazi ngazo",
    other:
      "Izaziso ziyabelwana nangezinduna zakho, imihlangano yomphakathi, amabhodi ezaziso nama-WhatsApp noma ama-SMS.",
    contactCta: "Xhumana nehhovisi",
  },
} as const;

function AnnouncementsPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [filter, setFilter] = useState<"all" | Category>("all");
  const keys = ["all", "notices", "events", "programmes", "safety", "opportunities"] as const;

  const shown = [...announcements]
    .filter((a) => filter === "all" || a.category === filter)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div role="group" aria-label={c.filterLabel} className="mt-10 flex flex-wrap gap-2">
        {keys.map((k) => {
          const active = filter === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(k)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${
                active
                  ? "border-[color:var(--forest)] bg-[color:var(--forest)] text-background"
                  : "border-[color:var(--royal)] text-foreground hover:bg-[color:var(--royal)] hover:text-background"
              }`}
            >
              {c.filters[k]}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 rounded-sm border border-dashed p-6 text-sm text-muted-foreground">
          {announcements.length === 0 ? c.emptyAll : c.emptyCat}
        </p>
      ) : (
        <ul className="mt-8 space-y-5">
          {shown.map((a) => (
            <li key={a.id} className="rounded-sm border bg-card p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{a.date}</span>
                <span className="text-[color:var(--royal)]">{c.filters[a.category]}</span>
                {a.closed && (
                  <span className="rounded-full border px-3 py-0.5">{c.closed}</span>
                )}
              </div>
              <h2 className="mt-3 font-display text-xl">{a.title[lang]}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.body[lang]}</p>
            </li>
          ))}
        </ul>
      )}

      <section className="mt-14 rounded-sm border bg-card p-6">
        <h2 className="font-display text-xl">{c.otherTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{c.other}</p>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-full bg-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.contactCta}
        </Link>
      </section>
    </main>
  );
}
