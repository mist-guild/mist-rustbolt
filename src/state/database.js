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
          name: "Team Wind Bridge",
          url: "/teams/twb",
        },
        {
          name: "Team Clear Comms",
          url: "/teams/tcc",
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
      image: 'https://i.ibb.co/4YNK3hh/cinematic-render-2.jpg',
      short: "WE WANT RAIDERS WHO WANT TO IMPROVE THEIR PLAY, IMPROVE THE RAID TEAM, AND IMPROVE THE CULTURE WE FOSTER HERE.",
      title: "Mist is a cutting-edge guild focused on us-250 progression.",
      user_id: "2",
    },
    {
      category_id: 2,
      featured: true,
      id: "post_1",
      image: 'https://wallpapercave.com/wp/wp10407651.jpg',
      short: "WE WANT RAIDERS WHO WANT TO IMPROVE THEIR PLAY, IMPROVE THE RAID TEAM, AND IMPROVE THE CULTURE WE FOSTER HERE.",
      title: "OUR GUILD PRIDES ITSELF ON ALWAYS IMPROVING. ",
      user_id: "1",
    },
  ],
  requirements: [
    {
      featured: true,
      image: 'https://i.ibb.co/4YNK3hh/cinematic-render-2.jpg',
      title: "Please make sure to read the following requirements before applying.",
    },
    {
      featured: true,
      image: 'https://i.ibb.co/4YNK3hh/cinematic-render-2.jpg',
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
      image: 'https://wallpapercave.com/wp/wp10407651.jpg',
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
      image: 'https://wallpapercave.com/wp/wp10407651.jpg',
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
      image: 'https://i.ibb.co/4YNK3hh/cinematic-render-2.jpg',
      title: "Now You are all set, Scroll down to Apply!",
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
      icon: 'https://i.ibb.co/GsdyVtt/sire-Denathrius-Big.png',
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Castle Nathria",
      icon: 'https://i.ibb.co/MMMXL1Z/sludgefist-Big.png',
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Sanctum of Domination ",
      icon: 'https://i.ibb.co/fDzyrLk/pngwing-com-1.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Sanctum of Domination ",
      icon: 'https://i.ibb.co/fDzyrLk/pngwing-com-1.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
    {
      name: "Sepulcher of the First Ones",
      icon: 'https://i.ibb.co/XFgMzrx/zovaal-the-jailer-heroic-kill1644882949-picture-item-small.png',
      bg: 'https://i.ibb.co/r00qjBS/sepulcher-of-the-first-ones-social-h.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Sepulcher of the First Ones",
      icon: 'https://i.ibb.co/XFgMzrx/zovaal-the-jailer-heroic-kill1644882949-picture-item-small.png',
      bg: 'https://i.ibb.co/r00qjBS/sepulcher-of-the-first-ones-social-h.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
  ],
  teams: [
    {
      name: "Team Wind Bridge",
      short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      icon: 'https://i.ibb.co/GsdyVtt/sire-Denathrius-Big.png',
      id: 0,
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      link: "/teams/twb",
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
      link: "/teams/tcc",
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
  ],
};


Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
