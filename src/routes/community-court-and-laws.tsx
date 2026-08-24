import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/community-court-and-laws")({
  head: () => ({
    meta: [
      { title: "Community Court & Laws — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "How the Zondi community court resolves disputes under customary law, and the legal framework that governs traditional justice in South Africa.",
      },
    ],
  }),
  component: CommunityCourtPage,
});

const content = {
  en: {
    eyebrow: "Resources",
    title: "Community Court & Laws",
    intro:
      "The Zondi community court resolves everyday disputes according to customary law — informally, restoratively, and close to home — within the framework of South African law.",
    rolesTitle: "Core Roles and Functions",
    rolesLede:
      "Traditional councils handle local, day-to-day community administration, predominantly in rural areas:",
    coreRoles: [
      {
        title: "Customary Law",
        body: "Resolving domestic, property, and community disputes using cultural protocols.",
      },
      {
        title: "Land Administration",
        body: "Managing communal lands, advising on allocation, and coordinating rural human settlements.",
      },
      {
        title: "Heritage Preservation",
        body: "Promoting cultural traditions, indigenous practices, and local social cohesion.",
      },
      {
        title: "Municipal Cooperation",
        body: "Assisting local municipalities with service delivery, social welfare initiatives, and local economic planning.",
      },
    ],
    limitsTitle: "⚖️ Legal Status and Constitutional Limits",
    limitsLede:
      "While traditional leaders possess deep historical and cultural legitimacy, their political powers are strictly bound by the South African Constitution.",
    constitutionalLimits: [
      {
        title: "No Taxation Power",
        body: 'The Constitutional Court ruled that traditional leaders lack the statutory authority to impose compulsory "tribal levies" or taxes on community residents.',
      },
      {
        title: "Subordinate to Municipalities",
        body: "Local government elections cover the entire territory of South Africa, meaning ward councillors hold final authority over state-funded municipal development budgets and formal land re-zoning permissions.",
      },
      {
        title: "Accountability",
        body: "Modern councils are legally mandated to include democratically elected representatives and distinct quotas for female leadership to align with constitutional equality principles.",
      },
    ],
    processTitle: "How a matter is heard",
    process: [
      {
        step: "1. Approach your induna",
        body: "Most disputes start here. Your local induna will hear both sides informally and try to resolve the matter through mediation.",
      },
      {
        step: "2. Traditional Council / community court",
        body: "If the matter isn't resolved, it's brought before the community court, presided over according to customary law and restorative justice principles.",
      },
      {
        step: "3. A fair hearing",
        body: "Both parties are heard, may bring a person of their choice to assist them, and decisions must be impartial. Women and vulnerable groups are entitled to full and equal participation.",
      },
      {
        step: "4. Escalation, if needed",
        body: "Certain matters — including all criminal matters — fall outside the community court's authority and must go to SAPS or the Magistrate's Court instead.",
      },
    ],
    handledTitle: "What the community court handles",
    handled: [
      "Boundary and land-use disputes between neighbours",
      "Disputes over damage to property",
      "Family and customary matters referred by community members",
      "Minor civil disagreements suited to mediation",
    ],
    notHandledTitle: "What it does not handle",
    notHandled: [
      "Criminal matters (theft, assault, and similar) — these go to SAPS and the Magistrate's Court",
      "Serious matters involving violence or abuse",
      "Matters requiring formal legal representation or a ruling under national legislation",
    ],
    legalFrameworkTitle: "The legal framework",
    legalFramework: [
      {
        title: "The Constitution of South Africa",
        body: "Section 211 recognises the institution, status and role of traditional leadership according to customary law, subject always to the Constitution.",
      },
      {
        title: "Traditional Leadership and Governance Framework Act (2003)",
        body: "The national law recognising the offices of kings, senior traditional leaders, headmen and headwomen, and their role in facilitating justice.",
      },
      {
        title: "KwaZulu-Natal Traditional Leadership and Governance Act 5 of 2005",
        body: "The provincial legislation governing traditional leadership structures and traditional councils within KwaZulu-Natal, including the Zondi Traditional Council.",
      },
      {
        title: "Traditional Courts legislation",
        body: "National legislation sets out how traditional courts function — informally, according to customary law, with an emphasis on restorative justice rather than punishment, and always subject to the Constitution.",
      },
    ],
    disclaimer:
      "This page provides general information and is not formal legal advice. For guidance on a specific matter, approach your induna or the Traditional Council directly, or consult a qualified legal advisor.",
    supportCta: "Support structure",
    contactCta: "Contact the Chief",
  },
  zu: {
    eyebrow: "Izinsiza",
    title: "Inkantolo Yomphakathi Nemithetho",
    intro:
      "Inkantolo yomphakathi yakwaZondi ixazulula izingxabano zansuku zonke ngokomthetho wesiko — ngokungagcinwa amaphepha, ngokwakha kabusha, futhi eduze nekhaya — ngaphansi kohlaka lomthetho waseNingizimu Afrika.",
    rolesTitle: "Izindima Nemisebenzi Eyisisekelo",
    rolesLede:
      "Izigungu zendabuko ziphatha ukuphathwa kwezindaba zomphakathi zansuku zonke zasendaweni, ikakhulukazi ezindaweni zasemakhaya:",
    coreRoles: [
      {
        title: "Umthetho Wesiko",
        body: "Ukuxazulula izingxabano zasekhaya, zempahla, nezomphakathi ngokusebenzisa izinqubo zesiko.",
      },
      {
        title: "Ukuphathwa Komhlaba",
        body: "Ukuphatha umhlaba womphakathi, ukweluleka ngokwabelwa, kanye nokuhlanganisa ukuhlaliswa kwabantu basemakhaya.",
      },
      {
        title: "Ukugcinwa Kwamagugu",
        body: "Ukukhuthaza amasiko esiko, izinqubo zomdabu, kanye nobunye bomphakathi wendawo.",
      },
      {
        title: "Ukusebenzisana Nomasipala",
        body: "Ukusiza omasipala bendawo ngokulethwa kwezinsizakalo, izinhlelo zenhlalakahle, kanye nokuhlelwa komnotho wendawo.",
      },
    ],
    limitsTitle: "⚖️ Isimo Somthetho Nemikhawulo Yomthethosisekelo",
    limitsLede:
      "Nakuba abaholi bendabuko benobufakazi obujulile bomlando nesiko, amandla abo ezombusazwe abekwe emkhawulweni ngokuqinile uMthethosisekelo waseNingizimu Afrika.",
    constitutionalLimits: [
      {
        title: "Awukho Amandla Okuthelisa",
        body: 'INkantolo Yomthethosisekelo yanquma ukuthi abaholi bendabuko abanawo amandla omthetho okuphoqelela "izinkokhelo zesizwe" noma intela ezakhamizini zomphakathi.',
      },
      {
        title: "Baphansi Kukamasipala",
        body: "Ukhetho lukahulumeni wasekhaya lumbandakanya sonke isifunda saseNingizimu Afrika, okusho ukuthi amakhansela ewadi anamandla okugcina kubhajethi zentuthuko zikamasipala ezixhaswa uhulumeni nasezimvumeni ezisemthethweni zokuguqulwa komhlaba.",
      },
      {
        title: "Ukuphendulela",
        body: "Izigungu zanamuhla zinesibopho ngokomthetho sokufaka abamele abakhethwe ngentando yeningi kanye namaqoqo aqondene nobuholi bamakhosikazi ukuhambisana nemigomo yobulingani yomthethosisekelo.",
      },
    ],
    processTitle: "Indaba Iyalalelwa Kanjani",
    process: [
      {
        step: "1. Sondela Enduneni Yakini",
        body: "Izingxabano eziningi ziqala lapha. Induna yakini izolalela zombili izinhlangothi ngokungagcinwa amaphepha futhi izame ukuxazulula indaba ngokulamula.",
      },
      {
        step: "2. Isigungu Sendabuko / Inkantolo Yomphakathi",
        body: "Uma indaba ingaxazululwa, iyisiwa enkantolo yomphakathi, ephethwe ngokomthetho wesiko nemigomo yokwakha kabusha ubulungiswa.",
      },
      {
        step: "3. Ukulalelwa Okulungile",
        body: "Zombili izinhlangothi ziyalalelwa, zingaletha umuntu ozikhethele yena ukuze azisize, futhi izinqumo kufanele zingakhethi hlangothi. Abesifazane namaqembu asemphefumulweni banelungelo lokubamba iqhaza ngokugcwele nangokulinganayo.",
      },
      {
        step: "4. Ukwenyuselwa, Uma Kudingeka",
        body: "Ezinye izindaba — kufaka phakathi zonke izindaba zobugebengu — azingaphansi kwamandla enkantolo yomphakathi futhi kufanele ziyiswe eSaphesi noma eNkantolo Yesigcawu.",
      },
    ],
    handledTitle: "Lokho Okuphathwa Yinkantolo Yomphakathi",
    handled: [
      "Izingxabano zemingcele nokusetshenziswa komhlaba phakathi kwamakhelwane",
      "Izingxabano zomonakalo empahleni",
      "Izindaba zomndeni nezesiko ezidluliselwe ngamalungu omphakathi",
      "Ukungezwani okuncane kwezomthetho okufanele ukulamula",
    ],
    notHandledTitle: "Lokho Okungaphathwa",
    notHandled: [
      "Izindaba zobugebengu (ukweba, ukuhlukumeza, nokufana nakho) — lezi ziya eSaphesi naseNkantolo Yesigcawu",
      "Izindaba ezinzima ezibandakanya udlame noma ukuhlukunyezwa",
      "Izindaba ezidinga ukumelwa okusemthethweni noma isinqumo ngaphansi komthetho wesizwe",
    ],
    legalFrameworkTitle: "Uhlaka Lomthetho",
    legalFramework: [
      {
        title: "UMthethosisekelo WaseNingizimu Afrika",
        body: "Isigaba 211 sivuma isikhungo, isimo kanye nendima yobuholi bendabuko ngokomthetho wesiko, ngaphansi njalo koMthethosisekelo.",
      },
      {
        title: "Traditional Leadership and Governance Framework Act (2003)",
        body: "Umthetho wesizwe ovuma izikhundla zamakhosi, abaholi bendabuko abakhulu, izinduna namakhosikazi ezinduna, nendima yabo ekulethweni kobulungiswa.",
      },
      {
        title: "KwaZulu-Natal Traditional Leadership and Governance Act 5 of 2005",
        body: "Umthetho wesifundazwe ophethe izakhiwo zobuholi bendabuko nezigungu zendabuko ngaphakathi kwaKwaZulu-Natali, kufaka phakathi Isigungu Sendabuko SakwaZondi.",
      },
      {
        title: "Umthetho Wezinkantolo Zendabuko",
        body: "Umthetho wesizwe uchaza indlela izinkantolo zendabuko ezisebenza ngayo — ngokungagcinwa amaphepha, ngokomthetho wesiko, ugcizelela ukwakha kabusha kunokujezisa, futhi ngaso sonke isikhathi ngaphansi koMthethosisekelo.",
      },
    ],
    disclaimer:
      "Leli khasi linikeza ulwazi olujwayelekile futhi akulona iseluleko esisemthethweni. Ngokwelulekwa endabeni ethile, sondela enduneni yakini noma eSigungwini Sendabuko ngokuqondile, noma ubonisane nomeluleki wezomthetho oqeqeshiwe.",
    supportCta: "Isakhiwo Sokusekelwa",
    contactCta: "Xhumana neNkosi",
  },
} as const;

function CommunityCourtPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-12">
        <h2 className="font-display text-2xl md:text-3xl">{c.rolesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{c.rolesLede}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {c.coreRoles.map((r) => (
            <div key={r.title} className="rounded-sm border bg-card p-6">
              <h3 className="font-display text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.limitsTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{c.limitsLede}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.constitutionalLimits.map((item) => (
            <div key={item.title} className="rounded-sm border-l-4 border-[color:var(--gold)] bg-card p-6">
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.processTitle}</h2>
        <ol className="mt-6 space-y-4">
          {c.process.map((p) => (
            <li key={p.step} className="rounded-sm border-l-4 border-[color:var(--gold)] bg-card p-6">
              <div className="font-display text-lg">{p.step}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-sm border bg-card p-6">
          <h3 className="font-display text-lg text-[color:var(--royal)]">{c.handledTitle}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {c.handled.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border bg-card p-6">
          <h3 className="font-display text-lg text-[color:var(--royal)]">{c.notHandledTitle}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {c.notHandled.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl">{c.legalFrameworkTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {c.legalFramework.map((l) => (
            <div key={l.title} className="rounded-sm border bg-card p-6">
              <h3 className="font-display text-lg">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-3xl text-xs text-muted-foreground">{c.disclaimer}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/about-us/support-structure"
          className="inline-block rounded-full border border-[color:var(--royal)] px-5 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-[color:var(--royal)] hover:text-background"
        >
          {c.supportCta}
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
