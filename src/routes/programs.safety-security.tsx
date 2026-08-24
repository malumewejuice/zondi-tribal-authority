import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/safety-security")({
  head: () => ({
    meta: [
      { title: "Safety and Security — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "How the Zondi Tribal Authority works with SAPS, community policing forums and izinduna to keep Ward 2, Nkandla safe.",
      },
    ],
  }),
  component: SafetySecurityPage,
});

const content = {
  en: {
    eyebrow: "Programs",
    title: "Safety and Security",
    intro:
      "The Traditional Council works closely with the South African Police Service, the municipality and community structures so that households across Ward 2 feel safe.",
    pillarLabel: "Law and Order; Safety & Security",
    objectiveLabel: "Objective:",
    objective:
      "Establish a peaceful, well-governed, and secure environment that protects families and encourages local investment.",
    pillars: [
      {
        name: "Law and Order (Legal & Village Rules)",
        actions: [
          "Formalize and document the traditional and local village bylaws so rules are transparent to all residents.",
          "Establish a community dispute resolution forum or peace committee aligned with the chief's council.",
        ],
      },
      {
        name: "Physical Safety & Tech Infrastructure",
        actions: [
          "Apollo Lighting: Identify high-risk or dark zones across the village to install high-mast (Apollo) lighting to deter crime at night.",
          "Community Camera Network: Strategic installation of solar-powered CCTV cameras at key entry and exit points of the village, managed via a community watch initiative.",
        ],
      },
    ],
    initiatives: [
      {
        title: "Community Policing Forum (CPF)",
        body: "Residents, izinduna and SAPS meet regularly to identify crime hotspots and coordinate patrols and awareness campaigns.",
      },
      {
        title: "Izinduna as first responders",
        body: "Ward-level headmen are often the first point of contact for disputes and safety concerns before they are escalated to SAPS.",
      },
      {
        title: "Road and public safety",
        body: "Working with the municipality on street lighting, signage and road maintenance to reduce accidents on rural routes.",
      },
      {
        title: "Disaster and fire response",
        body: "Coordination with the municipality's disaster management unit during floods, veld fires and other emergencies.",
      },
    ],
    emergencyTitle: "In an emergency",
    saps: "SAPS",
    ambulance: "Ambulance",
    fireTitle: "Fire & disaster",
    fireBody:
      "Contact Nkandla Local Municipality's disaster management line, or approach your nearest headman for guidance.",
    courtCta: "Community court & laws",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinhlelo",
    title: "Ukuphepha Nezokuvikela",
    intro:
      "Isigungu Sendabuko sisebenza eduze neSaphesi (SAPS), umasipala nezinye izakhiwo zomphakathi ukuze imizi kulo lonke iWadi 2 izizwe iphephile.",
    pillarLabel: "Umthetho Nokuhleleka; Ukuphepha Nezokuvikela",
    objectiveLabel: "Inhloso:",
    objective:
      "Ukwakha indawo enokuthula, ebusiswa kahle futhi ephephile evikela imindeni futhi ikhuthaza utshalomali lwendawo.",
    pillars: [
      {
        name: "Umthetho Nokuhleleka (Imithetho Yendabuko Neyomuzi)",
        actions: [
          "Yenza ibe semthethweni futhi ubhale phansi imithetho yendabuko neyendawo yomuzi ukuze imithetho isobala kubo bonke abahlali.",
          "Sungula uhlaka lokuxazulula izingxabano zomphakathi noma ikomiti loxolo ehambisana nesigungu senkosi.",
        ],
      },
      {
        name: "Ukuphepha Komzimba Nengqalasizinda Yobuchwepheshe",
        actions: [
          "Ukukhanya kwe-Apollo: Khomba izindawo eziyingozi noma ezimnyama kuwo wonke umuzi ukuze kufakwe izibani eziphakeme (i-Apollo) ukuvimbela ubugebengu ebusuku.",
          "Uhlelo Lwamakhamera Omphakathi: Ukufakwa okuhlelekile kwamakhamera e-CCTV asebenza ngelanga ezindaweni ezibalulekile zokungena nokuphuma komuzi, aphathwe ngohlelo lokuqaphela komphakathi.",
        ],
      },
    ],
    initiatives: [
      {
        title: "Uhlaka Lwamaphoyisa Omphakathi (CPF)",
        body: "Izakhamizi, izinduna kanye neSaphesi bahlangana njalo ukukhomba izindawo ezinobugebengu obuphezulu nokuhlela ukuqapha nemikhankaso yokuqwashisa.",
      },
      {
        title: "Izinduna njengabaqala ukuphendula",
        body: "Izinduna zezinga lewadi zivame ukuba yindawo yokuqala yokuxhumana ngezingxabano nokukhathazeka ngokuphepha ngaphambi kokuba kwenyuselwe eSaphesi.",
      },
      {
        title: "Ukuphepha Kwemigwaqo Nomphakathi",
        body: "Ukusebenzisana nomasipala ngokukhanyisa imigwaqo, izimpawu nokugcinwa kwemigwaqo ukunciphisa izingozi ezindleleni zasemakhaya.",
      },
      {
        title: "Ukuphendula Kwezinhlekelele Nomlilo",
        body: "Ukuxhumana neyunithi kamasipala ephethe izinhlekelele ngesikhathi sezikhukhula, imililo yasendle nezinye izimo eziphuthumayo.",
      },
    ],
    emergencyTitle: "Esimweni Esiphuthumayo",
    saps: "SAPS",
    ambulance: "Iambulense",
    fireTitle: "Umlilo Nezinhlekelele",
    fireBody:
      "Xhumana nohlelo lokuphatha izinhlekelele lukaMasipala Wasekhaya waseNkandla, noma sondela enduneni esondele kuwe ukuze uthole ukwelulekwa.",
    courtCta: "Inkantolo Yomphakathi Nemithetho",
    contactCta: "Xhumana nathi",
  },
} as const;

function SafetySecurityPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-14 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]">
          {c.pillarLabel}
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          <strong className="text-foreground">{c.objectiveLabel}</strong> {c.objective}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {c.pillars.map((p) => (
            <div key={p.name} className="rounded-sm bg-background p-6">
              <h3 className="font-display text-lg">{p.name}</h3>
              <ul className="mt-3 space-y-3">
                {p.actions.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 text-[color:var(--gold)]">●</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {c.initiatives.map((i) => (
          <div key={i.title} className="rounded-sm border bg-card p-6">
            <h3 className="font-display text-lg">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl">{c.emergencyTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-sm bg-background p-5">
            <span className="font-display text-lg">{c.saps}</span>
            <a href="tel:10111" className="mt-2 block font-display text-xl text-[color:var(--royal)]">
              10111
            </a>
          </div>
          <div className="rounded-sm bg-background p-5">
            <span className="font-display text-lg">{c.ambulance}</span>
            <a href="tel:10177" className="mt-2 block font-display text-xl text-[color:var(--royal)]">
              10177
            </a>
          </div>
          <div className="rounded-sm bg-background p-5">
            <span className="font-display text-lg">{c.fireTitle}</span>
            <p className="mt-2 text-sm text-muted-foreground">{c.fireBody}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/community-court-and-laws"
          className="inline-block rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-[color:var(--royal)] hover:text-background"
        >
          {c.courtCta}
        </Link>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
        >
          {c.contactCta}
        </Link>
      </div>
    </main>
  );
}
