import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents & Reports — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Official documents, resolutions and reports of the Zondi Tribal Authority, published once approved by the Traditional Council.",
      },
    ],
  }),
  component: DocumentsPage,
});

type Group = "governance" | "resolutions" | "reports";

type DocItem = {
  group: Group;
  date: string; // YYYY-MM-DD
  url: string; // link to the PDF, for example "/documents/constitution.pdf"
  title: { en: string; zu: string };
};

/**
 * HOW TO ADD A DOCUMENT
 * 1. Upload the PDF to the "public/documents" folder on GitHub.
 * 2. Copy the example below into the list, remove the leading "//", and edit it.
 *
 *  {
 *    group: "governance",
 *    date: "2026-10-20",
 *    url: "/documents/constitution.pdf",
 *    title: { en: "Constitution", zu: "Umthethosisekelo" },
 *  },
 */
const documents: DocItem[] = [];

const content = {
  en: {
    eyebrow: "Resources",
    title: "Documents & Reports",
    intro:
      "Official documents of the Zondi Tribal Authority. Documents are added here once they have been approved by the Traditional Council.",
    groups: {
      governance: "Governance documents",
      resolutions: "Council resolutions and minutes",
      reports: "Reports",
    },
    empty: "No documents have been published in this section yet.",
    open: "Open (PDF)",
    contactCta: "Contact the office",
  },
  zu: {
    eyebrow: "Izinsiza",
    title: "Amadokhumenti Nemibiko",
    intro:
      "Amadokhumenti asemthethweni eSigungu SakwaZondi. Amadokhumenti ayengezwa lapha uma esevunyiwe yiSigungu Sendabuko.",
    groups: {
      governance: "Amadokhumenti okubusa",
      resolutions: "Izinqumo namaminithi eBandla",
      reports: "Imibiko",
    },
    empty: "Awekho amadokhumenti ashicilelwe kulesi sigaba okwamanje.",
    open: "Vula (PDF)",
    contactCta: "Xhumana nehhovisi",
  },
} as const;

function DocumentsPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  const groups = ["governance", "resolutions", "reports"] as const;

  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      {groups.map((g) => {
        const items = documents
          .filter((d) => d.group === g)
          .sort((a, b) => (a.date < b.date ? 1 : -1));
        return (
          <section key={g} className="mt-12">
            <h2 className="font-display text-2xl">{c.groups[g]}</h2>
            {items.length === 0 ? (
              <p className="mt-4 rounded-sm border border-dashed p-5 text-sm text-muted-foreground">
                {c.empty}
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {items.map((d) => (
                  <li
                    key={d.url}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-sm border bg-card p-5"
                  >
                    <div>
                      <div className="font-display text-lg">{d.title[lang]}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {d.date}
                      </div>
                    </div>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)] transition hover:bg-[color:var(--royal)] hover:text-background"
                    >
                      {c.open}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      <Link
        to="/contact"
        className="mt-14 inline-block rounded-full bg-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
      >
        {c.contactCta}
      </Link>
    </main>
  );
}
