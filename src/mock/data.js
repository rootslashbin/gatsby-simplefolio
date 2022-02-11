import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ethereal Apes', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Apollo-1024.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Abstract-Bow-Abyssal.jpeg',
    title: '730+ Assets at 4k UHD Resolution',
    info: '730+ hand drawn assets by our wonderful artist @Aryaenne.',
    info2: 'All at 4000x4000 at 400 DPI.  Print to your hearts content or blow them up on a 70" 4k display with ease.',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sayan-visor.jpg',
    title: '9 Different Fur Types, 117 Unique Fur Fills',
    info: 'Over a month spent on quality control on professional grade displays to ensure the highest fidelity.',
    info2: 'More than 2TB worth of samples, over 180,000 images, generated and curated with love',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Orb.jpg',
    title: 'Insanely Intricate Backgrounds',
    info: 'Most profile pictures skimp on the background.  Usually, you get a single color, and if youre lucky, some basic artwork.',
    info2: 'Our backgrounds are composed of 3 separate layers, the Canvas, Background Type, and Background Fill with 5, 6, and 13 combinations each allowing for up to 480 different possible high quality, highly detailed backgrounds',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zombie-yakuza.jpeg',
    title: 'A Completely Custom Generator',
    info: 'Early on in our project we realized that simply overlaying layers on top of one another was not going to allow us to achieve the artistic goals we set out for.',
    info2: 'Because of what we wanted to achieve, we built a custom generator in the Go programming language that allows for complex rulesets, compositions, exclusions, refined rarity calculations, meta traits, and more.',
    // url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'poseidon.jpg',
    title: 'Meta Traits',
    info: 'We wanted to build the most premium experience for collectors of our NFTs.',
    info2: '  Meta traits signal specific combinations that make simpler filters and aesthetic rarities easier than ever.',
    // url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flow.jpeg',
    title: 'Gas Efficient Smart Contracts',
    info: 'Our contract is based on the Nuclear Nerds ERC721 implementation.  This allows for a gas efficient mint with up to 80% savings over your average ERC-721 mint.  In addition, that means no approvals are necessary and the whitelist is handled in a cost efficient manner involving a merkle tree that stores addresses and allocations in its leaf nodes 😤',
    info2: '',
    // url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/etherealapes',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/etherealapes',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/etherealapes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
