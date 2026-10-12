import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "How iSizwe sakwa Zondi is led: iNkosi Zondi, the Traditional Council, the Development Committee, the pillar leads and community structures.",
      },
    ],
  }),
  component: LeadershipPage,
});

const pillarRoutes = [
  "/programs/communication",
  "/programs/economic-development",
  "/programs/social-development",
  "/programs/safety-security",
  "/programs/women-empowerment",
  "/programs/agriculture",
  "/programs/youth-development",
] as const;

const content = {
  en: {
    eyebrow: "About us",
    title: "Leadership & Governance",
    intro:
      "How iSizwe sakwa Zondi is led, and how decisions, projects and community voices connect.",
    orgTitle: "How we are organised",
    org: [
      "iNkosi Zondi",
      "Traditional Council",
      "Development Committee",
      "Seven pillar leads",
      "Izinduna · Community Advisory Forum · Youth Committee · Women's Committee",
    ],
    inkosiTitle: "iNkosi Zondi",
    inkosiBody:
      "iNkosi Zondi stands at the apex of leadership, supported by the Traditional Council, the Development Committee, the pillar leads and the community access channels.",
    inkosiPending:
      "An official profile and photograph will be published here once approved by the Traditional Council.",
    bodiesTitle: "Governance structures",
    roleLabel: "Responsibility:",
    compLabel: "Made up of:",
    bodies: [
      {
        name: "Traditional Council",
        role: "Overall oversight, policy approval and community representation.",
        comp: "The Chief and appointed council members, with at least one-third women.",
      },
      {
        name: "Development Committee",
        role: "Project implementation, monitoring and reporting.",
        comp: "Representatives from each pillar.",
      },
      {
        name: "Community Advisory Forum",
        role: "Community feedback and accountability.",
        comp: "Elected community representatives.",
      },
      {
        name: "Youth Committee",
        role: "Youth programme design and implementation.",
        comp: "Young people from the community.",
      },
      {
        name: "Women's Committee",
        role: "Women's programme design and implementation.",
        comp: "Women from the community.",
      },
    ],
    pillarsTitle: "Pillar leads",
    pillarsIntro:
      "Each pillar is led by a designated committee member who is accountable to the Development Committee and the Traditional Council. Names will be published once they are confirmed by the Council.",
    leadTbc: "Lead: to be confirmed",
    pillars: [
      {
        name: "Communication",
        body: "Manages official channels, the Chief's communication office, website content, public notices, appointment access and feedback registers.",
      },
      {
        name: "Economic Development",
        body: "Coordinates solar access, the market hub, indigenous knowledge enterprises, forestry value chains and partnerships.",
      },
      {
        name: "Social Development",
        body: "Oversees the community library and information hub, homework clubs, adult education, health and nutrition awareness and community cohesion.",
      },
      {
        name: "Safety and Security",
        body: "Leads the safety audit, the Community Peace Committee, village bylaws, community watch, lighting, CCTV and safety alerts.",
      },
      {
        name: "Women Empowerment",
        body: "Leads women's livelihoods, girl-child development, financial inclusion, leadership participation and gender-based violence prevention and referral.",
      },
      {
        name: "Agriculture and Rural Development",
        body: "Coordinates household food gardens, cooperatives, climate-resilient farming, value-added processing, beekeeping and market access.",
      },
      {
        name: "Youth Development",
        body: "Maintains the youth skills database, coordinates NYDA and YES4Youth support, and facilitates technical and digital skills training.",
      },
    ],
    commTitle: "Roles that keep the community connected",
    comm: [
      {
        name: "Traditional Council Secretary",
        body: "Keeps official records, minutes, notices and correspondence, and makes sure decisions reach the pillar leads and community structures.",
      },
      {
        name: "Communications Lead",
        body: "Coordinates messaging across all channels and brings community feedback to the Council.",
      },
      {
        name: "Izinduna and village representatives",
        body: "Pass messages on locally, collect issues from households and escalate urgent matters through the Council Secretary.",
      },
      {
        name: "Community meetings (imbizos)",
        body: "A quarterly public meeting to report progress, receive community input and explain Council decisions.",
      },
    ],
    membersTitle: "Council members and Izinduna",
    membersPending:
      "The list of Traditional Council members, Izinduna and the areas they serve will be published here once it has been confirmed by the Council.",
    source: "Structure as proposed in the Council's Strategic Framework.",
    viewPillars: "See the pillars",
    contactCta: "Contact the office",
  },
  zu: {
    eyebrow: "Mayelana nathi",
    title: "Ubuholi Nokubusa",
    intro:
      "Indlela isizwe sakwaZondi esiholwa ngayo, nendlela izinqumo, amaphrojekthi namazwi omphakathi axhumana ngayo.",
    orgTitle: "Indlela esihlelwe ngayo",
    org: [
      "iNkosi uZondi",
      "Isigungu Sendabuko",
      "Ikomidi Lentuthuko",
      "Abaholi bezinsika eziyisikhombisa",
      "Izinduna · Inkundla Yokululeka Yomphakathi · Ikomidi Lentsha · Ikomidi Labesifazane",
    ],
    inkosiTitle: "iNkosi uZondi",
    inkosiBody:
      "iNkosi uZondi ime esihlokweni sobuholi, isekelwe yiSigungu Sendabuko, yiKomidi Lentuthuko, abaholi bezinsika nezindlela zomphakathi zokufinyelela.",
    inkosiPending:
      "Iphrofayili esemthethweni nesithombe kuzoshicilelwa lapha uma kuvunyiwe yiSigungu Sendabuko.",
    bodiesTitle: "Izakhiwo zokubusa",
    roleLabel: "Umsebenzi:",
    compLabel: "Siqukethe:",
    bodies: [
      {
        name: "Isigungu Sendabuko",
        role: "Ukuqapha jikelele, ukugunyaza izinqubomgomo nokumela umphakathi.",
        comp: "INkosi namalungu esigungu ahlonziwe, anengxenye yesithathu okungenani yabesifazane.",
      },
      {
        name: "Ikomidi Lentuthuko",
        role: "Ukuqalisa amaphrojekthi, ukuwabhekelela nokubika.",
        comp: "Abamele insika ngayinye.",
      },
      {
        name: "Inkundla Yokululeka Yomphakathi",
        role: "Impendulo yomphakathi nokuziphendulela.",
        comp: "Abamele umphakathi abakhethiwe.",
      },
      {
        name: "Ikomidi Lentsha",
        role: "Ukuklama nokuqalisa izinhlelo zentsha.",
        comp: "Intsha yomphakathi.",
      },
      {
        name: "Ikomidi Labesifazane",
        role: "Ukuklama nokuqalisa izinhlelo zabesifazane.",
        comp: "Abesifazane bomphakathi.",
      },
    ],
    pillarsTitle: "Abaholi bezinsika",
    pillarsIntro:
      "Insika ngayinye iholwa yilungu lekomidi elonziwe eliziphendulela kuKomidi Lentuthuko nakuSigungu Sendabuko. Amagama azoshicilelwa uma eqinisekiswe yiBandla.",
    leadTbc: "Umholi: kuzoqinisekiswa",
    pillars: [
      {
        name: "Ukuxhumana",
        body: "Kuphatha iziteshi ezisemthethweni, ihhovisi lokuxhumana leNkosi, okuqukethwe kuwebhusayithi, izaziso zomphakathi, ukubhukha isikhathi namarejista empendulo.",
      },
      {
        name: "Ukuthuthukiswa Komnotho",
        body: "Kuhlanganisa ukufinyelela kwamandla elanga, ihabhu yesikhulumi, amabhizinisi olwazi lwendabuko, uchungechunge lwenani lehlathi nobambiswano.",
      },
      {
        name: "Ukuthuthukiswa Komphakathi",
        body: "Kubheka umtapo wezincwadi womphakathi nesikhungo solwazi, amaklabhu emisebenzi yasekhaya, imfundo yabadala, ukwazisa ngempilo nokudla okunempilo nokubumbana komphakathi.",
      },
      {
        name: "Ukuphepha Nezokuvikela",
        body: "Kuhola ucwaningo lokuphepha, iKomidi Lokuthula Komphakathi, imithetho yamadolobhana, ukuqapha komphakathi, ukukhanyisa, ama-CCTV nezixwayiso zokuphepha.",
      },
      {
        name: "Ukunikwa Amandla Kwabesifazane",
        body: "Kuhola ukuziphilisa kwabesifazane, intuthuko yentombazane, ukufinyelela ezimalini, ukubamba iqhaza ebuholini nokuvimbela nokudlulisela ukuhlukunyezwa ngokobulili.",
      },
      {
        name: "Ezolimo Nentuthuko Yasemakhaya",
        body: "Kuhlanganisa izingadi zokudla zasemakhaya, amakhophilethivu, ukulima okumelana nesimo sezulu, ukucubungula, ukulima izinyosi nokufinyelela ezimakethe.",
      },
      {
        name: "Ukuthuthukiswa Kwentsha",
        body: "Kugcina uhlu lwamakhono entsha, kuxhumanisa usizo lwe-NYDA ne-YES4Youth, futhi kuqinisekisa ukuqeqeshwa kwamakhono obuchwepheshe nawedijithali.",
      },
    ],
    commTitle: "Izindima ezigcina umphakathi uxhumene",
    comm: [
      {
        name: "Unobhala Wesigungu Sendabuko",
        body: "Ugcina amarekhodi asemthethweni, amaminithi, izaziso nezincwadi, futhi aqinisekise ukuthi izinqumo zifinyelela kubaholi bezinsika nasezakhiweni zomphakathi.",
      },
      {
        name: "Umholi Wokuxhumana",
        body: "Uhlanganisa imilayezo kuzo zonke iziteshi futhi alethe impendulo yomphakathi eBandleni.",
      },
      {
        name: "Izinduna nabameleli bamadolobhana",
        body: "Badlulisela imilayezo endaweni, baqoqe izindaba emakhaya futhi bayise phezulu ezephuthumayo ngoNobhala Wesigungu.",
      },
      {
        name: "Imihlangano yomphakathi (izimbizo)",
        body: "Umhlangano womphakathi wekota wokubika inqubekela phambili, wokwamukela imibono yomphakathi nowokuchaza izinqumo zeBandla.",
      },
    ],
    membersTitle: "Amalungu esigungu nezinduna",
    membersPending:
      "Uhlu lwamalungu eSigungu Sendabuko, izinduna nezindawo ezisebenzelayo luzoshicilelwa lapha uma luqinisekiswe yiBandla.",
    source: "Isakhiwo njengoba siphakanyiswe ku-Strategic Framework yeBandla.",
    viewPillars: "Bheka izinsika",
    contactCta: "Xhumana nehhovisi",
  },
} as const;

function LeadershipPage() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <section className="mt-12 rounded-sm border-2 border-[color:var(--gold)] bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl">{c.inkosiTitle}</h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">{c.inkosiBody}</p>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
          {c.inkosiPending}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.orgTitle}</h2>
        <ol className="mx-auto mt-6 max-w-2xl">
          {c.org.map((tier, i) => (
            <li key={tier} className="text-center">
              <div
                className={`rounded-sm border bg-card px-5 py-4 font-display text-lg ${
                  i === 0 ? "border-2 border-[color:var(--gold)]" : ""
                }`}
              >
                {tier}
              </div>
              {i < c.org.length - 1 && (
                <div aria-hidden="true" className="py-2 text-[color:var(--gold)]">
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.bodiesTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {c.bodies.map((b) => (
            <div key={b.name} className="rounded-sm border bg-card p-6">
              <h3 className="font-display text-lg">{b.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong className="text-foreground">{c.roleLabel}</strong> {b.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">{c.compLabel}</strong> {b.comp}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.pillarsTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{c.pillarsIntro}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {c.pillars.map((p, i) => (
            <Link
              key={p.name}
              to={pillarRoutes[i]}
              className="group block rounded-sm border bg-card p-6 transition hover:border-[color:var(--gold)]"
            >
              <h3 className="font-display text-lg transition group-hover:text-[color:var(--royal)]">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {c.leadTbc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.commTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {c.comm.map((r) => (
            <div key={r.name} className="rounded-sm border bg-card p-6">
              <h3 className="font-display text-lg">{r.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.membersTitle}</h2>
        <p className="mt-4 rounded-sm border border-dashed p-5 text-sm text-muted-foreground">
          {c.membersPending}
        </p>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">{c.source}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/programs/communication"
          className="inline-block rounded-full border border-[color:var(--royal)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal)] transition hover:bg-[color:var(--royal)] hover:text-background"
        >
          {c.viewPillars}
        </Link>
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
