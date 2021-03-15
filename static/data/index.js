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
          name: 'Wlad',
          image: '/images/wlad.png',
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
  }
}
