import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "David's Website", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'David',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    "I'm a Computer Science student at Universidade Federal de Sergipe, Brazil, since 2018.",
  paragraphTwo:
    'I have a great passion in Game development, but for now I’m only a beginning Software Developer that have a bit of experience in web development ',
  paragraphThree:
    'My objective is to become a Great Game developer and put my ideas and creativity to work and make some inspiring games',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Planets.png',
    title: 'Universe Discover',
    info:
      'Universe Discover is a React Project that catalogs celestial bodies like Planets, Stars, Planet System, Galaxy and others',
    info2: 'This Project was an activity for Database discipline from the college. ',
    url: 'https://universe-discovery-c7151.web.app',
    repo: 'https://github.com/02David03/Bd-Work', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'daviid.0203@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/davd_id',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-almeida-cunha-22b147188/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/02David03',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
