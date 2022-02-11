import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ethereal Apes', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Ethereal Apes', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'We wanted to create the absolute highest quality derivative NFTs. So we created ',
  name: 'Ethereal Apes',
  subtitle: '',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Apollo-1024.jpg',
  paragraphOne: 'Ethereal Apes are a 10,000 piece derivative NFT collection that pays homage to Bored Ape Yacht Club on the Ethereum blockchain.',
  paragraphTwo: 'Ethereal Apes was inspired by a desire to see the NFT community raise the bar for derivative projects both artistically and technologically.',
  paragraphThree: 'Simply put, we wish to set the standard for quality in derivative projects.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'flow.jpg',
    title: '730+ Hand Crafted Assets at 4k UHD Resolution',
    info: '730+ hand drawn assets by our wonderful artist @Aryaenne.',
    info2: 'All at 4000x4000 at 400 DPI. Print to your hearts content or blow them up on a 70" 4k display with ease.',
    url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sayan-visor.jpg',
    title: '9 Different Fur Types, 117 Unique Fur Fills',
    info: 'Over a month spent on quality control on professional grade displays to ensure the highest fidelity.',
    info2: 'More than 2TB worth of samples, over 180,000 images, generated and curated with love',
    url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Orb.jpg',
    title: 'Insanely Intricate Backgrounds',
    info: 'Most profile pictures have relatively simple backgrounds. Usually, you get a single color, and if youre lucky, some basic artwork.',
    info2: 'Our backgrounds are composed of 3 separate layers, the Canvas, Background Type, and Background Fill with 5, 6, and 13 combinations each allowing for up to 390 different possible high quality backgrounds',
    url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zombie-yakuza.jpeg',
    title: 'A Completely Custom Generator',
    info: 'Early on in our project we realized that simply overlaying layers on top of one another was not going to allow us to achieve the artistic goals we set out for.',
    info2: 'Because of our goals, not just any open source generator would do. We built a custom generator that allows for complex rulesets, compositions, exclusions, refined rarity calculations, meta traits, and more.',
    url: '',
    repo: 'https://github.com/etherealapes/generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'poseidon.jpg',
    title: 'Meta Traits',
    info: 'We wanted to build the most premium experience for collectors of our NFTs.',
    info2: '  Meta traits signal specific combinations that make filters simpler and rarity based aesthetics easier than ever.',
    // url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Abstract-Bow-Abyssal.jpeg',
    title: 'Gas Efficient Smart Contracts',
    info: 'Our contract allows for a gas efficient mint with up to 80% savings over your average ERC-721 mint.',
    info2: 'Oh, and to save everyone even more precious ETH, no approvals are necessary when selling on Opensea.',
    // url: '',
    repo: 'https://github.com/etherealapes/contracts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Collector-Sea-Storm.jpeg',
    title: 'Mint Details',
    info: 'Price: .08 ETH',
    info2: 'Supply: 10,000',
    // url: '',
    // repo: 'https://github.com/etherealapes/contracts', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ready to mint anon?',
  btn: 'Mint',
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
      url: 'https://medium.com/@EtherealApes',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EtherealApes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
