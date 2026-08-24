import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/about-us/support-structure")({
  head: () => ({
    meta: [
      { title: "Support Structure — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "How the Zondi Tribal Authority is supported: izinduna, the Traditional Council, the KZN House of Traditional Leaders and municipal partners in Ward 2, Nkandla.",
      },
      { property: "og:title", content: "Support Structure — Zondi Tribal Authority, Nkandla" },
      {
        property: "og:description",
        content:
          "Izinduna, the Traditional Council, provincial and national houses, and municipal partners supporting Ward 2, Nkandla.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SupportStructurePage,
});

const content = {
  en: {
    eyebrow: "About us",
    title: "Support Structure",
    intro:
      "The Zondi Tribal Authority does not work alone. It is supported by community structures and recognised houses of traditional leadership, and it cooperates with elected government.",
    chartTitle: "Leadership hierarchy",
    chartLede:
      "A visual overview of how authority and support flow from the Chief through the Senior Headman to the Traditional Council's supporting structures.",
    chartSvgTitle: "Zondi Traditional Authority organisational hierarchy",
    chartSvgDesc:
      "Chief Zondi sits at the top of the structure. The Senior Headman reports directly to the Chief. Below them, three structures operate in parallel: the Advisory Board, the Headmen, and Other Subcommittees.",
    nodeLabels: {
      chief: "Chief Zondi",
      seniorHeadman: "Senior Headman",
      advisoryBoard: "Advisory Board",
      headmen: "Headmen",
      subcommittees: "Other Subcommittees",
    },
    tierLabel: "Tier",
    tiers: [
      {
        title: "National",
        body: "National House of Traditional and Khoi-San Leaders — advises national government on custom and traditional leadership.",
      },
      {
        title: "Provincial",
        body: "KwaZulu-Natal House of Traditional Leaders — coordinates traditional leadership across the province.",
      },
      {
        title: "Local",
        body: "Zondi Traditional Council — Inkosi, izinduna and council members serving households of Ward 2, Nkandla.",
      },
    ],
    roles: [
      { title: "Izinduna", body: "Ward-level leaders who assist the Inkosi and are the first point of contact for households." },
      { title: "Traditional Council", body: "Deliberates on land, custom, disputes and development matters brought by the community." },
      { title: "Community meetings", body: "Imbizo where residents raise concerns and decisions are shared openly." },
      { title: "Municipal partners", body: "Cooperation with Nkandla Local Municipality on water, roads, housing and youth programmes." },
    ],
    footnote:
      "Traditional Councils operate within the framework of South African law and work alongside elected municipal structures.",
    contactCta: "Contact the Chief",
  },
  zu: {
    eyebrow: "Mayelana nathi",
    title: "Isakhiwo Sokusekelwa",
    intro:
      "Isigungu Sendabuko SakwaZondi asisebenzi sodwa. Sisekelwa yizakhiwo zomphakathi nezindlu ezamukelwe zobuholi bendabuko, futhi sisebenzisana nohulumeni okhethiwe.",
    chartTitle: "Uhlelo lobuholi",
    chartLede:
      "Ukubukwa okuvela emehlweni kwendlela igunya nokusekelwa okugeleza ngayo kusuka eNkosini kuya kuNduna Enkulu kuya ezakhiweni ezisekela Isigungu Sendabuko.",
    chartSvgTitle: "Uhlaka lwesizinda sesigungu Sendabuko SakwaZondi",
    chartSvgDesc:
      "INkosi uZondi ihlala esicongweni sesakhiwo. Induna Enkulu ibika ngokuqondile eNkosini. Ngaphansi kwabo, izakhiwo ezintathu zisebenza ngokufana: iBhodi Elelulekayo, Izinduna, kanye Nezinye Izikhungo.",
    nodeLabels: {
      chief: "INkosi uZondi",
      seniorHeadman: "Induna Enkulu",
      advisoryBoard: "IBhodi Elelulekayo",
      headmen: "Izinduna",
      subcommittees: "Ezinye Izikhungo",
    },
    tierLabel: "Izinga",
    tiers: [
      {
        title: "Kuzwelonke",
        body: "National House of Traditional and Khoi-San Leaders — yeluleka uhulumeni wesizwe ngamasiko nobuholi bendabuko.",
      },
      {
        title: "Esifundazweni",
        body: "Indlu YesiFundazwe iKwaZulu-Natali — ihlanganisa ubuholi bendabuko esifundazweni sonke.",
      },
      {
        title: "Endaweni",
        body: "Isigungu Sendabuko SakwaZondi — iNkosi, izinduna namalungu esigungu abasebenzela imizi yeWadi 2, eNkandla.",
      },
    ],
    roles: [
      { title: "Izinduna", body: "Abaholi bezinga lewadi abasiza iNkosi futhi abayindawo yokuqala yokuxhumana yemizi." },
      { title: "Isigungu Sendabuko", body: "Sikhulumela ngomhlaba, isiko, izingxabano nezindaba zentuthuko eziletha umphakathi." },
      { title: "Imihlangano yomphakathi", body: "Imbizo lapho izakhamizi ziphakamisa izinkinga futhi izinqumo zabelwana khona obala." },
      { title: "Abalingani bomasipala", body: "Ukusebenzisana noMasipala Wasekhaya waseNkandla ngamanzi, imigwaqo, izindlu kanye nezinhlelo zentsha." },
    ],
    footnote:
      "Izigungu Zendabuko zisebenza ngaphansi kohlaka lomthetho waseNingizimu Afrika futhi zisebenzisana nezakhiwo zikamasipala ezikhethiwe.",
    contactCta: "Xhumana neNkosi",
  },
} as const;

type HierarchyNode = {
  id: "chief" | "senior-headman" | "advisory-board" | "headmen" | "subcommittees";
  x: number;
  y: number;
  gap: "sides" | "right" | "left";
};

const hierarchyLayout: HierarchyNode[] = [
  { id: "chief", x: 400, y: 70, gap: "sides" },
  { id: "senior-headman", x: 210, y: 210, gap: "right" },
  { id: "advisory-board", x: 140, y: 360, gap: "sides" },
  { id: "headmen", x: 400, y: 360, gap: "sides" },
  { id: "subcommittees", x: 660, y: 360, gap: "sides" },
];

const NODE_RADIUS = 58;
const CIRC = 2 * Math.PI * NODE_RADIUS;

function NodeArc({ node, hovered }: { node: HierarchyNode; hovered: boolean }) {
  let dasharray = "";
  let rotate = 0;

  if (node.gap === "sides") {
    const dash = CIRC * 0.4;
    const gap = CIRC * 0.1;
    dasharray = `${dash} ${gap} ${dash} ${gap}`;
    rotate = -90;
  } else if (node.gap === "right") {
    const dash = CIRC * 0.72;
    const gap = CIRC * 0.28;
    dasharray = `${dash} ${gap}`;
    rotate = 135;
  } else {
    const dash = CIRC * 0.72;
    const gap = CIRC * 0.28;
    dasharray = `${dash} ${gap}`;
    rotate = -45;
  }

  return (
    <circle
      cx={node.x}
      cy={node.y}
      r={NODE_RADIUS}
      fill="none"
      stroke="var(--royal, #123a52)"
      strokeWidth={hovered ? 3.5 : 2.5}
      strokeLinecap="round"
      strokeDasharray={dasharray}
      transform={`rotate(${rotate} ${node.x} ${node.y})`}
      className="transition-all duration-200"
    />
  );
}

function nodeKeyToLabelKey(id: HierarchyNode["id"]) {
  return (
    {
      chief: "chief",
      "senior-headman": "seniorHeadman",
      "advisory-board": "advisoryBoard",
      headmen: "headmen",
      subcommittees: "subcommittees",
    } as const
  )[id];
}

function KingdomHierarchyChart({ c }: { c: (typeof content)["en"] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const chief = hierarchyLayout[0];
  const seniorHeadman = hierarchyLayout[1];
  const bottomTier = hierarchyLayout.slice(2);
  const trunkX = chief.x;
  const branchY = 290;

  return (
    <div className="mt-14">
      <h2 className="font-display text-2xl md:text-3xl">{c.chartTitle}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{c.chartLede}</p>

      <div className="mt-8 overflow-hidden rounded-sm border bg-card p-4 md:p-8">
        <svg
          viewBox="0 0 800 450"
          className="mx-auto h-auto w-full max-w-3xl"
          role="img"
          aria-labelledby="hierarchy-chart-title hierarchy-chart-desc"
        >
          <title id="hierarchy-chart-title">{c.chartSvgTitle}</title>
          <desc id="hierarchy-chart-desc">{c.chartSvgDesc}</desc>

          <g stroke="var(--royal, #123a52)" strokeWidth={2} fill="none">
            <line x1={trunkX} y1={chief.y + NODE_RADIUS} x2={trunkX} y2={branchY} />
            <line
              x1={trunkX}
              y1={seniorHeadman.y}
              x2={seniorHeadman.x + NODE_RADIUS}
              y2={seniorHeadman.y}
            />
            <line x1={bottomTier[0].x} y1={branchY} x2={bottomTier[2].x} y2={branchY} />
            {bottomTier.map((n) => (
              <line key={n.id} x1={n.x} y1={branchY} x2={n.x} y2={n.y - NODE_RADIUS} />
            ))}
          </g>

          {hierarchyLayout.map((node) => {
            const label = c.nodeLabels[nodeKeyToLabelKey(node.id)];
            return (
              <g
                key={node.id}
                tabIndex={0}
                role="img"
                aria-label={label}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId(null)}
                style={{
                  transformOrigin: `${node.x}px ${node.y}px`,
                  transform: hoveredId === node.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 150ms ease",
                }}
              >
                <NodeArc node={node} hovered={hoveredId === node.id} />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="select-none font-display"
                  style={{
                    fill: hoveredId === node.id ? "var(--gold, #b8892f)" : "var(--foreground, #1a1a1a)",
                    fontWeight: 700,
                    fontSize: node.id === "chief" ? 20 : 16,
                    transition: "fill 150ms ease",
                  }}
                >
                  {label.length > 14 ? (
                    <>
                      <tspan x={node.x} dy="-0.6em">
                        {label.split(" ").slice(0, -1).join(" ")}
                      </tspan>
                      <tspan x={node.x} dy="1.2em">
                        {label.split(" ").slice(-1)}
                      </tspan>
                    </>
                  ) : (
                    label
                  )}
                </text>
              </g>
            );
          })}
        </svg>

        <ul className="sr-only">
          <li>
            {c.nodeLabels.chief}
            <ul>
              <li>
                {c.nodeLabels.seniorHeadman}
                <ul>
                  <li>{c.nodeLabels.advisoryBoard}</li>
                  <li>{c.nodeLabels.headmen}</li>
                  <li>{c.nodeLabels.subcommittees}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SupportStructurePage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <main className="container-page py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{c.intro}</p>

      <KingdomHierarchyChart c={c} />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {c.tiers.map((tier, i) => (
          <div key={tier.title} className="rounded-sm border bg-card p-6">
            <span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">
              {c.tierLabel} {i + 1}
            </span>
            <h2 className="mt-2 font-display text-xl">{tier.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{tier.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {c.roles.map((r) => (
          <div key={r.title} className="rounded-sm border bg-card p-6">
            <h3 className="font-display text-lg">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
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
