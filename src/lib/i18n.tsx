import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "zu";

type Dict = Record<string, string>;

const en: Dict = {
  // header / nav
  "nav.heritage": "Heritage",
  "nav.governance": "Governance",
  "nav.development": "Programs",
  "nav.culture": "Culture",
  "nav.facts": "Nkandla Today",
  "nav.contact": "Contact",
  "nav.aboutUs": "About Us",
  "nav.resources": "Resources",
  "nav.ubukhosi": "Ubukhosi bakwaZondi",
  "nav.supportStructure": "Support Structure",
  "nav.youthDevelopment": "Youth Development",
  "nav.socialDevelopment": "Social Development",
  "nav.safetySecurity": "Safety and Security",
  "nav.agriculture": "Agriculture",
  "nav.electricityWater": "Electricity and Water",
  "nav.faqs": "FAQs",
  "nav.communityCourt": "Community Court & Laws",
  "nav.newsletter": "Newsletter & Updates",
  "nav.gallery": "Gallery",
  "notfound.title": "Page not found",
  "notfound.body": "The page you're looking for doesn't exist or has been moved.",
  "notfound.cta": "Go home",
  "nav.mainLabel": "Main",
  "brand.sub": "The Zondi Tribal Authority",

  // hero
  "hero.eyebrow": "Isizwe SamaZulu · KwaZulu-Natal",
  "hero.title.1": "The cradle of Zulu history,",
  "hero.title.2": "rising anew.",
  "hero.lede":
    "Where King Shaka's warriors walked the hills to exhaustion, where the graves of kings rest beneath ancient forests — and where a modern municipality is building water, roads and opportunity for every household.",
  "hero.cta.primary": "Explore our story",
  "hero.cta.secondary": "See what we're building",
  "hero.stat.1.n": "4,000+",
  "hero.stat.1.l": "Households with new water",
  "hero.stat.2.n": "R99M+",
  "hero.stat.2.l": "Vutshini regional project",
  "hero.stat.3.n": "3",
  "hero.stat.3.l": "Zulu kings laid to rest here",

  // heritage
  "her.eyebrow": "Heritage",
  "her.title": "Named by Shaka. Home to kings.",
  "her.p1.a": "The name ",
  "her.p1.b": " comes from the Zulu word ",
  "her.p1.c":
    " — extreme exhaustion — reportedly given by King Shaka himself after his warriors traversed our forested hills. From that moment, Nkandla was written into the story of the Zulu nation.",
  "her.p2.a": "Here rest the graves of ",
  "her.p2.b": ", ",
  "her.p2.c": ", and ",
  "her.p2.d":
    " — making our valley a place of pilgrimage, memory and profound cultural weight within the Zulu Kingdom.",
  "her.pull": "\"A place where the past is not history — it is family.\"",
  "her.tl.1.year": "c. 1820s",
  "her.tl.1.title": "Shaka names Nkandla",
  "her.tl.1.body":
    "The Zulu king traverses the hills with his impi and the name Nkandla — exhaustion — is born.",
  "her.tl.2.year": "1879",
  "her.tl.2.title": "The Anglo-Zulu War",
  "her.tl.2.body":
    "The British defeat at Isandlwana echoes in Nkandla's hills. The battle is commemorated here every year.",
  "her.tl.3.year": "1884",
  "her.tl.3.title": "King Cetshwayo laid to rest",
  "her.tl.3.body":
    "The great resisting king is buried in the Nkandla forest, cementing our role as heartland of the Kingdom.",

  // governance
  "gov.eyebrow": "Leadership",
  "gov.title": "Leading the way — with the people, for the people.",
  "gov.body.a": "Nkandla Local Municipality is a Category B municipality within the ",
  "gov.body.b": "King Cetshwayo District",
  "gov.body.c": ". Under the leadership of Executive Mayor ",
  "gov.body.d": "Nonhlanhla Nzuza",
  "gov.body.e":
    ", we partner with provincial and national government to convert heritage into opportunity — from land handovers for shopping centres to the projects that light homes and turn on taps.",
  "gov.quote":
    "\"Our history is our foundation. But our people — their water, their roads, their livelihoods — that is our mandate today.\"",
  "gov.quote.cite": "— Executive Mayor's vision for Nkandla",
  "gov.fact.1.a": "Category B",
  "gov.fact.1.b": "Municipality",
  "gov.fact.2.a": "King Cetshwayo",
  "gov.fact.2.b": "District",
  "gov.fact.3.a": "9 Wards",
  "gov.fact.3.b": "Community-led",
  "gov.fact.4.a": "Since 2000",
  "gov.fact.4.b": "Democratic mandate",

  // development
  "dev.eyebrow": "Progress",
  "dev.title": "Building a brighter future — one household at a time.",
  "dev.lede":
    "From clean water reaching thousands of families, to a new shopping centre set to reshape our economy, tangible change is arriving across every ward.",
  "dev.flag.tag": "Flagship project",
  "dev.flag.title": "Nkandla–Vutshini Regional Water Project",
  "dev.flag.body.a": "A R99-million+ investment that brought clean, reliable water to approximately ",
  "dev.flag.body.b": "4,000 households",
  "dev.flag.body.c": " — the largest single water win in our recent history.",
  "dev.mid.tag": "R160M · underway",
  "dev.mid.title": "Middledrift Water Upgrade",
  "dev.mid.body":
    "Upgrading the purification plant to serve a further 3,645 households across multiple Tribal Authorities.",
  "dev.w9.tag": "R14.3M · Ward 9",
  "dev.w9.title": "Ward 9 Water Scheme",
  "dev.w9.body":
    "Additional treatment plant upgrades and reticulation bringing clean water into more homes.",
  "dev.cap.title": "Capital projects 2025 / 2026",
  "dev.cap.1.name": "Nkandla CBD Road — Phase 2",
  "dev.cap.1.cat": "Infrastructure",
  "dev.cap.1.meta": "R9.1 million",
  "dev.cap.2.name": "EEDMS Phase 2 Electrification",
  "dev.cap.2.cat": "Energy",
  "dev.cap.2.meta": "Multi-ward rollout",
  "dev.cap.3.name": "Ezingelevu Electrification",
  "dev.cap.3.cat": "Energy",
  "dev.cap.3.meta": "New connections",
  "dev.cap.4.name": "Disaster Management Centre",
  "dev.cap.4.cat": "Public safety",
  "dev.cap.4.meta": "Emergency response",
  "dev.cap.5.name": "Community halls & facilities",
  "dev.cap.5.cat": "Social",
  "dev.cap.5.meta": "Multiple sites",
  "dev.cap.6.name": "Nkandla Shopping Centre (land handed over Jul 2025)",
  "dev.cap.6.cat": "Economic",
  "dev.cap.6.meta": "Thousands of jobs",

  // culture
  "cul.eyebrow": "Culture",
  "cul.title": "Empowering youth. Preserving what is sacred.",
  "cul.a.title": "Of Soul and Joy — photography for 28 young minds",
  "cul.a.body":
    "A two-week intensive workshop trained 28 unemployed Nkandla youth in visual storytelling and the business of photography — turning cameras into careers.",
  "cul.b.title": "King Cetshwayo commemoration",
  "cul.b.body":
    "Held annually at the Nkandla Sportfield, honouring the king's legacy while educating a new generation and drawing heritage tourism.",
  "cul.c.title": "iNdlamu — the dance that unites the villages",
  "cul.c.body":
    "Traditional Zulu dance competitions bring rural villages together, with Nkandla teams celebrating identity, discipline and community.",

  // facts
  "fac.eyebrow": "Nkandla today",
  "fac.title": "The numbers behind our mission.",
  "fac.lede":
    "Behind every project is a statistic that made it urgent — and a community that made it possible.",
  "fac.1.a": "44%",
  "fac.1.b": "Unemployment — the reason every job matters",
  "fac.2.a": "Predominantly Zulu",
  "fac.2.b": "Population and living culture",
  "fac.3.a": "Tribal & state land",
  "fac.3.b": "The land on which we build",
  "fac.4.a": "King Cetshwayo District",
  "fac.4.b": "Our regional home",
  "fac.jobs.title": "Apply today for job opportunities",
  "fac.jobs.yes": "YES4Youth",
  "fac.jobs.yes.url": "https://www.yes4youth.co.za/",
  "fac.jobs.kzn": "KZN Provincial Opportunities",
  "fac.jobs.kzn.url": "https://www.kznonline.gov.za/index.php?option=com_content&view=article&id=290&Itemid=709",
  "fac.jobs.dpsa": "DPSA Public Service Vacancies",
  "fac.jobs.dpsa.url": "https://www.dpsa.gov.za/newsroom/psvc/",
  "fac.jobs.cta": "Apply today",

  // how to apply
  "fac.how.title": "How to apply",
  "fac.how.lede": "Prepare these before you click through to any of the links above.",
  "fac.how.1": "Certified copy of your South African ID (not older than 3 months).",
  "fac.how.2": "Your latest matric certificate or highest qualification.",
  "fac.how.3": "An updated CV with two contactable references.",
  "fac.how.4": "A working email address and cellphone number for responses.",
  "fac.how.5": "Banking details in your own name (for placements that pay a stipend).",
  "fac.how.6": "Scan or photograph every document clearly as PDF or JPG before uploading.",

  // alerts
  "fac.alert.title": "Get youth job alerts",
  "fac.alert.lede": "Add your details and we will notify you when new opportunities are posted for Ward 2.",
  "fac.alert.name": "Full name",
  "fac.alert.name.ph": "Nomusa Zondi",
  "fac.alert.email": "Email address",
  "fac.alert.email.ph": "you@example.com",
  "fac.alert.phone": "Cellphone (optional)",
  "fac.alert.phone.ph": "076 000 0000",
  "fac.alert.submit": "Sign me up",
  "fac.alert.ok": "You're on the list. We'll be in touch when new opportunities open.",
  "fac.alert.err.name": "Please enter your full name.",
  "fac.alert.err.email": "Please enter a valid email address.",
  "fac.alert.err.phone": "Please enter a valid phone number or leave it blank.",

  // faq
  "fac.faq.title": "Frequently asked questions",
  "fac.faq.q1": "Who is eligible to apply?",
  "fac.faq.a1":
    "Most youth programmes are for South African citizens between 18 and 34 who are not currently studying or employed full-time. Public service vacancies are open to all qualifying citizens.",
  "fac.faq.q2": "When do applications close?",
  "fac.faq.a2":
    "Each opportunity has its own closing date shown on the host website. Late applications are not accepted, so apply as soon as a post is published.",
  "fac.faq.q3": "Does it cost anything to apply?",
  "fac.faq.a3":
    "No. Applying is always free. Never pay anyone who promises you a placement — report it to the Traditional Council office.",
  "fac.faq.q4": "Where can I get help with my application?",
  "fac.faq.a4":
    "Visit the Zondi Tribal Authority office during weekday office hours, or contact Honourable Chief Zondi's office for assistance with documents and online submissions.",


  // footer
  "foot.tag":
    "Honouring the cradle of Zulu history while building the infrastructure, skills and opportunity our people deserve.",
  "foot.explore": "Explore",
  "foot.visit": "Visit & invest",
  "foot.contact": "Contact us",
  "foot.phone": "Phone",
  "foot.email": "Email",
  "foot.chief": "Honourable Chief Zondi",
  "foot.chief.cta": "Contact the Chief",
  "foot.addr.1": "Nkandla Local Municipality",
  "foot.addr.2": "King Cetshwayo District, KwaZulu-Natal",
  "foot.addr.3": "South Africa",
  "foot.copy": "© {year} Nkandla Local Municipality. In service of the people of the Zulu Kingdom.",

  // language switch
  "lang.label": "Language",
  "lang.en": "English",
  "lang.zu": "isiZulu",

  // contact page
  "contact.meta.title": "Contact — Nkandla Local Municipality",
  "contact.meta.desc": "Get in touch with Nkandla Local Municipality. Phone, email and visiting hours for the cradle of Zulu history.",
  "contact.eyebrow": "Contact",
  "contact.heading": "Get in touch with Nkandla",
  "contact.lede": "Whether you need service delivery information, want to report an issue, or are exploring investment and heritage opportunities, our team is ready to listen.",
  "contact.info.title": "Reach us directly",
  "contact.phone.label": "Phone",
  "contact.email.label": "Email",
  "contact.address.label": "Visit us",
  "contact.hours.label": "Office hours",
  "contact.hours.value": "Monday – Friday, 08:00 – 16:30",
  "contact.form.title": "Send a message",
  "contact.form.name": "Full name",
  "contact.form.email": "Email address",
  "contact.form.subject": "Subject",
  "contact.form.message": "How can we help?",
  "contact.form.send": "Send message",
  "contact.form.success": "Thank you — your message has been received. We aim to respond within two working days.",
  "contact.form.error": "Please complete all fields correctly.",

  // zondi tribal authority
  "zon.eyebrow": "Traditional Leadership",
  "zon.title": "Guided by Tradition — The Zondi Tribal Authority",
  "zon.sub": "Honouring our ancestors by building our future. The Zondi Tribal Authority is the voice of customary law and community in Ward 2.",
  "zon.body": "As a legally recognised Traditional Council under the Department of Traditional Affairs, the Zondi Tribal Authority administers communal land, preserves our Zulu customs, and resolves community disputes using the wisdom of customary law. Under the leadership of Honourable Chief Zondi, the Authority acts as a vital bridge between the people and the state — working hand-in-hand with Nkandla Local Municipality to deliver progress that respects our heritage.",
  "zon.chief": "Honourable Chief Zondi",
  "zon.chief.role": "Leader, Zondi Tribal Authority · Ward 2, Nkandla",
  "zon.contact.title": "Contact the Chief",
  "zon.contact.phone": "Phone",
  "zon.contact.email": "Email",
  "zon.func.title": "Core functions",
  "zon.func.1.title": "Customary Law",
  "zon.func.1.body": "Resolving domestic, property and community disputes using cultural protocols.",
  "zon.func.2.title": "Land Administration",
  "zon.func.2.body": "Managing communal lands and coordinating rural human settlements.",
  "zon.func.3.title": "Heritage Preservation",
  "zon.func.3.body": "Promoting cultural traditions, indigenous practices and social cohesion.",
  "zon.func.4.title": "Municipal Cooperation",
  "zon.func.4.body": "Assisting local municipalities with service delivery and economic planning.",
  "zon.hier.title": "Hierarchy of traditional leadership",
  "zon.hier.national": "National House of Traditional Leaders (NHTL) — advises Parliament and national government.",
  "zon.hier.national.tag": "National",
  "zon.hier.provincial": "KwaZulu-Natal Provincial House — represents traditional leadership in the province.",
  "zon.hier.provincial.tag": "Provincial",
  "zon.hier.local": "Zondi Tribal Authority — serving Ward 2 within the King Cetshwayo District and Nkandla Local Municipality.",
  "zon.hier.local.tag": "Local",
  "zon.legal": "Traditional Councils are constitutionally recognised and operate alongside democratic municipalities. Political authority remains bound by the Constitution — ward councillors hold final authority over municipal budgets and service delivery.",
  "zon.cta": "Contact the Zondi Tribal Authority",
};


const zu: Dict = {
  "nav.heritage": "Amagugu",
  "nav.governance": "Ukubusa",
  "nav.development": "Izinhlelo",
  "nav.culture": "Amasiko",
  "nav.facts": "INkandla Namuhla",
  "nav.contact": "Xhumana",
  "nav.aboutUs": "Mayelana Nathi",
  "nav.resources": "Izinsiza",
  "nav.ubukhosi": "Ubukhosi bakwaZondi",
  "nav.supportStructure": "Isakhiwo Sokusekelwa",
  "nav.youthDevelopment": "Ukuthuthukiswa Kwentsha",
  "nav.socialDevelopment": "Ukuthuthukiswa Komphakathi",
  "nav.safetySecurity": "Ukuphepha Nezokuvikela",
  "nav.agriculture": "Ezolimo",
  "nav.electricityWater": "Ugesi Namanzi",
  "nav.faqs": "Imibuzo Ejwayelekile",
  "nav.communityCourt": "Inkantolo Yomphakathi Nemithetho",
  "nav.gallery": "Gallery",
  "nav.newsletter": "Incwadi Yezindaba Nezibuyekezo",
  "notfound.title": "Ikhasi Alitholakali",
  "notfound.body": "Ikhasi olifunayo alikho noma lisusiwe.",
  "notfound.cta": "Buyela Ekhaya",
  "nav.mainLabel": "Okuyinhloko",
  "brand.sub": "Igunya Lesizwe SakwaZondi",

  "hero.eyebrow": "Isizwe SamaZulu · KwaZulu-Natali",
  "hero.title.1": "Umsuka womlando wamaZulu,",
  "hero.title.2": "uvuka kabusha.",
  "hero.lede":
    "Lapho amabutho eNkosi uShaka ahamba khona ezintabeni aze akhandleka, lapho amathuna amakhosi aphumula khona ngaphansi kwamahlathi akudala — futhi lapho uMasipala wanamuhla akha khona amanzi, imigwaqo namathuba emakhaya wonke.",
  "hero.cta.primary": "Hlola indaba yethu",
  "hero.cta.secondary": "Bheka esikwakhayo",
  "hero.stat.1.n": "4,000+",
  "hero.stat.1.l": "Imizi enamanzi amasha",
  "hero.stat.2.n": "R99M+",
  "hero.stat.2.l": "Iphrojekthi yaseVutshini",
  "hero.stat.3.n": "3",
  "hero.stat.3.l": "Amakhosi amaZulu angcwatshwe lapha",

  "her.eyebrow": "Amagugu",
  "her.title": "Waqanjwa nguShaka. Ikhaya lamakhosi.",
  "her.p1.a": "Igama elithi ",
  "her.p1.b": " lithathwa egameni lesiZulu elithi ",
  "her.p1.c":
    " — ukukhandleka okukhulu — okwathiwa kwaqanjwa yiNkosi uShaka ngokwakhe ngemva kokuba amabutho akhe ehambe ezintabeni zethu ezinamahlathi. Kusukela ngalowo mzuzu, iNkandla yabhalwa emlandweni wesizwe samaZulu.",
  "her.p2.a": "Lapha kulele amathuna e",
  "her.p2.b": ", i",
  "her.p2.c": ", ne",
  "her.p2.d":
    " — okwenza isigodi sethu sibe yindawo yohambo olungcwele, yenkumbulo nesisindo esikhulu samasiko oMbuso wamaZulu.",
  "her.pull": "\"Indawo lapho okwedlule kungeyona nje imlando — kuwumndeni.\"",
  "her.tl.1.year": "c. 1820",
  "her.tl.1.title": "UShaka uqamba iNkandla",
  "her.tl.1.body":
    "INkosi yamaZulu ihamba ezintabeni nempi yayo bese kuvela igama elithi Nkandla — ukukhandleka.",
  "her.tl.2.year": "1879",
  "her.tl.2.title": "Impi yamaNgisi namaZulu",
  "her.tl.2.body":
    "Ukwehlulwa kwamaNgisi eSandlwana kuzwakala ezintabeni zeNkandla. Impi ikhunjulwa lapha njalo ngonyaka.",
  "her.tl.3.year": "1884",
  "her.tl.3.title": "INkosi uCetshwayo iyangcwatshwa",
  "her.tl.3.body":
    "INkosi enkulu eyamelana namaNgisi ingcwatshwa ehlathini laseNkandla, kuqiniseka indima yethu njengenhliziyo yoMbuso.",

  "gov.eyebrow": "Ubuholi",
  "gov.title": "Sihola indlela — nabantu, sisebenzela abantu.",
  "gov.body.a": "UMasipala Wasekhaya waseNkandla uwuMasipala weSigaba B ophakathi ",
  "gov.body.b": "koMkhandlu waseKing Cetshwayo",
  "gov.body.c": ". Ngaphansi kobuholi beMeya Ephethe ",
  "gov.body.d": "uNonhlanhla Nzuza",
  "gov.body.e":
    ", sisebenzisana nohulumeni wesifundazwe nokazwelonke ukuguqula amagugu abe ngamathuba — kusukela ekunikezweni komhlaba wamasenta okuthenga kuya emaphrojekthini akhanyisa amakhaya avule namanzi.",
  "gov.quote":
    "\"Umlando wethu uyisisekelo sethu. Kodwa abantu bethu — amanzi abo, imigwaqo yabo, izimpilo zabo — yilokho okuyisibopho sethu namuhla.\"",
  "gov.quote.cite": "— Umbono weMeya Ephethe ngeNkandla",
  "gov.fact.1.a": "Isigaba B",
  "gov.fact.1.b": "UMasipala",
  "gov.fact.2.a": "King Cetshwayo",
  "gov.fact.2.b": "Isifunda",
  "gov.fact.3.a": "Amawodi ayi-9",
  "gov.fact.3.b": "Kuholwa umphakathi",
  "gov.fact.4.a": "Kusukela ngo-2000",
  "gov.fact.4.b": "Igunya lentando yeningi",

  "dev.eyebrow": "Intuthuko",
  "dev.title": "Sakha ikusasa eliqhakazile — umuzi ngamunye.",
  "dev.lede":
    "Kusukela emanzini ahlanzekile afinyelela ezinkulungwaneni zemindeni, kuya esentsheni yokuthenga entsha ezoshintsha umnotho wethu, izinguquko zangempela ziyafika kuwo wonke amawodi.",
  "dev.flag.tag": "Iphrojekthi eyisibonelo",
  "dev.flag.title": "Iphrojekthi Yamanzi YaseNkandla-Vutshini",
  "dev.flag.body.a": "Utshalomali olungaphezu kuka-R99 wezigidi olwalethe amanzi ahlanzekile athembekile cishe ",
  "dev.flag.body.b": "emizini engu-4,000",
  "dev.flag.body.c": " — impumelelo enkulu yamanzi emlandweni wethu wamuva.",
  "dev.mid.tag": "R160M · kuyaqhutshwa",
  "dev.mid.title": "Ukuthuthukiswa Kwamanzi eMiddledrift",
  "dev.mid.body":
    "Kuthuthukiswa isikhungo sokuhlanza ukusiza ezinye izindlu ezingu-3,645 emandleni eziNkosi ezahlukene.",
  "dev.w9.tag": "R14.3M · Iwodi 9",
  "dev.w9.title": "Uhlelo Lwamanzi Lwewodi 9",
  "dev.w9.body":
    "Ukuthuthukiswa okwengeziwe kwesikhungo sokuhlanza namapayipi aletha amanzi ahlanzekile emakhaya amaningi.",
  "dev.cap.title": "Amaphrojekthi angqongqo 2025 / 2026",
  "dev.cap.1.name": "Umgwaqo we-CBD waseNkandla — Isigaba 2",
  "dev.cap.1.cat": "Ingqalasizinda",
  "dev.cap.1.meta": "R9.1 wezigidi",
  "dev.cap.2.name": "EEDMS Isigaba 2 sikagesi",
  "dev.cap.2.cat": "Amandla",
  "dev.cap.2.meta": "Amawodi amaningi",
  "dev.cap.3.name": "Ugesi wase-Ezingelevu",
  "dev.cap.3.cat": "Amandla",
  "dev.cap.3.meta": "Ukuxhumeka okusha",
  "dev.cap.4.name": "Isikhungo Sokuphathwa Kwezinhlekelele",
  "dev.cap.4.cat": "Ukuphepha komphakathi",
  "dev.cap.4.meta": "Ukuphendula ophuthumayo",
  "dev.cap.5.name": "Amaholo nezinsiza zomphakathi",
  "dev.cap.5.cat": "Ezenhlalo",
  "dev.cap.5.meta": "Izindawo eziningi",
  "dev.cap.6.name": "ISikhungo Sokuthenga saseNkandla (umhlaba wanikezelwa Jul 2025)",
  "dev.cap.6.cat": "Ezomnotho",
  "dev.cap.6.meta": "Izinkulungwane zemisebenzi",

  "cul.eyebrow": "Amasiko",
  "cul.title": "Sithuthukisa intsha. Silondoloza okungcwele.",
  "cul.a.title": "Of Soul and Joy — ukuthwebula izithombe kwabasha abangu-28",
  "cul.a.body":
    "Umhlangano wamaviki amabili uqeqeshe abangu-28 abasha baseNkandla abangaqashiwe ekuxoxeni ngezithombe nasebhizinisini lokuthwebula — kuguqula amakhamera abe yimisebenzi.",
  "cul.b.title": "Isikhumbuzo seNkosi uCetshwayo",
  "cul.b.body":
    "Sibanjwa minyaka yonke eNkandla Sportfield, sihlonipha ifagugu leNkosi kuyilapho sifundisa isizukulwane esisha futhi sihehe ezokuvakasha zamagugu.",
  "cul.c.title": "iNdlamu — umdanso ohlanganisa imizi",
  "cul.c.body":
    "Imincintiswano yomdanso wesintu yamaZulu ihlanganisa imizi yasemakhaya, amaqembu aseNkandla egubha ubunikazi, isiyalo nomphakathi.",

  "fac.eyebrow": "INkandla namuhla",
  "fac.title": "Izibalo ezingemuva komsebenzi wethu.",
  "fac.lede":
    "Ngemuva kwaphrojekthi ngayinye kunesibalo esiyenza ibe ephuthumayo — nomphakathi owenza kwenzeke.",
  "fac.1.a": "44%",
  "fac.1.b": "Ukungasebenzi — isizathu sokuthi wonke umsebenzi ubalulekile",
  "fac.2.a": "Ikakhulukazi amaZulu",
  "fac.2.b": "Isibalo sabantu namasiko aphilayo",
  "fac.3.a": "Umhlaba wezizwe nowombuso",
  "fac.3.b": "Umhlaba esakha kuwo",
  "fac.4.a": "Isifunda saseKing Cetshwayo",
  "fac.4.b": "Ikhaya lethu lesifunda",
  "fac.jobs.title": "Faka isicelo namuhla semisebenzi yentsha",
  "fac.jobs.yes": "I-YES4Youth",
  "fac.jobs.yes.url": "https://www.yes4youth.co.za/",
  "fac.jobs.kzn": "Amathuba wesifundazwe saseKZN",
  "fac.jobs.kzn.url": "https://www.kznonline.gov.za/index.php?option=com_content&view=article&id=290&Itemid=709",
  "fac.jobs.dpsa": "Imisebenzi yaseDPSA yomsebenzi wikazwelonke",
  "fac.jobs.dpsa.url": "https://www.dpsa.gov.za/newsroom/psvc/",
  "fac.jobs.cta": "Faka isicelo namuhla",

  "fac.how.title": "Indlela yokufaka isicelo",
  "fac.how.lede": "Lungisa lokhu ngaphambi kokuchofoza noma yiliphi ixhumo elingenhla.",
  "fac.how.1": "Ikhophi egunyaziwe yomazisi waseNingizimu Afrika (engadluli izinyanga ezi-3).",
  "fac.how.2": "Isitifiketi sakho sikamatikuleshini noma iziqu eziphakeme kakhulu.",
  "fac.how.3": "I-CV ebuyekeziwe enezinkomba ezimbili ezitholakalayo.",
  "fac.how.4": "Ikheli le-imeyili elisebenzayo nenombolo yomakhalekhukhwini.",
  "fac.how.5": "Imininingwane yasebhange esegameni lakho (kulabo abakhokha isibonelelo).",
  "fac.how.6": "Skena noma thwebula wonke amadokhumenti ngokucacile nge-PDF noma i-JPG.",

  "fac.alert.title": "Thola izaziso zemisebenzi yentsha",
  "fac.alert.lede": "Faka imininingwane yakho sizokwazisa lapho kuvela amathuba amasha eWadi 2.",
  "fac.alert.name": "Igama eligcwele",
  "fac.alert.name.ph": "Nomusa Zondi",
  "fac.alert.email": "Ikheli le-imeyili",
  "fac.alert.email.ph": "wena@isibonelo.com",
  "fac.alert.phone": "Umakhalekhukhwini (akuphoqelekile)",
  "fac.alert.phone.ph": "076 000 0000",
  "fac.alert.submit": "Ngibhalise",
  "fac.alert.ok": "Usohlwini. Sizokuthinta lapho kuvuleka amathuba amasha.",
  "fac.alert.err.name": "Sicela ufake igama lakho eligcwele.",
  "fac.alert.err.email": "Sicela ufake ikheli le-imeyili elivumelekile.",
  "fac.alert.err.phone": "Sicela ufake inombolo evumelekile noma uyishiye ingenalutho.",

  "fac.faq.title": "Imibuzo evame ukubuzwa",
  "fac.faq.q1": "Ubani ofanelekile ukufaka isicelo?",
  "fac.faq.a1":
    "Izinhlelo zentsha zivulelekele izakhamuzi zaseNingizimu Afrika eziphakathi kweminyaka engu-18 no-34 ezingafundi noma ezingaqashwe ngokugcwele. Izikhala zomsebenzi kahulumeni zivulelekele bonke abafanelekayo.",
  "fac.faq.q2": "Zivalwa nini izicelo?",
  "fac.faq.a2":
    "Ithuba ngalinye linosuku lwalo lokuvala olubonisiwe kuwebhusayithi. Izicelo ezifika emuva kwesikhathi azamukelwa, ngakho faka isicelo ngokushesha.",
  "fac.faq.q3": "Kukhokhelwa yini ukufaka isicelo?",
  "fac.faq.a3":
    "Cha. Ukufaka isicelo kumahhala njalo. Ungakhokheli muntu othembisa ukukutholela umsebenzi — bika lokho ehhovisi loMkhandlu Wendabuko.",
  "fac.faq.q4": "Ngingathola usizo kuphi ngesicelo sami?",
  "fac.faq.a4":
    "Vakashela ihhovisi leGunya Lesizwe SakwaZondi ngezinsuku zesonto, noma uthinte ihhovisi likaSihlalo uZondi ukuthola usizo ngamadokhumenti nokufaka izicelo ku-inthanethi.",


  "foot.tag":
    "Sihlonipha umsuka womlando wamaZulu kuyilapho sakha ingqalasizinda, amakhono namathuba abantu bethu abawafanele.",
  "foot.explore": "Hlola",
  "foot.visit": "Vakasha & tshalizimali",
  "foot.contact": "Xhumana nathi",
  "foot.phone": "Ucingo",
  "foot.email": "Imeyili",
  "foot.chief": "uSihlalo uZondi",
  "foot.chief.cta": "Xhumana noSihlalo",
  "foot.addr.1": "UMasipala Wasekhaya waseNkandla",
  "foot.addr.2": "Isifunda saseKing Cetshwayo, KwaZulu-Natali",
  "foot.addr.3": "iNingizimu Afrika",
  "foot.copy": "© {year} UMasipala Wasekhaya waseNkandla. Sisebenzela abantu boMbuso wamaZulu.",

  "lang.label": "Ulimi",
  "lang.en": "IsiNgisi",
  "lang.zu": "isiZulu",

  // contact page
  "contact.meta.title": "Xhumana — uMasipala Wasekhaya waseNkandla",
  "contact.meta.desc": "Xhumana noMasipala Wasekhaya waseNkandla. Ucingo, imeyili nezikhathi zokuvakasha.",
  "contact.eyebrow": "Xhumana",
  "contact.heading": "Xhumana neNkandla",
  "contact.lede": "Noma udinga ukwaziswa kwesevisi, ufuna ukubika inkinga, noma uhlola amathuba okutshalizimali namagugu, ithimba lethu liyalalela.",
  "contact.info.title": "Sifikelele ngqo",
  "contact.phone.label": "Ucingo",
  "contact.email.label": "Imeyili",
  "contact.address.label": "Sivakashele",
  "contact.hours.label": "Izikhathi zomsebenzi",
  "contact.hours.value": "Msombuluko – Belobhavu, 08:00 – 16:30",
  "contact.form.title": "Thumela umyalezo",
  "contact.form.name": "Igama eliphelele",
  "contact.form.email": "Ikheli le-imeyili",
  "contact.form.subject": "Isihloko",
  "contact.form.message": "Singakusiza kanjani?",
  "contact.form.send": "Thumela umyalezo",
  "contact.form.success": "Siyabonga — umyalezo wakho wamukelwe. Sijhatshile ukuphendula ngaphakathi kwezinsuku ezimbili zomsebenzi.",
  "contact.form.error": "Sicela uqedele wonke amasimu ngendlela efanele.",

  // zondi tribal authority
  "zon.eyebrow": "Ubuholi Bendabuko",
  "zon.title": "Siholwa Amasiko — Isigungu SakwaZondi",
  "zon.sub": "Sihlonipha okhokho ngokwakha ikusasa lethu. Isigungu SakwaZondi siyizwi lomthetho wesintu nomphakathi eWadini 2.",
  "zon.body": "NjengeSigungu Sendabuko esamukelwe ngokomthetho ngaphansi koMnyango Wezindaba Zendabuko, isigungu SakwaZondi siphatha umhlaba wesizwe, silondoloza amasiko esiZulu futhi sixazulula izingxabano zomphakathi ngokusebenzisa ukuhlakanipha komthetho wesintu. Ngaphansi kobuholi baHloniphekile iNkosi uZondi, iSigungu sisebenza njengebhuloho eliphakathi kwabantu nombuso — sisebenzisana noMasipala Wasekhaya waseNkandla ukuletha intuthuko ehlonipha amagugu ethu.",
  "zon.chief": "OHloniphekile iNkosi uZondi",
  "zon.chief.role": "Umholi, Isigungu SakwaZondi · Iwadi 2, iNkandla",
  "zon.contact.title": "Xhumana neNkosi",
  "zon.contact.phone": "Ucingo",
  "zon.contact.email": "Imeyili",
  "zon.func.title": "Imisebenzi eyinhloko",
  "zon.func.1.title": "Umthetho Wesintu",
  "zon.func.1.body": "Ukuxazulula izingxabano zasekhaya, zempahla nezomphakathi ngokusebenzisa amasiko.",
  "zon.func.2.title": "Ukuphathwa Komhlaba",
  "zon.func.2.body": "Ukuphatha umhlaba wesizwe nokuxhumanisa izindawo zokuhlala emakhaya.",
  "zon.func.3.title": "Ukulondolozwa Kwamagugu",
  "zon.func.3.body": "Ukukhuthaza amasiko, imikhuba yendabuko nokuhlangana komphakathi.",
  "zon.func.4.title": "Ukusebenzisana Nomasipala",
  "zon.func.4.body": "Ukusiza omasipala basekhaya ngokulethwa kwezinsizakalo nokuhlelwa kwezomnotho.",
  "zon.hier.title": "Isakhiwo sobuholi bendabuko",
  "zon.hier.national": "iNational House of Traditional Leaders (NHTL) — yeluleka iPhalamende nohulumeni wesizwe.",
  "zon.hier.national.tag": "Kuzwelonke",
  "zon.hier.provincial": "Indlu YesiFundazwe iKwaZulu-Natali — imele ubuholi bendabuko esifundazweni.",
  "zon.hier.provincial.tag": "Esifundazweni",
  "zon.hier.local": "Isigungu SakwaZondi — sisebenzela iWadi 2 esiFundeni saseKing Cetshwayo naseNkandla.",
  "zon.hier.local.tag": "Endaweni",
  "zon.legal": "Izigungu Zendabuko zamukelwe uMthethosisekelo futhi zisebenza kanye nomasipala bentando yeningi. Amandla ombusazwe ahlala eboshwe uMthethosisekelo — amakhansela ewadi anegunya lokugcina ekwabelweni kwezimali zikamasipala nasekulethweni kwezinsizakalo.",
  "zon.cta": "Xhumana neSigungu SakwaZondi",
};


const dicts: Record<Lang, Dict> = { en, zu };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nkandla.lang");
      if (saved === "en" || saved === "zu") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("nkandla.lang", l);
    } catch {}
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

const fallbackCtx: Ctx = {
  lang: "en",
  setLang: () => {},
  t: (k: string) => dicts.en[k] ?? k,
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallbackCtx;
}

export function useT() {
  return useLanguage().t;
}

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={`${t("lang.label")}: ${label}`}
      className={`px-2.5 py-1 text-xs uppercase tracking-widest transition ${
        lang === l
          ? "bg-[color:var(--gold)] text-foreground"
          : "text-background/80 hover:text-background"
      }`}
    >
      {l === "en" ? "EN" : "ZU"}
    </button>
  );
  return (
    <div
      className={`inline-flex overflow-hidden rounded-full border border-background/40 ${className}`}
      role="group"
      aria-label={t("lang.label")}
    >
      {btn("en", t("lang.en"))}
      {btn("zu", t("lang.zu"))}
    </div>
  );
}
