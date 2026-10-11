import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, type PillarContent } from "@/components/PillarPage";

export const Route = createFileRoute("/programs/economic-development")({
  head: () => ({
    meta: [
      { title: "Economic Development — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Solar power, local markets, indigenous knowledge enterprises and forestry value chains planned for Ward 2, Nkandla.",
      },
    ],
  }),
  component: EconomicDevelopmentPage,
});

const en: PillarContent = {
  eyebrow: "Pillars for Development",
  title: "Economic Development",
  intro:
    "Building the basic infrastructure and local enterprises that strengthen the village economy.",
  objectiveLabel: "Objective:",
  objective:
    "Build basic infrastructure that modernises the village economy and builds resilience against external utility disruptions.",
  initiativesTitle: "Key initiatives",
  initiatives: [
    {
      title: "Solar power project",
      body: "Solar systems for critical public spaces such as the chief's hall, the clinic and security lights, subsidised solar home kits for households, and training for local youth in solar installation and maintenance.",
    },
    {
      title: "Local commercial spaces",
      body: "A structured local market trading hub with shelter, water and sanitation, a market management committee, and links between vendors and women's agricultural cooperatives.",
    },
    {
      title: "Indigenous knowledge economy",
      body: "Community enterprises built on traditional crafts, medicines and cultural tourism, and opportunities in the wildlife and biodiversity economy.",
    },
    {
      title: "Forestry and wood-product value chain",
      body: "Community-managed tree plantations and local processing of wood products, such as furniture and specialised paper products, with training for youth and women.",
    },
  ],
  statusNote:
    "These are plans set out in the Council's Strategic Framework. Progress will be published here once it has been verified.",
  related: { to: "/programs/electricity-water", label: "Electricity and Water" },
  contactCta: "Contact the office",
};

const zu: PillarContent = {
  eyebrow: "Izinsika Zentuthuko",
  title: "Ukuthuthukiswa Komnotho",
  intro:
    "Ukwakha ingqalasizinda eyisisekelo namabhizinisi endawo aqinisa umnotho wesigodi.",
  objectiveLabel: "Inhloso:",
  objective:
    "Ukwakha ingqalasizinda eyisisekelo ethuthukisa umnotho wesigodi futhi yakhe amandla okumelana nokunqamuka kwezinsizakalo ezivela ngaphandle.",
  initiativesTitle: "Izinhlelo ezibalulekile",
  initiatives: [
    {
      title: "Iphrojekthi yamandla elanga",
      body: "Izinhlelo zelanga zezindawo zomphakathi ezibalulekile ezifana nehholo leNkosi, umtholampilo namalambu okuphepha, amakhithi elanga asekelwayo emakhaya, kanye nokuqeqesha intsha yasendaweni ekufakweni nasekugcinweni kwamapaneli elanga.",
    },
    {
      title: "Izindawo zokuhweba zendawo",
      body: "Ihabhu yesikhulumi ehlelekile enokusibekela, amanzi nokuzihlambulula, ikomidi lokulawula isikhulumi, nokuxhumanisa abathengisi namakhophilethivu ezolimo abesifazane.",
    },
    {
      title: "Umnotho wolwazi lwendabuko",
      body: "Amabhizinisi omphakathi akhelwe emisebenzi yezandla yendabuko, emithini yendabuko nasezokuvakasha zamasiko, namathuba emnothweni wezilwane zasendle nezinhlobonhlobo zemvelo.",
    },
    {
      title: "Uchungechunge lwenani lehlathi nemikhiqizo yamapulangwe",
      body: "Izivande zezihlahla ezilawulwa umphakathi nokucutshungulwa kwemikhiqizo yamapulangwe endaweni, njengefenisha nemikhiqizo ekhethekile yephepha, kuqeqeshwe intsha nabesifazane.",
    },
  ],
  statusNote:
    "Lena yizinhlelo ezibekwe kuStrategic Framework yeBandla. Inqubekela phambili izoshicilelwa lapha uma isiqinisekisiwe.",
  related: { to: "/programs/electricity-water", label: "Ugesi Namanzi" },
  contactCta: "Xhumana nehhovisi",
};

function EconomicDevelopmentPage() {
  return <PillarPage content={{ en, zu }} />;
}
