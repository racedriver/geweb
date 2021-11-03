let paddingClasses = 'block pb-0.5'
let basePath = '/images/technologies/'

function personalityLong(short, isAssertive) {
  const first = short[0] === "E" ? 'Extroverted' : 'Introverted'
  const second = short[1] === "N" ? 'Intuitive' : 'Observant'
  const third = short[2] === "T" ? 'Thinking' : 'Feeling'
  const fourth = short[3] === "J" ? 'Judging' : 'Prospecting'
  const identity = isAssertive ? 'Assertive' : 'Turbulent'
  return `${first}, ${second}, ${third}, ${fourth} - ${identity}`
}

const personality = (name, short, isAssertive) => [{
  value: `${name} / ${short}-${isAssertive ? 'A' : 'T'}`,
  linebreak: true
}, personalityLong(short, isAssertive)]

const Executive = (isAssertive) => personality("Executive", "ESTJ", isAssertive)
const Architect = (isAssertive) => personality("Architect", "INTJ", isAssertive)
const Protagonist = (isAssertive) => personality("Protagonist", "ENFJ", isAssertive)

export default {
  index: {
    magazine: {
      title: "O nas"
    }
  },
  aboutUs: {
    headTitle: 'Nasz zespół',
      title: 'Nasz zespół i jego historia',
      text: {
      linebreak: true,
        text: [
        'Naszym głównym celem jest przekraczanie oczekiwań naszych klientów. Nie mówimy tylko o wsparciu klienta, ale również o pełnejej ekspertyzie oprogramowania. Nasi inżynierowie, którzy w większości są byłymi pracownikami Apple, chcą poprawić doświadczenia użytkowników dzięki technologiom takim jak Kotlin, Nuxt.js, Vue.js czy Tailwind.',' \n',
        'Chociaż nie mamy rynku docelowego, na którym się koncentrujemy, świadczymy głównie usługi dla klientów z sektora E-commerce. Ponieważ każda prowadzona działalność jest inna, staramy się jak najlepiej dostosować do indywidualnych preferencji, aby sprostać wszystkim wymaganiom poprzez indywidualne oprogramowanie lub aplikacje. W tym celu konfigurujemy, monitorujemy i utrzymujemy produkty klienta za pomocą oprogramowania SAAS, takiego jak Trello lub Google Workspace.',' \n',
        'Chcemy jednak stać się globalnymi graczami w różnych branżach, dlatego też połączyliśmy nasze siły wraz z focusefforts.com, aby dostarczyć oprogramowanie na zamówienie dla branży budowlanej. Dzięki naszym rozwiązaniom nasz klient będzie miał łatwiejszy, bardziej efektywny i skuteczny sposób interakcji z partnerami biznesowymi i wykonawcami.',' \n',
        'Niemniej jednak, nadal chcemy pomagać firmom z każdej branży, które potrzebują intuicyjnego, niestandardowego oprogramowania. Począwszy od firm B2B, aż po znane marki, jesteśmy tu po to, by rozwiązywać wszelkie problemy związane z oprogramowaniem, bez względu na wszystko. Dlatego też zrewolucjonizowaliśmy samoobsługowe automaty do kawy na stacjach benzynowych najbardziej znanej marki kawy w Niemczech, gdzie zintegrowaliśmy globalne opcje płatności, mi. Apple Pay oraz Google Pay.',' \n',
        'Ponieważ wiemy, że w obecnych czasach wszystkie aspekty prowadzenia działalności nieustanie się zmieniają, chcemy być jak najbardziej elastyczni. Nasza praca nie kończy się w momencie, gdy oprogramowanie jest już gotowe, ciągle uczymy się i rozwijamy, a każdy sukces naszych klientów jest również naszym sukcesem, a to właśnie daje nam motywacje do dalszego działania!\n' +
        ' \n',
        {
          value: '',
          class: 'font-bold'
        },
        '',
        {
          value: '',
          class: 'font-bold'
        },
        '',
        '',
        {
          value: '',
          class: 'font-bold'
        },
        '',
        '',
        '',
        {
          value: '',
          class: 'font-bold'
        },
        {
          value: '',
          class: 'font-bold'
        },
        '',
        {
          value: '',
          class: 'font-bold'
        },
      ]
    },
    team: {
      title: 'Poznaj nasz zespół',
        entries: [
        {
          name: 'Alex Mittler',
          image: 'images/alex-mittler.jpg',
          title: 'CEO',
          text: 'Alex Mittler przez ponad dekadę doskonalił swoje umiejętności inżynierskie w Apple. Był jego pracownikiem jeszcze przed pojawieniem się pierwszego iPhone\'a.',
          social: [
            {text: '', href: 'https://www.linkedin.com/in/alexmittler/'}
          ],
        },
        {
          name: '',
          image: '',
          title: '',
          text: '',
          social: [
            {text: ''}
          ],
        },
        {
          name: '',
          image: '',
          title: '',
          text: '',
        },
        {
          name: 'Wlad',
          image: '/images/wlad.jpg',
          title: 'Inżynier/Programista',
          text: 'Wlad jest byłym inżynierem Apple z bardzo bogatym doświadczeniem w tworzeniu oprogramowania i hardware. Zanim dołączył do Global Engineering, spędził kilkanaście lat pracując w dużych firmach technologicznych, takich jak: Apple, Sun Microsystems i CapGemini.',
        },
        {
          name: 'Christoph',
          image: '/images/malek-anderson.jpg',
          title: 'Programista',
          text: 'Christoph to młody, genialny talent z szeroką wiedzą i doświadczeniem w tworzeniu nowoczesnego oprogramowania i baz danych. Mimo młodego wieku ma już ogromne doświadczenie w rozwoju Javy i Minecrafta. W przeszłości Christoph stworzył i wprowadził na rynek już niejedną wieloplatformową aplikacje mobilną. Jesteśmy zachwyceni, widząc, co zbuduje z nami w przyszłości.',
        }
      ]
    }
  },
  portfolio: {
    entries: [
      // {
      //   title: 'Payroll Automation',
      //   description1: 'Concept',
      //   description2: 'Realisation',
      //   image: '/images/payroll.jpg',
      //   alt: 'Payroll Automation Software using Discord',
      //   link: '',
      // },
      {
        title: 'To-Do App',
        description1: 'Concept',
        description2: 'Development',
        image: '/images/to-do.jpg',
        alt: '"To-Do App',
        link: '',
      },
      {
        title: 'Self-Service Systems Integrations',
        description1: 'Concept',
        description2: 'Realisation',
        image: '/images/systems.jpg',
        alt: 'Self-Service Systems Integrations',
        link: '',
      },

      {
        title: 'VR/AR',
        description1: 'Design',
        description2: 'Development',
        image: '/images/vr-ar.jpg',
        alt: 'Virtual Reality, Augmented Reality',
        link: '',
      },
    ],
  },
  consultation: {
    title: [
      {value: 'Make high quality products'},
    ],
      subtitle: {
      text: [
        /*"Get software that just works!",*/
        "Your",
        "users",
        {value: '👨‍💻', class: 'bg-clip-padding text-white'},
        "will Thank",
        {value: '🙏', class: 'bg-clip-padding text-white'},
        "you!"
      ]
    },
    button: "Continue"
  },
  contactUs: {
    copy: {
      text: [
        {value: 'Find out how to bring your business into the'},
        {value: '20ies', class: 'text-green-500'},
        {value: 'today'},
      ],
    },
  },
  magazine: {
    readMore: 'Read More',
  },
  customers: {
    title: 'Co sądzą o nas nasi klienci',
      entries: [
      {
        name: 'Tim Walter',
        position: 'CEO',
        company: 'Wolfcreek',
        image: '/images/tim_walter.jpg',
        title: 'Od ZERA do działającego produktu w zaledwie 2 miesiące.',
        text: [
          '"Mogę szczerze powiedzieć, że jeśli szukasz kogoś, komu możesz powierzyć swój biznes, to tylko Global Engineering. Nie tylko dostarczają oprogramowanie o ultra-wysokiej jakości, ale zapewniają również doskonałe wsparcie dla swoich produktów i użytkowników. Praca z nimi od zawsze była zbudowana na zaufaniu i otwartości. Nigdy nie spotkałem kogoś takiego jak ten zespół!"',
        ],
      },
    ],
  },
  landing: {
    title: {
      linebreak: true,
        text: [
        "Skylines One is a high-tech",
        "engineering company focusing",
        "on cutting edge technologies",
        "to build high quality products",
        "",
        [
          {value: "Custom product development"},
          {value: "Google Cloud Platform"},
          {value: "Software development outsourcing"},
          {value: "Progressive Web Apps (PWA)"},
          {value: "Specialist (Firebase, Serverless)"},
          {value: "Newest technologies (like Kotlin, Ktor, Nuxt.js, Google Cloud)",}
        ],
        "",
        "If you are looking for an",
        "experienced team of engineers",
        "to hit the ground quickly, contact",
        "us today!"
      ]
    },
  },
  FirstImpression: {
    PreTitle: 'Nasz zespół',
      Ex: 'złożony z byłych',
      Split: ' ',
      AppleEngineers: 'Inżynierów Apple',
      SubTitle: 'czeka, aby stworzyć Twój produkt!',
      SubSubTitle:
        '(And you\'ll never have to worry about building quality products again!)',
      Button: 'Skontaktuj się z nami, \n\r aby omówić Swój projekt',
      OurPortfolio: 'Our portfolio',
  },
  footer: {
      name: 'GE',
    subtitle: 'Global Engineering',
    bottom: [
      [
        { value: '© 2021, All rights reserved.' },
      ],
      [
        { value: 'Made by Global Engineering' },
      ],
    ],
    title: "Stwórzmy razem coś wielkiego",
    linkBlock: [
      {
        title: 'Nasze biura',
        rows: {
          rootClass: 'min-w-full',
          class: paddingClasses + ' min-w-full',
          linebreak: true,
          text: ['Siedziba Główna', 'Silicon Valley', '800 W El Camino Real', 'Suite 180', 'Mountain View, CA 94040', '', 'Lewes', '16192 Coastal Hwy', 'Lewes, DE 19958'],
        },
      },
      {
        title: " ",
        rows: {
          class: paddingClasses,
          linebreaks: true,
          text: [
            { value: ' '},
          ],
        },
      },
      {
        title: 'Global Engineering',
        rows: {
          class: paddingClasses,
          linebreak: true,
          text: [
            { value: 'O Nas', href: 'about-us' },
            { value: 'Portfolio', href: 'portfolio' },
            { value: 'Kariera', href: 'career' },
            { value: 'Polityka prywatności', href: 'privacy' },
          ],
        },
      },
      {
        title: "Połączmy się",
        rows: {
          class: paddingClasses + ' pl-1 fa-brand-2',
          linebreak: true,
          text: [
            {
              value: ' LinkedIn',
              href: 'https://linkedin.com/company/skylinesone',
            },
            {
              value: ' Discord',
              href: 'https://discord.skylines.one',
            },
            {
              value: ' Github',
              href: 'https://github.com/orgs/skylinesone',
            },
            {
              value: ' Whatsapp',
              href: 'https://wa.me/31638450573',
            },
            {
              value: ' Messenger',
              href: 'https://m.me/alexm888',
            },
            {
              value: ' Telegram',
              href: 'https://t.me/joinchat/GdtTxhUBOd5x742Yf6Z9vA',
            },
            {
              value: ' Twitter',
              href: 'https://twitter.com/SkylinesOneLLC'
            },
            {
              value: ' Facebook',
              href: 'https://www.facebook.com/skylinesone'
            },
            {
              value: ' Youtube',
              href: 'https://www.youtube.com/channel/UCrsmZqReXNoydQRTtXeiDxQ'
            },
          ],
        },
      },
    ],
  },
  header: {
    sites: [
      {
        name: 'O nas',
        link: '/about-us',
        svg: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      },
      {
        name: 'Aktualności',
        link: '/magazine',
        svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      },
      {
        name: 'Kariera',
        link: '/career',
        svg: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
      {
        name: 'Kontakt',
        link: '/contact-us',
        svg: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
      },
    ],
  },
  NewTechnologies: {
    title: [
      { value: 'Używamy najnowszych technologi, takich jak' },
      {
        value: 'Kotlin',
        class: 'text-white',
        seperator: '',
        href: 'https://kotlinlang.org/',
      },
      { seperator: ', ' },
      { value: 'Vue.js', class: 'text-white', href: 'https://vuejs.org/' },
      { value: 'oraz mocy' },
      {
        value: 'Google Cloud',
        class: 'text-white',
        href: 'https://cloud.google.com/',
      },
    ],
    entries: [
      // { image: basePath + 'ravendb.png', alt: 'RavenDB' },
      { image: basePath + 'kotlin-logo.svg', alt: 'Kotlin' },
      { image: basePath + 'vue.js-logo.png', alt: 'Vue.js' },
      {
        image: basePath + 'google_cloud/icon_cloud_192pt_clr.png',
        alt: 'Google Cloud',
      },
    ],
  },
  OurProcess: {
    title: 'Co możemy dla was zrobić',
    subtitle: '',
    processes: [
      {
        image: '/images/planing.png',
        title: 'Hardware and Software Integration',
        text:
          'Nie tylko zajmujemy się tylko tworzeniem oprogramowania.\n' +
          'Nasze doświadczenie pozwala nam także na tworzenie nowych, dedykowanych produktów elektronicznych.',
      },
      {
        image: '/images/wireframes.png',
        title: 'Applikacje na iOS / Android',
        text:
          ' \n' +
          'W eCommerce, stworzyliśmy następce eBay dla produktów luksusowych.\n' +
          'Czy wiesz, że większość telefonów na rynku oparta jest na Androidzie, ale 90% wartościowych klientów bazuje na iOS.\n' +
          'Czy w związku z tym najpierw  wprowadzisz swoją aplikację na iOS?',
      },
      {
        image: '/images/Visual%20Design%20app.png',
        title: 'VR/AR Wirtualna i rozszerzona rzeczywistość',
        text:
          'Chcesz stworzyć aplikację łączącą świat rzeczywisty z wirtualnym?\n' +
          'Z przyjemnoscią stworzymy dla Ciebie aplikacje, która urzeczywistni Twoje wizje!' +
          '',
      },
    ],
  },
    WhatWeDo:{
      title: 'Wszystko, czego potrzebujesz, aby urzeczywistnić swój projekt',
      text:
        'Wychodzimy naprzeciw Twoim oczekiwaniom, aby tworzyć jeszcze lepsze rozwiązania. ',
      entries: [
        {
          image: '/images/logo/cloud.svg',
          svg:
            'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
          title: 'Oprogramowanie w chmurze',
          text:
            "Zawsze będziesz chciał najpierw opracować chmurę, ponieważ jest to najbezpieczniejsze miejsce dla Twoich danych i jest skalowalne. ." +
            'Z przyjemnością rozważymy również Twoje niestandardowe wymagania.   '
        },
        {
          image: '/images/ux%20design.png',
          svg:
            'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'User Experience & Design',
          text:
            'Przejrzystość i użyteczność naszych produktów jest dla nas priorytetem, ponieważ \n' +
            'przekłada się  bezpośrednio na satysfakcję i zadowolenie klientów. \n' +
            'Wiemy to z własnego doświadczenia.',
        },
        {
          image: '/images/application%20development.png',
          svg: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
          title: 'Product Development',
          text:
            'Zajmujemy się kompleksowo całym procesem tworzenia aplikacji. ' +
            'Masz już zespól, który pracuje nad twoim projektem, ale nie został on jeszcze ukończony? Nie ma problemu, dokończymy go dla Ciebie!',
        },
        {
          image: '/images/software.jpeg',
          svg:
            'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
          title: 'Zarządzanie danymi',
          text:
            "Oszczędzaj czas spędzony na zarządzaniu danymi. " +
            "Nasi programiści uwielbiają udowadniać, że może to być proste i nie będzie już więcej utrapieniem.",
        },
        {
          image: '/images/mqdefault_6s.png',
          svg:
            'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
          title: 'Hardware and Software Integration ',
          text:
            'Masz pomysł na nowy produkt i potrzebujesz zaspołu, który urzeczywistni Twoją wizję?' +
            ' Z przyjemnością zrobimy to za Ciebie i stworzymy dedykowane dla niego oprogramowanie. ' +
            '' +
            '',
        },
        {
          image: '/images/industries.jpeg',
          svg:
            'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Różne modele biznesowe',
          text:
            'Jesteśmy ekspertami w tworzeniu nowych produktów i potrafimy dostosować się do każdej branży. ' +
            'Wyjaśnij nam na czym polega Twoja działalność, a my dopasujemy naszą aplikację do Twojego rynku.',
        },
      ],
    }
}
