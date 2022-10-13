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
      short: "Mist is a multi-teamed, CE focused guild that wants raiders who want to improve their individual skill, improve the raid team, and improve the culture we foster.",
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
          title: "AGE +18",
        },
        {
          title: "WORKING MICROPHONE",
        },
        {
          title: " ABILITY TO SPEAK DURING RAIDS",
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
          title: "4 MYTHIC PLUS KEYS PER WEEK (UNTIL VERIFIABLE BIS)",
        },
        {
          title: "BRING ENOUGH AUGMENT RUNES AND POTS FOR EVERY PULL OF THE NIGHT",
        },
        {
          title: "PULLS BEGIN PROMPTLY AT 10 PM EST (Team Wind Bridge)",
        },
        {
          title: "PULLS BEGIN PROMPTLY AT 11 PM EST (TEAM Clear Comms)",
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
      name: "Castle Nathria",
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Fated Castle Nathria",
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Sanctum of Domination ",
      bg: 'https://render.worldofwarcraft.com/us/zones/sanctum-of-domination-small.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Fated Sanctum of Domination ",
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
    {
      name: "Sepulcher of the First Ones",
      bg: 'https://i.ibb.co/r00qjBS/sepulcher-of-the-first-ones-social-h.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      link: "https://www.youtube.com/watch?v=wawBZZvizLQ&ab_channel=DonkeystormGaming",
    },
    {
      name: "Fated Sepulcher of the First Ones",
      bg: 'https://i.ibb.co/r00qjBS/sepulcher-of-the-first-ones-social-h.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
  ],
  teams: [
    {
      name: "Team Windbridge",
      short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
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
      short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
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
    {
      id: 0,
      user: 'Billygates',
      officer: true,
      discord: 'Billygates#1234',
      about: '',
    },
    {
      id: 1,
      user: 'Äni',
      officer: false,
    },
    {
      id: 2,
      user: 'Zensy',
      officer: false,
    },
    {
      id: 3,
      user: 'Ducksyan',
      officer: false,
    },
    {
      id: 3,
      user: 'Mysticplay',
      officer: false,
    },
    {
      id: 4,
      user: 'Mysticplay',
      officer: false,
    },
    {
      id: 5,
      user: 'Mysticplay',
      officer: false,
    },
    {
      id: 6,
      user: 'Dallasx',
      officer: false,
    }
  ],
  members2: [
    {
      id: 0,
      user: 'Ragnòn',
      officer: true,
      tank: true,
      healer: false,
      mdps: false,
      rdps: false,
      discord: 'Ragnòn#1234',
      about: 'Very based lead.',
    },
    {
      id: 1,
      user: 'Enzyte',
      discord: 'Enzyte#1234',
      officer: true,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 2,
      user: 'Bossxstabbyx',
      discord: 'Boss#1234',
      officer: true,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 3,
      user: 'Tucksdru',
      discord: 'Tucks#1234',
      officer: true,
      tank: false,
      healer: true,
      mdps: false,
      rdps: false,
    },
    {
      id: 4,
      user: 'Taekwonyolo',
      officer: false,
      tank: false,
      healer: true,
      mdps: false,
      rdps: false,
    },
    {
      id: 5,
      user: 'Holeedeez',
      officer: false,
      tank: false,
      healer: true,
      mdps: false,
      rdps: false,
    },
    {
      id: 6,
      user: 'Hoobz',
      officer: false,
      tank: false,
      healer: true,
      mdps: false,
      rdps: false,
    },
    {
      id: 7,
      user: 'Cloùdz',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 8,
      user: 'Tortz',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 9,
      user: 'Foils',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 10,
      user: 'Köenigsegg',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 11,
      user: 'Shreffi',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 12,
      user: 'Kholio',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 13,
      user: 'Nullzy',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 14,
      user: 'Icantsurvive',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 15,
      user: 'Spuggleworth',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 16,
      user: 'Dyteo',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 17,
      user: 'Kirillas',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 18,
      user: 'Archora',
      officer: false,
      tank: false,
      healer: true,
      mdps: false,
      rdps: false,
    },
    {
      id: 19,
      user: 'Xolten',
      officer: false,
      tank: false,
      healer: false,
      mdps: true,
      rdps: false,
    },
    {
      id: 20,
      user: 'Vynlanesh',
      officer: false,
      tank: false,
      healer: false,
      mdps: false,
      rdps: true,
    },
    {
      id: 21,
      user: 'Bemism',
      officer: true,
      tank: true,
      healer: false,
      mdps: false,
      rdps: false,
    },
  ],
};


Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
