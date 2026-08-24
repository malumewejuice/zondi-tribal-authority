import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Frequently asked questions about the Zondi Tribal Authority, its programmes, land matters and how to get help.",
      },
    ],
  }),
  component: FaqsPage,
});

const content = {
  en: {
    eyebrow: "Resources",
    title: "Frequently Asked Questions",
    intro:
      "Answers to common questions about the Zondi Tribal Authority, our programmes, and how to get support.",
    faqGroups: [
      {
        group: "About the Traditional Council",
        items: [
          {
            q: "What area does the Zondi Traditional Council serve?",
            a: "The Zondi Traditional Council serves the households of Ward 2, Nkandla, within KwaZulu-Natal, under the leadership of Chief Zondi and the Senior Headman.",
          },
          {
            q: "How do I contact the Chief or Council?",
            a: "Use the Contact page to send a message, or approach your local induna, who will direct your matter to the Council.",
          },
          {
            q: "Are Traditional Council meetings open to residents?",
            a: "Yes. Imbizo (community meetings) are held periodically where residents can raise concerns directly and hear feedback on decisions.",
          },
        ],
      },
      {
        group: "Programmes & applications",
        items: [
          {
            q: "Who is eligible to apply for youth or job programmes?",
            a: "Eligibility depends on the specific programme — most youth opportunities require applicants to be South African citizens within a set age range and currently unemployed. Check each portal's requirements before applying.",
          },
          {
            q: "Does it cost anything to apply for a job or programme?",
            a: "No. Applications through YES4Youth, KZN Provincial Opportunities, DPSA and the Zondi Traditional Authority are always free. Never pay anyone who asks for money to 'secure' a job or application.",
          },
          {
            q: "Where can I get help with my application?",
            a: "Visit the Nkandla Local Municipality offices, a Thusong Service Centre, or approach the Traditional Council for guidance on completing applications.",
          },
        ],
      },
      {
        group: "Land & customary matters",
        items: [
          {
            q: "How do I apply for a residential or arable site?",
            a: "Approach your local induna first. They will guide you through the Traditional Council's land allocation process, which follows customary procedure.",
          },
          {
            q: "How are disputes between neighbours resolved?",
            a: "Most disputes are first brought to the induna, then, if unresolved, to the Traditional Council or community court. See the Community Court & Laws page for more detail.",
          },
        ],
      },
      {
        group: "Getting help",
        items: [
          {
            q: "Who do I contact in a safety emergency?",
            a: "Call SAPS on 10111 for any emergency. For gender-based violence support, call the GBV Command Centre on 0800 428 428, available 24 hours a day.",
          },
          {
            q: "I need help with substance abuse — where do I start?",
            a: "Call the Department of Social Development's Substance Abuse Line on 0800 12 13 14, or contact SANCA. Both offer free, confidential support.",
          },
        ],
      },
    ],
    footnote: "Don't see your question here? Reach out and we'll help directly.",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinsiza",
    title: "Imibuzo Ejwayelekile",
    intro:
      "Izimpendulo zemibuzo ejwayelekile mayelana Nesigungu Sendabuko SakwaZondi, izinhlelo zethu, nendlela yokuthola usizo.",
    faqGroups: [
      {
        group: "Mayelana Nesigungu Sendabuko",
        items: [
          {
            q: "Yiziphi izindawo ezisizwa Isigungu Sendabuko SakwaZondi?",
            a: "Isigungu Sendabuko SakwaZondi sisiza imizi yeWadi 2, eNkandla, KwaZulu-Natali, ngaphansi kobuholi beNkosi uZondi kanye Nenduna Enkulu.",
          },
          {
            q: "Ngingayixhumana kanjani iNkosi noma iSigungu?",
            a: "Sebenzisa ikhasi Lokuxhumana ukuthumela umlayezo, noma sondela enduneni yakini, ezoqondisa indaba yakho eSigungwini.",
          },
          {
            q: "Ingabe imihlangano yeSigungu Sendabuko ivulekele izakhamizi?",
            a: "Yebo. Imbizo (imihlangano yomphakathi) yenzeka njalo lapho izakhamizi zingaphakamisa khona izinkinga ngokuqondile futhi zizwe impendulo ngezinqumo.",
          },
        ],
      },
      {
        group: "Izinhlelo Nezicelo",
        items: [
          {
            q: "Ubani ofanelekile ukufaka isicelo sezinhlelo zentsha noma zomsebenzi?",
            a: "Ukufaneleka kuya ngohlelo — amanani amaningi ezentsha adinga ukuba abafakisicelo babe yizakhamizi zaseNingizimu Afrika ezisebangeni lweminyaka elithile futhi bengaqashiwe njengamanje. Hlola izidingo zohlelo ngalunye ngaphambi kokufaka isicelo.",
          },
          {
            q: "Ingabe kudingeka imali ukufaka isicelo somsebenzi noma uhlelo?",
            a: "Cha. Izicelo ngokusebenzisa iYES4Youth, Amathuba Esifundazwe iKZN, iDPSA nesigungu Sendabuko SakwaZondi zihlala zingabizi mali. Ungakhokheli muntu ocela imali ‘ukuqinisekisa' umsebenzi noma isicelo.",
          },
          {
            q: "Ngingathola kuphi usizo ngesicelo sami?",
            a: "Vakashela amahhovisi kaMasipala Wasekhaya waseNkandla, iThusong Service Centre, noma sondela eSigungwini Sendabuko ukuze uthole ukwelulekwa ngokugcwalisa izicelo.",
          },
        ],
      },
      {
        group: "Umhlaba Nezindaba Zesiko",
        items: [
          {
            q: "Ngingasifaka kanjani isicelo sesiza sokuhlala noma sokulima?",
            a: "Sondela kuqala enduneni yakini. Izokuqondisa ohlelweni lweSigungu Sendabuko lokwabelwa umhlaba, olulandela inqubo yesiko.",
          },
          {
            q: "Izingxabano phakathi kwamakhelwane zixazululwa kanjani?",
            a: "Izingxabano eziningi ziqala ziyiswa enduneni, bese, uma zingaxazululwa, ziyiswa eSigungwini Sendabuko noma enkantolo yomphakathi. Bheka ikhasi Lenkantolo Yomphakathi Nemithetho ukuze uthole imininingwane eyengeziwe.",
          },
        ],
      },
      {
        group: "Ukuthola Usizo",
        items: [
          {
            q: "Ngixhumana nobani esimweni esiphuthumayo sokuphepha?",
            a: "Shayela iSaphesi (SAPS) ku-10111 nganoma yisiphi isimo esiphuthumayo. Ngosizo lodlame olususelwa ebulilini, shayela iGBV Command Centre ku-0800 428 428, etholakala amahora angama-24 osuku.",
          },
          {
            q: "Ngidinga usizo ngokusetshenziswa kwezidakamizwa — ngiqala kuphi?",
            a: "Shayela iSubstance Abuse Line yoMnyango Wezokuthuthukiswa Komphakathi ku-0800 12 13 14, noma uxhumane ne-SANCA. Bobabili banikeza usizo olumahhala nolungayimfihlo.",
          },
        ],
      },
    ],
    footnote: "Awuwuboni umbuzo wakho lapha? Sithinte futhi sizokusiza ngqo.",
    contactCta: "Xhumana nathi",
  },
} as const;

function FaqsPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-12 space-y-12">
        {c.faqGroups.map((group) => (
          <div key={group.group}>
            <h2 className="font-display text-2xl md:text-3xl">{group.group}</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {group.items.map((item) => (
                <details key={item.q} className="group rounded-sm border bg-card p-5">
                  <summary className="cursor-pointer list-none font-display text-base text-foreground">
                    {item.q}
                    <span className="float-right text-[color:var(--gold)] group-open:hidden">+</span>
                    <span className="float-right hidden text-[color:var(--gold)] group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-14 max-w-3xl text-xs text-muted-foreground">{c.footnote}</p>
      <Link
        to="/contact"
        className="mt-4 inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
      >
        {c.contactCta}
      </Link>
    </main>
  );
}
