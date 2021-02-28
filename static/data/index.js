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
        'Like every good friendship, Skylines One started out of common interests. The common ground both of the two founders Alexander Mittler and Lars Artmann have is their love for CS:GO that they both discovered during their childhood.  ',
        'After some rounds of CS:GO they found out that they have even more interests they share.',
        'Their passion for the latest technologies and the strong passion about bringing great software not only to Fortune 500 companies was the foundation that led them to found Skylines One.',
        '',
        'Starting with Alexander Mittler. He spent a decade at Apple as an experienced engineer, even before the IPhone came out, crazy isn’t it?',
        '',
        'Lars Artmann is an exceptional young software engineer and genius who already has 7 years experience in the newest technologies such as Kotlin, Google Cloud/Firebase and many more!',
        'He started coding at an age of 10, since then he watched over 50,000 educational videos.',
        'But, DON’T think he is one of the guys that are only good in theory. He would probably say:',
        {
          value: '“To be OUTSTANDING you need 4 times more theory than execution, but execution is what matters!”.',
          class: 'font-bold'
        },
        'But it is hard to some him up with only one or two sentences so let’s give you some hard facts about him to better understand how much he has achieved with only 17 years on this planet. ',
        '- IQ 130',
        '- Touched over +100k people, with his software',
        '- Started his second company',
        '- Written more than 100,000 lines of code and properly deleted the same amount',
        '- Personality Architect / INTJ-T (Introverted, Intuitive, Thinking, Judging - Turbulent)',
        '',
        'The combination of them is unbeatable! They developed such a good friendship in only 9 months that most people don\'t get even if they are married. ',
        '',
        'The combination of experience, passion, thrive and thinking outside the box makes this uneven pair definitely a strong force in the technology sector to look out for. Their common goal is to make software with a great, Apple-like user experience accessible to every business. This combined with simple maintenance of the software sounds attractive to many business owners.',
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
          text: 'Some people really think he is a genius because at only 17 years old he is already a CTO in the technology space, but don\'t wouldn\'t mention it.',
          social: [
            {text: '', href: 'https://www.linkedin.com/in/larsartmann/'}
          ],
          personality: Architect(false),
        },
        {
          name: 'Wladyslaw Urbanczyk',
          image: '/images/wlad.png',
          title: 'Engineer',
          text: 'Wlad is an ex-Apple engineer with a broad history and experiences in software development, custom hardware, circuit boards and printing. He spent several decades at big-tech companies like Apple, Sun Microsystems and CapGemini before joining Skylines One.',
          personality: Protagonist(true),
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
      {value: 'Stop relying on bad software'},
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
        "Skylines One is a high-tech,",
        "cloud-first software development",
        "company focusing on cutting",
        "edge technologies to build high",
        "quality software.",
        "",
        [
          {value: "Custom software development"},
          {value: "Google Cloud Platform"},
          {value: "Software outsourcing"},
          {value: "Progressive Web Apps (PWA)"},
          {value: "Specialist (Firebase, Serverless)"},
          {value: "Newest technologies (like Kotlin, Ktor, Nuxt.js, Vue.js)",}
        ],
        "",
        "If you are looking for an",
        "experienced team of engineers",
        "to hit the ground quickly, contact",
        "us today!"
      ]
    },
  }
}
