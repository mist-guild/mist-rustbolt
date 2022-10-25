import Mock from "./mock";

const database = {
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "Apply",
      url: "/apply",
    },
  ],
  parallax: {
    bg: 'https://i.ibb.co/M7y9xL8/world-of-warcraft-dragonflight-main-menu-loading-screen.jpg',
  },
  menu: [
    {
      name: "Home",
      url: "/home",
    },
    {
      children: [
        {
          name: "Team Windbridge",
          url: "/teams/windbridge",
        },
        {
          name: "Team Clear Comms",
          url: "/teams/clear-comms",
        },
      ],
      name: "Teams",
      url: "/teams",
    },
    {
      name: "Apply",
      url: "/apply",
    },
  ],
  posts: [
    {
      category_id: 1,
      featured: true,
      id: "post_0",
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_render_2.png',
      short: "Mist is a multi-team, CE focused guild seeking raiders who want to improve their skill, advance our raid teams, and contribute to a positive and healthy guild culture.",
      title: "Mist - Illidan",
      user_id: "2",
    },
  ],
  requirements: [
    {
      featured: true,
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df.png',
      title: "Please make sure to read the following requirements before applying.",
    },
    {
      featured: true,
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_key_art.png',
      title: "General Requirements",
      data: [
        {
          title: "AGE 18+",
        },
        {
          title: "WORKING MICROPHONE",
        },
        {
          title: "ABILITY TO SPEAK DURING RAIDS",
        },
        {
          title: "MINIMUM 85% RAID ATTENDANCE",
        },
        {
          title: "STABLE INTERNET CONNECTION AND RELIABLE COMPUTER",
        },
        {
          title: "UNDERSTANDING THAT WE CARRY A 25-MAN ROSTER, AND YOU WILL SIT AT SOME POINT",
        },
      ]
    },
    {
      featured: true,
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/cinematic_render_4.png',
      title: "In-Game Requirements",
      data: [
        {
          title: "4 MYTHIC PLUS KEYS PER WEEK (UNTIL VERIFIABLE BiS)",
        },
        {
          title: "BRING ENOUGH AUGMENT RUNES AND POTS FOR EVERY PULL OF THE NIGHT",
        },
        {
          title: "PULLS BEGIN PROMPTLY AT 10 PM EST (Team Windbridge)",
        },
        {
          title: "PULLS BEGIN PROMPTLY AT 11 PM EST (Team Clear Comms)",
        },
        {
          title: "BE ONLINE 15 MINUTES BEFORE RAID TO CLEAR RAID TRASH",
        },
      ]
    },
    {
      featured: true,
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_azure_span.png',
      title: "MANDATORY ADDONS",
      data: [
        {
          title: "METHOD RAID TOOLS",
          link: 'https://www.curseforge.com/wow/addons/method-raid-tools'
        },
        {
          title: "WEAKAURAS",
          link: 'https://www.curseforge.com/wow/addons/weakauras-2'
        },
        {
          title: "DBM",
          link: 'https://www.curseforge.com/wow/addons/deadly-boss-mods'
        },
        {
          title: "BIGWIGS",
          link: 'https://www.curseforge.com/wow/addons/big-wigs'
        },
        {
          title: "RC LOOT COUNCIL",
          link: 'https://www.curseforge.com/wow/addons/rclootcouncil'
        },
      ]
    },
    {
      featured: true,
      image: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_render_3.png',
      title: "Now you are ready to apply; scroll down to fill out the application!",
    },
  ],
  achievements: [
    {
      category_id: 1,
      featured: true,
      id: "raid_1",
      image: 'https://i.ibb.co/QKQG3TR/sepulcher-of-the-first-ones-small.jpg',
      title: "Sepulcher of the First Ones",
      progress: '10/10M',
      user_id: "1",
    },
    {
      category_id: 2,
      featured: true,
      id: "raid_2",
      image: 'https://i.ibb.co/sjdq3mm/sanctum-of-domination-small.jpg',
      title: "Sanctum of Domination",
      progress: '10/10M',
      user_id: "2",
    },
    {
      category_id: 3,
      featured: true,
      id: "raid_3",
      image: 'https://i.ibb.co/k6wrsrQ/castle-nathria.jpg',
      title: "Castle Nathria",
      progress: '10/10M',
      user_id: "3",
    },
  ],
  castles: [
    {
      name: "Vault of the Incarnates",
      bg: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/public/voi.png',
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Sepulcher of the First Ones",
      bg: 'https://i.ibb.co/r00qjBS/sepulcher-of-the-first-ones-social-h.jpg',
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Sanctum of Domination",
      bg: 'https://render.worldofwarcraft.com/us/zones/sanctum-of-domination-small.jpg',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Castle Nathria",
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Ny'alotha",
      bg: 'https://render.worldofwarcraft.com/us/zones/nyalotha-the-waking-city-small.jpg',
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
  ],
  teams: [
    {
      name: "Team Windbridge",
      short: "Mist's Top 250 US Team",
      description:
        "Click here to find out more about Mist's top 250 mythic team!",
      icon: 'https://i.ibb.co/GsdyVtt/sire-Denathrius-Big.png',
      id: 0,
      bg: 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_render_1.png',
      link: "/teams/windbridge",
      TimeRanges: [
        {
          time: 'TUESDAY: 9PM-12AM CST'
        },
        {
          time: 'WEDNESDAY: 9PM-12AM CST'
        },
        {
          time: 'THURSDAY: 9PM-12AM CST'
        }
      ],
    },
    {
      name: "Team Clear Comms",
      short: "Mist's CE Team",
      description:
        "Click here to find out more about Mist' CE mythic team!",
      icon: 'https://www.pngall.com/wp-content/uploads/11/World-Of-Warcraft-PNG-HD-Image.png',
      id: 1,
      bg: 'https://wallpapercave.com/wp/wp10407651.jpg',
      link: "/teams/clear-comms",
      TimeRanges: [
        {
          time: 'MONDAY: 10PM-1AM CST'
        },
        {
          time: 'TUESDAY: 10PM-1AM CST'
        },
        {
          time: 'THURSDAY: 10PM-1AM CST'
        }
      ],

    },
  ],
  members1: [
    // shamans
    {
      user: 'Rhazkala',
      healer: true,
      about: 'Very based lead.',
    },
    // mage
    {
      user: 'Zinging',
      rdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Hoogita',
      rdps: true,
      about: 'Very based lead.',
    },
    // hunter
    {
      user: 'Billygates',
      officer: true,
      rdps: true,
      discord: 'Moonvest#0388',
      about: 'Very based lead.',
    },
    {
      user: 'Äni',
      officer: true,
      rdps: true,
      discord: 'Anisro#8121',
      about: 'Very based lead.',
    },
    {
      user: 'Ducksyan',
      rdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Zensy',
      rdps: true,
      about: 'Very based lead.',
    },
    // druid
    {
      user: 'Cuppidrood',
      officer: true,
      rdps: true,
      discord: 'Cuppie#9152',
      about: 'Very based lead.',
    },
    {
      user: 'Trumbone',
      rdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Apchicken',
      rdps: true,
      about: 'Very based lead.',
    },
    // priests
    {
      user: 'Keyonna',
      officer: true,
      healer: true,
      discord: 'Keyona#8151',
      about: 'Very based lead.',
    },
    {
      user: 'Piousbob',
      officer: true,
      rdps: true,
      discord: 'BKrenz#4028',
      about: 'Very based lead.',
    },
    {
      user: 'Nympheas',
      healer: true,
      about: 'Very based lead.',
    },
    {
      user: 'Zamyrha',
      rdps: true,
      about: 'Very based lead.',
    },
    // monks
    {
      user: 'Stoppas',
      officer: true,
      tank: true,
      discord: 'tripod#6224',
      about: 'Very based lead.',
    },
    {
      user: 'Jangoz',
      healer: true,
      about: 'Very based lead.',
    },
    // rogues
    {
      user: 'Lonsneakz',
      mdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Malicarie',
      mdps: true,
      about: 'Very based lead.',
    },
    // paladin
    {
      user: 'Saltedpal',
      officer: true,
      healer: true,
      discord: 'SaltedPork#6429',
      about: 'Very based lead.',
    },
    // warlock
    {
      user: 'Cbreez',
      rdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Dallasx',
      rdps: true,
      about: 'Very based lead.',
    },
    // dk
    {
      user: 'Mysticplay',
      mdps: true,
      about: 'Very based lead.',
    },
    // dh
    {
      user: 'Carande',
      mdps: true,
      about: 'Very based lead.',
    },
    {
      user: 'Nicaras',
      mdps: true,
      about: 'Very based lead.',
    },
  ],
  members2: [
      // shamans
      {
        user: 'Enzyte',
        officer: true,
        mdps: true,
        discord: 'Enzyte#2934',
        about: 'Very based lead.',
      },
      {
        user: 'Spuggleworth',
        rdps: true,
        about: 'Very based lead.',
      },
      // mage
      {
        user: 'Tortz',
        rdps: true,
        about: 'Very based lead.',
      },
      {
        user: 'Kholio',
        rdps: true,
        about: 'Very based lead.',
      },
      // hunter
      {
        user: 'Dyteo',
        rdps: true,
        about: 'Very based lead.',
      },
      {
        user: 'Icantsurvive',
        mdps: true,
        about: 'Very based lead.',
      },
      // druid
      {
        user: 'Tucksdru',
        officer: true,
        healer: true,
        discord: 'Tucks#7719',
        about: 'Very based lead.',
      },
      {
        user: 'Lianhai',
        rdps: true,
        about: 'Very based lead.',
      },
      // priests
      {
        user: 'Hoobz',
        healer: true,
        about: 'Very based lead.',
      },
      {
        user: 'Holeedeez',
        healer: true,
        about: 'Very based lead.',
      },
      {
        user: 'Archora',
        healer: true,
        about: 'Very based lead.',
      },
      // monks
      {
        user: 'Taekwonyolo',
        healer: true,
        about: 'Very based lead.',
      },
      // rogues
      {
        user: 'Bossxstabbyx',
        officer: true,
        mdps: true,
        discord: 'BOSSDOGGxXx#6044',
        about: 'Very based lead.',
      },
      // paladin
      {
        user: 'Massaslice',
        healer: true,
        about: 'Very based lead.',
      },
      {
        user: 'Ragnòn',
        officer: true,
        tank: true,
        discord: 'Ragnon#8407',
        about: 'Very based lead.',
      },
      // warlock
      {
        user: 'Scrúblock',
        rdps: true,
        about: 'Very based lead.',
      },
      // dk
      {
        user: 'Decentrik',
        tank: true,
        about: 'Very based lead.',
      },
      {
        user: 'Shreffi',
        officer: true,
        mdps: true,
        discord: 'shreffy#1143',
        about: 'Very based lead.',
      },
      // dh
      {
        user: 'Foils',
        mdps: true,
        about: 'Very based lead.',
      },
      // warrior
      {
        user: 'Köenigsegg',
        mdps: true,
        about: 'Very based lead.',
      }
  ],
};


Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
