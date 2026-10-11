import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, type PillarContent } from "@/components/PillarPage";

export const Route = createFileRoute("/programs/communication")({
  head: () => ({
    meta: [
      { title: "Communication — Zondi Tribal Authority, Nkandla" },
      {
        name: "description",
        content:
          "How the office of iNkosi Zondi communicates with the community and how community members reach their leadership.",
      },
    ],
  }),
  component: CommunicationPage,
});

const en: PillarContent = {
  eyebrow: "Pillars for Development",
  title: "Communication",
  intro:
    "How the office of iNkosi Zondi stays in touch with the community, and how community members reach their leadership.",
  objectiveLabel: "Objective:",
  objective:
    "Establish a trusted, inclusive and accessible communication system that lets the office of iNkosi Zondi speak directly with the community, and gives community members clear, respectful ways to reach leadership, raise issues, receive information and take part in development programmes.",
  initiativesTitle: "Key initiatives",
  initiatives: [
    {
      title: "Chief's Communication Office",
      body: "A small communication desk in the office of iNkosi Zondi to coordinate official notices, manage correspondence, keep an issue register and route matters to the right committee or pillar lead.",
    },
    {
      title: "Community communication calendar",
      body: "Monthly notices on imbizos, development updates, training opportunities, safety alerts, agricultural programme dates, youth opportunities and office consultation days.",
    },
    {
      title: "Reaching every household",
      body: "Izinduna, community meetings, notice boards, WhatsApp broadcasts, SMS alerts, community radio, schools, churches and public facilities, so that people without internet access are reached too.",
    },
    {
      title: "Access to iNkosi Zondi and the office",
      body: "Planned office access days, appointment booking, enquiry forms, query reference numbers and a protocol for escalating urgent matters.",
    },
    {
      title: "Website and chatbot",
      body: "This website as the official digital platform for leadership messages, notices, programme information, council profiles, forms and a development dashboard, with an isiZulu and English chatbot to follow.",
    },
    {
      title: "Feedback and accountability",
      body: "Feedback from meetings, digital platforms, office visits and village representatives gathered into a quarterly report for the Traditional Council and public feedback sessions.",
    },
  ],
  statusNote:
    "These are plans set out in the Council's Strategic Framework. Progress will be published here once it has been verified.",
  contactCta: "Contact the office",
};

const zu: PillarContent = {
  eyebrow: "Izinsika Zentuthuko",
  title: "Ukuxhumana",
  intro:
    "Indlela ihhovisi leNkosi uZondi elixhumana ngayo nomphakathi, nendlela abantu abafinyelela ngayo ebuholini.",
  objectiveLabel: "Inhloso:",
  objective:
    "Ukusungula uhlelo lokuxhumana olwethenjwayo, olubandakanyayo nolufinyeleleka kalula, olenza ihhovisi leNkosi uZondi likwazi ukukhuluma ngokuqondile nomphakathi, futhi linikeze abantu izindlela ezicacile nezenhlonipho zokufinyelela ebuholini, zokuletha izindaba, zokuthola ulwazi nokubamba iqhaza ezinhlelweni zentuthuko.",
  initiativesTitle: "Izinhlelo ezibalulekile",
  initiatives: [
    {
      title: "Ihhovisi Lokuxhumana LeNkosi",
      body: "Ideski elincane lokuxhumana ehhovisi leNkosi uZondi elihlanganisa izaziso ezisemthethweni, elilawula izincwadi, eligcina irejista yezindaba futhi lisiyisa udaba ekomidini noma kumholi wensika efanele.",
    },
    {
      title: "Ikhalenda lokuxhumana lomphakathi",
      body: "Izaziso zanyangazonke ngezimbizo, izibuyekezo zentuthuko, amathuba okuqeqeshwa, izexwayiso zokuphepha, izinsuku zezinhlelo zezolimo, amathuba entsha nezinsuku zokuthintwa kwehhovisi.",
    },
    {
      title: "Ukufinyelela emakhaya wonke",
      body: "Izinduna, imihlangano yomphakathi, amabhodi ezaziso, ama-WhatsApp, ama-SMS, umsakazo womphakathi, izikole, amasonto nezakhiwo zomphakathi, ukuze nabantu abangenayo i-inthanethi bafinyelelwe.",
    },
    {
      title: "Ukufinyelela kuNkosi uZondi nasehhovisi",
      body: "Izinsuku zokufinyelela ehhovisi, ukubhukha isikhathi, amafomu ezimibuzo, izinombolo zokubhekisela nomgomo wokuyisa phezulu izindaba eziphuthumayo.",
    },
    {
      title: "Iwebhusayithi ne-chatbot",
      body: "Leli webhusayithi njengenkundla esemthethweni yedijithali yemilayezo yobuholi, izaziso, ulwazi lwezinhlelo, amaphrofayili esigungu, amafomu nedeshibhodi yentuthuko, kulandele i-chatbot yesiZulu nesiNgisi.",
    },
    {
      title: "Impendulo nokuziphendulela",
      body: "Imibono evela emihlanganweni, emapulatifomini edijithali, ekuvakasheni ihhovisi nakubameleli bamadolobhana iqoqwa ibe umbiko wekota wesigungu sendabuko nemihlangano yomphakathi yokuphendula.",
    },
  ],
  statusNote:
    "Lena yizinhlelo ezibekwe kuStrategic Framework yeBandla. Inqubekela phambili izoshicilelwa lapha uma isiqinisekisiwe.",
  contactCta: "Xhumana nehhovisi",
};

function CommunicationPage() {
  return <PillarPage content={{ en, zu }} />;
}
