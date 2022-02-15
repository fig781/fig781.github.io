const cardProps = {
  codingStatsProps: {
    id: 1,
    title: 'myCodingStats.com',
    subHeader: null,
    img: '',
    tags: [
      'Vue.js',
      'HTML',
      'CSS',
      'Javascript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Heroku',
    ],
    text: 'This is a fullstack site where people learning to program can track the time they spend each day learning to code. You can track the time you spend on each project, and time spent using each technology.',
    btn1: {
      display: true,
      text: 'View Live',
      link: 'https://www.mycodingstats.com/',
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
      'Next.js',
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'Supabase',
      'Bootstrap',
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
    tags: ['React.js', 'Javascript', 'HTML', 'Tailwind CSS', 'PWA'],
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
    tags: ['Vue.js', 'HTML', 'CSS', 'Javascript'],
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

  learnfluentProps: {
    id: 5,
    title: 'Learnfluent - Chrome Extension for foreign language learning',
    subHeader: null,
    img: '',
    tags: ['HTML', 'CSS', 'Javascript'],
    text: 'This is a chrome extension that will help you learn a foreign language. Each day you are given a new word from the language of your choice.',
    btn1: {
      display: true,
      text: 'Chrome Store',
      link: 'https://chrome.google.com/webstore/detail/learnfluent/diffhlcafbihhmocdaknniaddfjefigh',
    },
    btn2: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/chromeExtensionWordADay',
    },
  },

  keyValueProps: {
    id: 6,
    title: 'A Key Value Database',
    subHeader: null,
    img: '',
    tags: ['Golang'],
    text: 'This is an in-memory key value database similar to Redis (but a bit more basic). The program works by creating a TCP server on localhost that can then be connected to by a client.',
    btn1: {
      display: true,
      text: 'Source Code',
      link: 'https://github.com/fig781/its-a-key-value-database',
    },
    btn2: { display: false, text: '', link: '' },
  },

  cloudNativeHack: {
    id: 7,
    title: 'Cloud Native Hackathon 2021',
    subHeader: 'Call Sentiment Tracker',
    img: null,
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
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
    id: 8,
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
    id: 9,
    title: 'QuarantineHacks 2020',
    subHeader: 'League of Legends Statistics',
    img: null,
    tags: ['Python', 'HTML', 'CSS', 'My SQL'],
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
};

export default cardProps;
