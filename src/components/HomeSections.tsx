import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { announcements } from "@/lib/announcements";

const pillarRoutes = [
  "/programs/communication",
  "/programs/economic-development",
  "/programs/social-development",
  "/programs/safety-security",
  "/programs/women-empowerment",
  "/programs/agriculture",
  "/programs/youth-development",
] as const;

const quickRoutes = [
  "/contact",
  "/leadership",
  "/documents",
  "/faqs",
  "/community-court-and-laws",
] as const;

const content = {
  en: {
    messageTitle: "A message from iNkosi Zondi",
    message:
      "The official message from iNkosi Zondi will be published here once it has been approved by the Traditional Council.",
    pillarsEyebrow: "Pillars for Development",
    pillarsTitle: "Seven pillars guide our work",
    pillarsLead:
      "Each pillar has its own plans and a lead who is accountable to the Council. Progress will be reported openly once it has been verified.",
    pillars: [
      ["Communication", "A trusted, accessible way for the community and the Chief's office to reach each other."],
      ["Economic Development", "Solar power, local markets and community enterprises."],
      ["Social Development", "Education, health awareness and community cohesion."],
      ["Safety and Security", "Safer villages through community watch, lighting and bylaws."],
      ["Women Empowerment", "Livelihoods, skills and protection for women and girls."],
      ["Agriculture and Rural Development", "Food gardens, cooperatives and access to markets."],
      ["Youth Development", "Skills, training and opportunities for young people."],
    ],
    announcementsTitle: "Latest announcements",
    noAnnouncements: "No announcements have been published yet.",
    allAnnouncements: "All announcements",
    meetTitle: "Community imbizos",
    meet: "Public meetings are planned each quarter to report progress, receive community input and explain Council decisions. Dates will be announced here.",
    accessTitle: "Office access days",
    access: "Office access days and appointment times will be published here once they have been confirmed.",
    quickTitle: "Quick links",
    quick: [
      "Contact the office",
      "Leadership & Governance",
      "Documents & Reports",
      "FAQs",
      "Community Court & Laws",
    ],
  },
  zu: {
    messageTitle: "Umyalezo ovela kuNkosi uZondi",
    message:
      "Umyalezo osemthethweni ovela kuNkosi uZondi uzoshicilelwa lapha uma uvunyiwe yiSigungu Sendabuko.",
    pillarsEyebrow: "Izinsika Zentuthuko",
    pillarsTitle: "Izinsika eziyisikhombisa ziholela umsebenzi wethu",
    pillarsLead:
      "Insika ngayinye inezinhlelo zayo nomholi oziphendulela eBandleni. Inqubekela phambili izobikwa obala uma isiqinisekisiwe.",
    pillars: [
      ["Ukuxhumana", "Indlela ethenjwayo nefinyeleleka kalula yokuxhumana phakathi komphakathi nehhovisi leNkosi."],
      ["Ukuthuthukiswa Komnotho", "Amandla elanga, izikhulumi zendawo namabhizinisi omphakathi."],
      ["Ukuthuthukiswa Komphakathi", "Imfundo, ukwazisa ngempilo nokubumbana komphakathi."],
      ["Ukuphepha Nezokuvikela", "Amadolobhana aphephile ngokuqapha komphakathi, ukukhanyisa nemithetho."],
      ["Ukunikwa Amandla Kwabesifazane", "Ukuziphilisa, amakhono nokuvikelwa kwabesifazane nezintombazane."],
      ["Ezolimo Nentuthuko Yasemakhaya", "Izingadi zokudla, amakhophilethivu nokufinyelela ezimakethe."],
      ["Ukuthuthukiswa Kwentsha", "Amakhono, ukuqeqeshwa namathuba entsha."],
    ],
    announcementsTitle: "Izaziso zakamuva",
    noAnnouncements: "Azikho izaziso ezishicilelwe okwamanje.",
    allAnnouncements: "Zonke izaziso",
    meetTitle: "Izimbizo zomphakathi",
    meet: "Imihlangano yomphakathi ihlelelwe kwikota ngayinye ukubika inqubekela phambili, ukwamukela imibono yomphakathi nokuchaza izinqumo zeBandla. Izinsuku zizomenyezelwa lapha.",
    accessTitle: "Izinsuku zokufinyelela ehhovisi",
    access: "Izinsuku zokufinyelela ehhovisi nezikhathi zokubhukha zizoshicilelwa lapha uma seziqinisekisiwe.",
    quickTitle: "Amakhonkco asheshayo",
    quick: [
      "Xhumana nehhovisi",
      "Ubuholi Nokubusa",
      "Amadokhumenti Nemibiko",
      "Imibuzo Ejwayelekile",
      "Inkantolo Yomphakathi Nemithetho",
    ],
  },
} as const;

/** Homepage sections added from the Developer Brief: message, pillars, announcements, imbizos, access days, quick links. */
export function HomeSections() {
  const { lang } = useLanguage();
  const c = content[lang];
  const latest = [...announcements]
    .filter((a) => !a.closed)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div>
      <section className="container-page py-16 md:py-20">
        <div className="rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl md:text-3xl">{c.messageTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">{c.message}</p>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          {c.pillarsEyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">{c.pillarsTitle}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{c.pillarsLead}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.pillars.map(([name, body], i) => (
            <Link
              key={name}
              to={pillarRoutes[i]}
              className="group block rounded-sm border bg-card p-6 transition hover:border-[color:var(--gold)]"
            >
              <h3 className="font-display text-lg transition group-hover:text-[color:var(--royal)]">
                {name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-sm border bg-card p-6 lg:col-span-1">
            <h2 className="font-display text-xl">{c.announcementsTitle}</h2>
            {latest.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">{c.noAnnouncements}</p>
            ) : (
              <ul className="mt-4 space-y-4">
                {latest.map((a) => (
                  <li key={a.id}>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {a.date}
                    </div>
                    <div className="mt-1 font-display text-base">{a.title[lang]}</div>
                  </li>
                ))}
              </ul>
            )}
            <Link
              to="/announcements"
              className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)]"
            >
              {c.allAnnouncements} →
            </Link>
          </div>

          <div className="rounded-sm border bg-card p-6">
            <h2 className="font-display text-xl">{c.meetTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{c.meet}</p>
          </div>

          <div className="rounded-sm border bg-card p-6">
            <h2 className="font-display text-xl">{c.accessTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{c.access}</p>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-24">
        <h2 className="font-display text-xl">{c.quickTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {c.quick.map((label, i) => (
            <Link
              key={label}
              to={quickRoutes[i]}
              className="rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)] transition hover:bg-[color:var(--royal)] hover:text-background"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
