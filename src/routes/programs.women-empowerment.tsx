import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, type PillarContent } from "@/components/PillarPage";

export const Route = createFileRoute("/programs/women-empowerment")({
  head: () => ({
    meta: [
      { title: "Women Empowerment — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "Livelihoods, skills, girl-child development, financial inclusion and gender-based violence support planned for women and girls in Ward 2, Nkandla.",
      },
    ],
  }),
  component: WomenEmpowermentPage,
});

const en: PillarContent = {
  eyebrow: "Pillars for Development",
  title: "Women Empowerment",
  intro:
    "Support for women and girls, particularly women who head households, to live safely, with dignity and with financial independence.",
  objectiveLabel: "Objective:",
  objective:
    "Empower women and the girl child, particularly women heading households, to achieve safety, dignity, financial independence and an improved quality of life through livelihoods, skills, education support, access to finance, leadership participation and coordinated prevention of and response to gender-based violence.",
  convenerLine: "Pillar convener: to be confirmed",
  initiativesTitle: "Key initiatives",
  initiatives: [
    {
      title: "Women-led livelihoods, skills and enterprise",
      body: "Training and shared facilities for sewing and textiles, catering and baking, beauty and creative trades, and digital and home-based business, backed by an equipment bank and enterprise incubator.",
    },
    {
      title: "Girl-child development, education and opportunity",
      body: "Mentorship and leadership circles, school retention and academic support, dignity and menstrual health support, and STEM, digital and career exposure.",
    },
    {
      title: "Women-headed household resilience and financial inclusion",
      body: "A confidential voluntary household register, financial literacy and savings groups, starter kits, and access to markets and procurement opportunities.",
    },
    {
      title: "Gender-based violence prevention, protection and referral",
      body: "Community dialogues, a confidential first-response and referral network, safe reporting channels, survivor recovery support and safeguarding rules for the girl child. The Council does not investigate criminal matters: survivors are referred to police, health, legal and social services.",
    },
  ],
  statusNote:
    "These are plans set out in the Council's Strategic Framework. Progress will be published here once it has been verified.",
  related: { to: "/programs/social-development", label: "Help and support lines" },
  contactCta: "Contact the office",
};

const zu: PillarContent = {
  eyebrow: "Izinsika Zentuthuko",
  title: "Ukunikwa Amandla Kwabesifazane",
  intro:
    "Ukusekela abesifazane nezintombazane, ikakhulukazi abesifazane abaphethe imizi, ukuze baphile ngokuphepha, ngesithunzi nangokuzimela ngezezimali.",
  objectiveLabel: "Inhloso:",
  objective:
    "Ukunikeza amandla abesifazane nezintombazane, ikakhulukazi abesifazane abaphethe imizi, ukuze bathole ukuphepha, isithunzi, ukuzimela ngezezimali nokuphila okungcono, ngemisebenzi yokuziphilisa, amakhono, usizo lwemfundo, ukufinyelela ezimalini, ukubamba iqhaza ebuholini nokuvimbela nokuphendula ngokubambisana ekuhlukunyezweni ngokobulili.",
  convenerLine: "Umkhokheli wale nsika: kuzoqinisekiswa",
  initiativesTitle: "Izinhlelo ezibalulekile",
  initiatives: [
    {
      title: "Imisebenzi yokuziphilisa, amakhono namabhizinisi aholwa abesifazane",
      body: "Ukuqeqeshwa nezindawo ezabiwayo zokuthunga, ukupheka nokubhaka, ubuhle nemisebenzi yezandla, namabhizinisi edijithali asekhaya, kusekelwe yibhange lemishini nehabhu yamabhizinisi.",
    },
    {
      title: "Ukuthuthukiswa kwentombazane, imfundo namathuba",
      body: "Ukuqondiswa nemibuthano yobuholi, ukuhlala esikoleni nosizo lwezifundo, ukusekelwa kwesithunzi nempilo yokuya esikhathini, kanye nokubonakaliswa kwe-STEM, ezedijithali nemisebenzi.",
    },
    {
      title: "Ukuqina kwemizi ephethwe ngabesifazane nokufinyelela ezimalini",
      body: "Irejista yemizi eyimfihlo nokuvolontiyela, ukufunda ngezimali namaqembu okonga, amakhithi okuqala, nokufinyelela ezimakethe namathuba okuthengwa.",
    },
    {
      title: "Ukuvimbela ukuhlukunyezwa ngokobulili, ukuvikela nosizo lokudlulisela",
      body: "Izingxoxo zomphakathi, inethiwekhi eyimfihlo yokuphendula kokuqala nokudlulisela, izindlela ezivikelekile zokubika, usizo lokululama kwabasindile nemithetho yokuvikela intombazane. Isigungu asiphenyi amacala obugebengu: abasindile bayiswa emaphoyiseni, ezempilo, ezomthetho nasezinsizakalweni zomphakathi.",
    },
  ],
  statusNote:
    "Lena yizinhlelo ezibekwe kuStrategic Framework yeBandla. Inqubekela phambili izoshicilelwa lapha uma isiqinisekisiwe.",
  related: { to: "/programs/social-development", label: "Imigqa yosizo nokusekelwa" },
  contactCta: "Xhumana nehhovisi",
};

function WomenEmpowermentPage() {
  return <PillarPage content={{ en, zu }} />;
}
