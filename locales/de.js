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
      title: "Magazine"
    }
  },
  aboutUs: {
    headTitle: 'About Us',
    title: 'Our story',
    text: {
      linebreak: true,
      text: [
        'Like every good friendship, Skylines One started out of common interests. The common ground both of the two founders Alexander Mittler and Lars Artmann have is their love for computers, software and gaming that they both discovered during their childhood.  ',
        'After some rounds of CS:GO, they found that they have another common interest: their passion for enabling great products through technology and the strong focus on bringing great user experience to software. Skylines One was born. From now on, not only Fortune 500 companies, but all businesses equally would be able to deliver the perfect user experience to their customers and employees.',
        '',
        'Alex Mittler honed his engineering skills for over a decade at Apple, and was an early employee even before the iPhone came out. With his passion for technology and business, he focuses on excellence in every product he touches. In a nutshell, Alex is a business person with great strengths across fields such as technology, software development, ' +
        'marketing, finance, investments and international business. Being humble and grinding all the time, he has already led several companies to success and touched the lives of 100+ million people in his career. The one thing that sets him apart, he says, is that for him it\'s either win-win or no deal. You can most often hear him say: \n',
        {
          value: '“Lots of people dream BIG. EXECUTION is what really matters.”',
          class: 'font-bold'
        },
        'and',
        {
          value: '“I run toward fires.”',
          class: 'font-bold'
        },
        '',
        'Lars Artmann is a genius young software engineer who already has 7 years experience in the newest technologies such as Kotlin, Google Cloud/Firebase and many more! He started coding at an age of 10, since then he watched over 50,000 educational videos. But, DON’T think he is one of the guys that are only good in theory. He would probably say:',
        {
          value: '“To be OUTSTANDING you need 4 times more theory than execution, but execution is what matters!”.',
          class: 'font-bold'
        },
        'It’s impossible to sum him up with only a few sentences, so here are the hard facts that will allow you to grasp just how much he has achieved so far with only 17 years on this planet. \n',
        '- Touched over +100k people with his software',
        '- Started his second company',
        '- Written more than 100,000 lines of code (and properly deleted the same amount)',
        '- IQ 130',
        '- A true Architect\'s Personality: INTJ-T (Introverted, Intuitive, Thinking, Judging - Turbulent)',
        '',
        'This combined experience and skill set truly makes them unbeatable. They developed a company in 11 months that most people don’t expect after 10 years of being in business, along with a truly inspiring friendship. The experience, passion, and thinking outside the box definitely makes us a strong force in the technology sector to look out for.',
        '',
        {
          value: 'Our mission is to accelerate the transition to better technology.',
          class: 'font-bold'
        },
        {
          value: 'Our vision is to create the most compelling software company of the 21st century by driving the world’s transition to cloud software.',
          class: 'font-bold'
        },
        '',
        {
          value: '#theskyisthelimit',
          class: 'font-bold'
        },
      ]
    },
    team: {
      title: 'Meet our Team',
      entries: [
        {
          name: 'Alex Mittler',
          image: 'images/alex-mittler.jpg',
          title: 'CEO',
          text: 'He spent a decade at Apple as an engineer, even before the iPhone came out, crazy isn’t it?',
          social: [
            {text: '', href: 'https://www.linkedin.com/in/alexmittler/'}
          ],
          personality: Executive(true),
        },
        {
          name: 'Lars Artmann',
          image: '/images/lars-artmann.jpg',
          title: 'CTO',
          text: 'Some people really think he is a genius because at only 17 years old he is already a CTO in the technology space, but don\'t mention it.',
          social: [
            {text: '', href: 'https://www.linkedin.com/in/larsartmann/'}
          ],
          personality: Architect(false),
        },
        {
          name: 'Paul',
          image: '/images/paul.jpg',
          title: 'Director Of Business Development',
          text: 'He can talk about business opportunities and problems with the C-level executives, dig deep into details with your operations folks, then turn around and meet with some of the best engineers from the Apple ecosystem and the youth-movement behind Kotlin and craft unique, elegant, user-experience-first designs',
          personality: Protagonist(true),
        },
        {
          name: 'Wlad',
          image: '/images/wlad.jpg',
          title: 'Engineer',
          text: 'Wlad is an ex-Apple engineer with a broad history and experiences in software development, custom hardware, circuit boards and printing. He spent several decades at big-tech companies like Apple, Sun Microsystems and CapGemini before joining Skylines One.',
          personality: Protagonist(true),
        },
        {
          name: 'Christoph',
          image: '/images/malek-anderson.jpg',
          title: 'Engineer',
          text: 'Christoph is a young genius talent with a broad knowledge and experiences in modern software development and databases. Fresh out of school and with already a vast experience in Java and Minecraft development, Christoph has almost single-handedly released multi-platform mobile Apps before. We are thrilled to see what he will build with us in the future.',
          personality: Executive(false),
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
    title: 'Customers',
    entries: [
      {
        name: 'Tim Walter',
        position: 'CEO',
        company: 'Wolfcreek',
        image: '/images/tim_walter.jpg',
        title: 'From ZERO to product-market fit in only 2 months',
        text: [
          '"I can honestly say that if you are looking for someone that you can trust with your tech stack.',
          "It's Skylines One. They not only deliver ultra-high quality software.",
          'They also bring in the perfect user experience.',
          "Working with them is always built on trust and openness, even if it's not in their self-interest.",
          'Never met anyone like this team!"',
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
    PreTitle: 'Unser Team von',
    Ex: 'ex',
    Split: '-',
    AppleEngineers: 'Apple Entwicklern',
    SubTitle:
      'ist bereit, Ihr Software-Projekt zu verwirklichen',
    SubSubTitle: 'Endlich Schluss mit den Gedanken um die User Experience!)',
    Button: 'Angebot jetzt einholen',
    OurPortfolio: 'Unser Portfolio',
  },
  footer: {
    name: 'Skylines One',
    subtitle: '.Love the hustle',
    bottom: [
      [
        { value: '© 2021, All rights reserved.' },
      ],
      [
        { value: 'Made by Skylines One' },
      ],
    ],
    title: "Let's build something great together",
    linkBlock: [
      {
        title: 'Offices',
        rows: {
          rootClass: 'min-w-full',
          class: paddingClasses + ' min-w-full',
          linebreak: true,
          text: ['Headquarters', 'Silicon Valley', '800 W El Camino Real', 'Suite 180', 'Mountain View, CA 94040', '', 'Chicago Office', '141 W. Jackson Blvd.', ' Suite 300A', 'Chicago, IL 60604', '', 'Lewes Office', '16192 Coastal Hwy', 'Lewes, DE 19958'],
        },
      },
      {
        title: "Let's talk",
        rows: {
          class: paddingClasses,
          linebreaks: true,
          text: [
            { value: 'Contact us directly'},
            { value: 'using video or chat'},
            { value: 'through our website'},
          ],
        },
      },
      {
        title: 'Company',
        rows: {
          class: paddingClasses,
          linebreak: true,
          text: [
            { value: 'About', href: 'about-us' },
            { value: 'Our work', href: 'portfolio' },
            { value: 'Career', href: 'career' },
            { value: 'Privacy Policy', href: 'privacy' },
          ],
        },
      },
      {
        title: "Let's connect",
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
        name: 'Über uns',
        link: '/about-us',
        svg: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      },
      {
        name: 'Magazin',
        link: '/magazine',
        svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      },
      {
        name: 'Portfolio',
        link: '/portfolio',
        svg: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      },
      {
        name: 'Karriere',
        link: '/career',
        svg: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
      {
        name: 'Kontaktiere uns',
        link: '/contact-us',
        svg: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
      },
    ],
  },
  NewTechnologies: {
    title: [
      { value: 'Use the newest technologies like' },
      {
        value: 'Kotlin',
        class: 'text-white',
        seperator: '',
        href: 'https://kotlinlang.org/',
      },
      { seperator: ', ' },
      { value: 'Vue.js', class: 'text-white', href: 'https://vuejs.org/' },
      { value: 'and the power of the' },
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
    title: 'In love with your product',
    subtitle: '',
    processes: [
      {
        image: '/images/planing.png',
        title: 'Virtual and Augmented Reality',
        text:
          'Ask us about the fashion App we built letting you\n' +
          'put on clothing virtually on your smartphone. What will you build with VR / AR?',
      },
      {
        image: '/images/wireframes.png',
        title: 'Platforms',
        text:
          ' \n' +
          'Interested in automotive? So are we! Our CEO is all about cars and we even run our own race team. ' +
          'In the past, we built a platfom that includes 1 Billion+ data records ensuring the car parts you order will match your car.\n' +
          'Which platform are you? \n',
      },
      {
        image: '/images/Visual%20Design%20app.png',
        title: 'Apps for iOS / Android',
        text:
          'In eCommerce, we have built the next eBay for luxury goods.\n' +
          'And did you know? Most smartphones sold are Android-based, but 90% of high value clients are on iOS.' +
          'Based on that, will you build on iOS first?',
      },
    ],
  },
  WhatWeDo:{
    title: 'Everything you need to bring your project into reality',
    text:
      'Out of your expectations, we create even better solutions. By pushing the boundaries we create truly innovative products.',
    entries: [
      {
        image: '/images/logo/cloud.svg',
        svg:
          'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
        title: 'Cloud Software',
        text:
          "You will almost always want to develop cloud first because it's the safest place for your data and it's scalable." +
          'We will also be happy to consider your custom requirements.'
      },
      {
        image: '/images/ux%20design.png',
        svg:
          'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'User Experience & Design',
        text:
          'User experience is most important for your product since it directly translates to\n' +
          'customer satisfaction and customer retention. We know that from\n' +
          'our own experience.',
      },
      {
        image: '/images/application%20development.png',
        svg: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
        title: 'Product Development',
        text:
          'Get the entire process handled by us. Just lean back and let us do the magic! ' +
          'Already got a team working? Project left part-finished? Great, we\'ll take it from here!',
      },
      {
        image: '/images/software.jpeg',
        svg:
          'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
        title: 'Data Management',
        text:
          "All the time spent on managing data will no longer be a worry for you. " +
          "Our ex-Apple geeks love problem solving and will make data management look easy.",
      },
      {
        image: '/images/mqdefault_6s.png',
        svg:
          'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
        title: 'Robotics',
        text:
          'You have a Robot or want to build one? ' +
          'Perfect! We love engineering on real world objects. ' +
          'Have an idea and want to go 0-100 faster than a Ferrari? ' +
          'Send us a message.',
      },
      {
        image: '/images/industries.jpeg',
        svg:
          'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Different industries',
        text:
          'We are experts in product development and able to adapt to your industry. ' +
          'Explain your business to us and we will deliver the best user experience and product market fit seamlessly.',
      },
    ],
  }
}

