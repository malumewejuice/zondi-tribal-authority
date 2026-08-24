import { createFileRoute, Link } from "@tanstack/react-router";
import waterImg from "@/assets/zulu-water-project.jpg";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/electricity-water")({
  head: () => ({
    meta: [
      { title: "Electricity and Water — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Water and electrification infrastructure projects serving households across Ward 2, Nkandla.",
      },
    ],
  }),
  component: ElectricityWaterPage,
});

const content = {
  en: {
    eyebrow: "Programs",
    title: "Electricity and Water",
    intro:
      "Reliable water and electricity remain a top priority for households across Ward 2. The Traditional Council works with the municipality, Eskom and provincial government to advance these projects.",
    imgAlt: "A Zulu woman collects clean water from a new community tap in rural Nkandla",
    projects: [
      {
        tag: "R99M+ · Flagship",
        title: "Nkandla–Vutshini Regional Water Project",
        body: "A major investment that brought clean, reliable water to approximately 4,000 households — the largest single water win in recent history.",
      },
      {
        tag: "R160M · Underway",
        title: "Middledrift Water Upgrade",
        body: "An upgrade to expand water reliability and capacity for surrounding communities.",
      },
      {
        tag: "R14.3M · Ward 9",
        title: "Ward 9 Water Scheme",
        body: "A dedicated scheme extending piped water access to Ward 9 households.",
      },
      {
        tag: "Ongoing",
        title: "EEDMS Electrification Programme",
        body: "Household electrification connections carried out in partnership with the municipality and Eskom.",
      },
    ],
    faqsCta: "Read the FAQs",
    reportCta: "Report a fault or query",
  },
  zu: {
    eyebrow: "Izinhlelo",
    title: "Ugesi Namanzi",
    intro:
      "Amanzi nogesi okuthenjelwa kusahlala kuyisidingo esikhulu semizi kulo lonke iWadi 2. Isigungu Sendabuko sisebenza noMasipala, i-Eskom kanye nohulumeni wesifundazwe ukuqhuba lezi zinhlelo.",
    imgAlt: "Owesifazane wamaZulu ekha amanzi ahlanzekile ephayipini elisha lomphakathi ezindaweni zasemakhaya eNkandla",
    projects: [
      {
        tag: "R99M+ · Iphrojekthi Enkulu",
        title: "Iphrojekthi Yamanzi Yesifunda i-Nkandla–Vutshini",
        body: "Utshalomali olukhulu olulethe amanzi ahlanzekile, okuthenjelwa kuwo emizini engaba ngu-4,000 — impumelelo enkulu kunazo zonke yamanzi emlandweni wakamuva.",
      },
      {
        tag: "R160M · Kuyaqhubeka",
        title: "Uphuculo Lwamanzi i-Middledrift",
        body: "Uphuculo lokwandisa ukuthenjelwa namandla amanzi emiphakathini ezungezile.",
      },
      {
        tag: "R14.3M · Iwadi 9",
        title: "Uhlelo Lwamanzi Lwewadi 9",
        body: "Uhlelo oluqondene nokwandisa ukufinyelela kwamanzi ephayipini emizini yeWadi 9.",
      },
      {
        tag: "Kuyaqhubeka",
        title: "Uhlelo Lokufakelwa Kukagesi i-EEDMS",
        body: "Ukuxhunywa kukagesi emizini okwenziwa ngokubambisana noMasipala kanye ne-Eskom.",
      },
    ],
    faqsCta: "Funda Imibuzo Ejwayelekile",
    reportCta: "Bika Icala Noma Umbuzo",
  },
} as const;

function ElectricityWaterPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-10 overflow-hidden rounded-sm">
        <img
          src={waterImg}
          alt={c.imgAlt}
          width={1024}
          height={720}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {c.projects.map((p) => (
          <div key={p.title} className="rounded-sm border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
              {p.tag}
            </div>
            <h3 className="mt-2 font-display text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/faqs"
          className="inline-block rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-[color:var(--royal)] hover:text-background"
        >
          {c.faqsCta}
        </Link>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.reportCta}
        </Link>
      </div>
    </main>
  );
}
