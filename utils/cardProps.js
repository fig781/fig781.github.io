const cardProps = {
  codingStatsProps: {
    id: 1,
    title: 'myCodingStats',
    subHeader: null,
    img: '',
    tags: [
      'vue.js',
      'html',
      'css',
      'javascript',
      'node.js',
      'express.js',
      'postgreSQL',
      'heroku',
    ],
    text: 'This is a fullstack site where people learning to program can track the time they spend each day learning to code. You can track the time you spend on each project, and time spent using each technology.',
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://my-coding-stats-com-client.vercel.app/',
    },
    btn2: {
      display: true,
      text: 'Client Source Code',
      link: 'https://github.com/fig781/myCodingStats.com-Client',
    },
  },

  personalSiteProps: {
    id: 2,
    title: 'My Personal Site',
    subHeader: null,
    img: '',
    tags: [
      'next.js',
      'html',
      'css',
      'javascript',
      'typescript',
      'supabase',
      'bootstrap',
    ],
    text: 'This is my personal site. It is fully responsive, and includes a contact form and article page. Supabase is used to handle markdown document storage and delivery for articles. The site also utilizes Dev.to’s public api for article information.',
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/fig781.github.io',
    },
    btn2: {
      display: false,
      text: '',
      link: '',
    },
  },

  sortingAlgoProps: {
    id: 3,
    title: 'Sorting Algorithm Visualizer',
    subHeader: null,
    img: '',
    tags: ['react.js', 'javascript', 'html', 'tailwind css', 'pwa'],
    text: 'There are currently six sorting algorithms to visualize. The information and time/space complexity are shown for each algorithm. This site is also a progressive web app.',
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://fig781.github.io/sorting-algorithm-visualizer',
    },
    btn2: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/sorting-algorithm-visualizer',
    },
  },

  currencyInfoProps: {
    id: 4,
    title: 'Country Currency Information Search',
    subHeader: null,
    img: '',
    tags: ['vue.js', 'html', 'css', 'javascript'],
    text: "This is a website for learning about different country's currencies. This application uses the forex API from https://fcsapi.com/ and lets you search for multiple country's currency information at once.",
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://fig781.github.io/vue-country-currency-information/',
    },
    btn2: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/vue-country-currency-information',
    },
  },

  dotNetPackages: {
    id: 5,
    title: '.NET Packages Directory',
    subHeader: null,
    img: '',
    tags: ['astro.js',
      'html',
      'css',
      'javascript',
    ],
    text: 'This is a site with a currated list of the best and most popular .NET packages. It is specifically created to make revenue from Google Ads. It has an easily searchable domain and I put a lot of effort into the sites SEO.',
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://frameworkdotnet.com',
    },
    btn2: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/dotnet-packages-directory',
    },
  },

  spaceMinorGame: {
    id: 6,
    title: 'Unreleased Space Minor Mobile Game',
    subHeader: null,
    img: '',
    tags: ['react native',
      'javascript',
      'typescript',
    ],
    text: 'This is an un-released android game. It is a text based rpg about a space minor. The game was taking way too long to build and was not very fun. I still learned a lot about React Native though. Feel free to run it on your phone.',
    btn1: {
      display: false,
      text: 'View Live',
      link: '',
    },
    btn2: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/space-minor-app',
    },
  },

  skyCapProps: {
    id: 7,
    title: 'SkyCapital Investment Strategies',
    subHeader: null,
    img: '',
    tags: ['next.js',
      'html',
      'css',
      'javascript',
      'typescript',
      'supabase'],
    text: 'This is a fullstack site where my friend and I publicly manage an investment portfolio. We write articles about our investment strategies and investment activity. The site offers an email subscription to notify users when new articles are published.',
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://skycapinvesting.com',
    },
    btn2: {
      display: false,
      text: 'Source Code',
      link: '',
    },
  },

  keyValueProps: {
    id: 8,
    title: 'A Key Value Database',
    subHeader: null,
    img: '',
    tags: ['golang'],
    text: 'This is an in-memory key value database similar to Redis (but a bit more basic). The program works by creating a TCP server on localhost that can then be connected to by a client.',
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/its-a-key-value-database',
    },
    btn2: { display: false, text: '', link: '' },
  },

  cloudNativeHack: {
    id: 9,
    title: 'Cloud Native Hackathon 2021',
    subHeader: 'Call Sentiment Tracker',
    img: null,
    tags: ['next.js', 'tailwind css', 'supabase'],
    text: "This is a Next.js app used to track and analyze the overall mood of phone calls. This app can be used by call center managers to analyze the mood of all their employees' calls. Users can add call groups and add employees in order track each of their calls. The site makes heavy use of Symbl.ai’s api to make transcripts of sound files and analyze the sentiment of calls.",
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/call-sentiment-logger',
    },
    btn2: {
      display: false,
      text: '',
      link: '',
    },
  },

  trimbleHack: {
    id: 10,
    title: 'Trimble Hackathon 2020',
    subHeader: 'Crystal Reports Information Updater',
    img: null,
    tags: ['C#', 'ASP.Net'],
    text: 'This is a console application that will bulk update the connection information of SAP Crystal report files. This will be used by Viewpoint engineers who are migrating on prem Vista servers to our cloud. Updating the connection information of each Crystal report would have to be done manually through a process that could take days to complete. This process can now be completed in a few minutes.',
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/Crystal-Report-Database-Information-Updater',
    },
    btn2: {
      display: false,
      text: '',
      link: '',
    },
  },

  quarantineHack: {
    id: 11,
    title: 'QuarantineHacks 2020',
    subHeader: 'League of Legends Statistics',
    img: null,
    tags: ['python', 'html', 'css', 'my SQL'],
    text: 'We wrote python scripts to pull game data using the Riot Games API. We pulled information from 300,000 games. Regression analysis was performed on the game data. This information was stored in our My SQL database. We were going to connect our database to a front end client to display this information, but we did not finish this part of the project.',
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/QurantineHacks2020Lol',
    },
    btn2: {
      display: false,
      text: '',
      link: '',
    },
  },
  spatialFront22Q2: {
    id: 12,
    title: 'Spatial Front 2022 Q2 Hackathon',
    subHeader: 'Offline Capable Web App',
    img: null,
    tags: ['react', 'supabase', 'pwa'],
    text: 'We created a website where a rancher can enter the primary grass type in their pasture. The website uses React for the frontend and Supabase for the backend. The app makes heavy use of the IndexDB API for offline data caching. The site will detect when a user goes offline, at which point all information entered will be cached until they are online again.',
    btn1: {
      display: false,
      text: '',
      link: '',
    },
    btn2: {
      display: false,
      text: '',
      link: '',
    },
  },
};

export default cardProps;
