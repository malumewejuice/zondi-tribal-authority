import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Agricultural support programmes for households and cooperatives in Ward 2, Nkandla.",
      },
    ],
  }),
  component: AgriculturePage,
});

const content = {
  en: {
    eyebrow: "Programs",
    title: "Agriculture",
    intro:
      "Farming remains central to life in Nkandla. The Traditional Council supports households and cooperatives in accessing land, training and government agricultural programmes.",
    programmes: [
      {
        title: "Land access & allocation",
        body: "The Traditional Council assists households and cooperatives with applications for arable and grazing land under customary tenure.",
      },
      {
        title: "Extension & training support",
        body: "Referrals to the Department of Agriculture's extension officers for advice on crops, livestock health and soil management.",
      },
      {
        title: "Cooperative development",
        body: "Support for farmers wishing to form or join agricultural cooperatives, improving access to markets and funding.",
      },
      {
        title: "Food security programmes",
        body: "Coordination with government food-garden and subsistence farming initiatives for vulnerable households.",
      },
    ],
    footnote:
      "For land allocation enquiries, approach your local induna first, who will guide you through the Traditional Council's process.",
    contactCta: "Contact us",
  },
  zu: {
    eyebrow: "Izinhlelo",
    title: "Ezolimo",
    intro:
      "Ukulima kusahlala kuyisisekelo sempilo eNkandla. Isigungu Sendabuko sisekela imizi nezinhlangano zokubambisana ekufinyeleleni umhlaba, uqeqesho nezinhlelo zikahulumeni zezolimo.",
    programmes: [
      {
        title: "Ukufinyelela Nokwabelwa Umhlaba",
        body: "Isigungu Sendabuko sisiza imizi nezinhlangano zokubambisana ngezicelo zomhlaba wokulima nowokudlisa izinkomo ngaphansi kokuphathwa kwendabuko.",
      },
      {
        title: "Ukusekelwa Ngoqeqesho Nokwelulekwa",
        body: "Ukudluliselwa kwabaphathi bokwelulekwa boMnyango Wezolimo ukuze uthole iseluleko ngezitshalo, impilo yezinkomo nokuphathwa komhlabathi.",
      },
      {
        title: "Ukuthuthukiswa Kokubambisana",
        body: "Ukusekelwa kwabalimi abafisa ukusungula noma ukujoyina izinhlangano zokubambisana zezolimo, kuthuthukisa ukufinyelela emakethe nasoxhasweni.",
      },
      {
        title: "Izinhlelo Zokuqinisekiswa Kokudla",
        body: "Ukuxhumana nezinhlelo zikahulumeni zezivande zokudla nokulima kokuziphilisa ezimindeni ezisemphefumulweni.",
      },
    ],
    footnote:
      "Ngemibuzo yokwabelwa umhlaba, sondela kuqala enduneni yakini, ezokuqondisa kuhlelo lweSigungu Sendabuko.",
    contactCta: "Xhumana nathi",
  },
} as const;

function AgriculturePage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {c.programmes.map((p) => (
          <div key={p.title} className="rounded-sm border bg-card p-6">
            <h3 className="font-display text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-xs text-muted-foreground">{c.footnote}</p>

      <Link
        to="/contact"
        className="mt-6 inline-block rounded-full bg-[color:var(--forest)] px-5 py-2 text-xs uppercase tracking-widest text-background transition hover:brightness-110"
      >
        {c.contactCta}
      </Link>
    </main>
  );
}
