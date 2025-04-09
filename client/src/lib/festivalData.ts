// Festival lineup data
export interface Schedule {
  time: string;
  artist: string;
  genre: string;
}

export interface Stage {
  name: string;
  schedule: Schedule[];
}

export interface DayLineup {
  day: string;
  date: string;
  stages: Stage[];
}

export interface Artist {
  name: string;
  genre: string;
  bio: string;
  image: string;
}

export interface TicketTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  unavailableFeatures?: string[];
  popular?: boolean;
  colorClass: string;
  buttonClass: string;
}

// Festival data
export const festivalDates = {
  start: "AUGUST 14",
  end: "AUGUST 16",
  year: "2024"
};

export const dayLineups: DayLineup[] = [
  {
    day: "DAY 1",
    date: "August 14, 2024",
    stages: [
      {
        name: "MAIN STAGE",
        schedule: [
          { time: "22:00", artist: "Cosmic Riders", genre: "Electronic / House" },
          { time: "20:30", artist: "Luna Eclipse", genre: "Alternative / Indie" },
          { time: "19:00", artist: "Static Waves", genre: "Electronic / Ambient" }
        ]
      },
      {
        name: "PULSE DOME",
        schedule: [
          { time: "23:00", artist: "Neural Sync", genre: "Techno / Industrial" },
          { time: "21:00", artist: "Quantum Beats", genre: "Bass / Dubstep" },
          { time: "19:30", artist: "Neon Jungle", genre: "Drum & Bass" }
        ]
      },
      {
        name: "ECHO ARENA",
        schedule: [
          { time: "22:30", artist: "Orbit Collective", genre: "Hip Hop / Rap" },
          { time: "20:00", artist: "Crystal Method", genre: "Indie Rock" },
          { time: "18:00", artist: "Velvet Horizon", genre: "Pop / R&B" }
        ]
      }
    ]
  },
  {
    day: "DAY 2",
    date: "August 15, 2024",
    stages: [
      {
        name: "MAIN STAGE",
        schedule: [
          { time: "22:00", artist: "Digital Dreams", genre: "Electronic / Trance" },
          { time: "20:30", artist: "Sonic Revolution", genre: "Rock / Alternative" },
          { time: "19:00", artist: "Echo Chamber", genre: "Ambient / Downtempo" }
        ]
      },
      {
        name: "PULSE DOME",
        schedule: [
          { time: "23:00", artist: "Bass Invaders", genre: "Bass / Trap" },
          { time: "21:00", artist: "Rhythm Collective", genre: "House / Disco" },
          { time: "19:30", artist: "Electric Soul", genre: "Soul / Electronic" }
        ]
      },
      {
        name: "ECHO ARENA",
        schedule: [
          { time: "22:30", artist: "Lyrical Mind", genre: "Hip Hop / Poetry" },
          { time: "20:00", artist: "The Vibrations", genre: "Indie / Folk" },
          { time: "18:00", artist: "Future Nostalgia", genre: "Pop / Synthwave" }
        ]
      }
    ]
  },
  {
    day: "DAY 3",
    date: "August 16, 2024",
    stages: [
      {
        name: "MAIN STAGE",
        schedule: [
          { time: "22:00", artist: "Harmonic Fusion", genre: "Electronic / World" },
          { time: "20:30", artist: "Neon Lights", genre: "Synthpop / New Wave" },
          { time: "19:00", artist: "Midnight Voyage", genre: "Progressive / Trance" }
        ]
      },
      {
        name: "PULSE DOME",
        schedule: [
          { time: "23:00", artist: "Tribal Groove", genre: "Tribal House / Tech" },
          { time: "21:00", artist: "Wave Riders", genre: "Wave / Trap" },
          { time: "19:30", artist: "Urban Echoes", genre: "UK Garage / Bass" }
        ]
      },
      {
        name: "ECHO ARENA",
        schedule: [
          { time: "22:30", artist: "Jazz Collective", genre: "Jazz / Fusion" },
          { time: "20:00", artist: "Soul Sisters", genre: "Soul / R&B" },
          { time: "18:00", artist: "Funk Factory", genre: "Funk / Disco" }
        ]
      }
    ]
  }
];

export const featuredArtists: Artist[] = [
  {
    name: "Cosmic Riders",
    genre: "Electronic / House",
    bio: "Progressive house duo known for their energetic sets and euphoric melodies.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Luna Eclipse",
    genre: "Alternative / Indie",
    bio: "Indie sensation with dreamy vocals and atmospheric soundscapes.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Neural Sync",
    genre: "Techno / Industrial",
    bio: "Berlin-based techno producer pushing the boundaries of industrial soundscapes.",
    image: "https://images.unsplash.com/photo-1516016738273-60b34e7d3512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Orbit Collective",
    genre: "Hip Hop / Rap",
    bio: "International hip-hop collective blending beats and rhymes from around the globe.",
    image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Quantum Beats",
    genre: "Bass / Dubstep",
    bio: "Bass music innovator with signature drops and mind-bending sound design.",
    image: "https://images.unsplash.com/photo-1554446422-d05db23719d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Crystal Method",
    genre: "Indie Rock",
    bio: "Indie rock quartet known for their captivating live performances and poetic lyrics.",
    image: "https://images.unsplash.com/photo-1534126874-5f6762c6f6b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Velvet Horizon",
    genre: "Pop / R&B",
    bio: "Chart-topping vocalist blending contemporary pop with soulful R&B influences.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Neon Jungle",
    genre: "Drum & Bass",
    bio: "High-energy drum & bass producer known for intricate rhythms and jungle influences.",
    image: "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

export const ticketTiers: TicketTier[] = [
  {
    name: "REGULAR PASS",
    price: "$149",
    description: "3-day festival access",
    colorClass: "from-black/80 to-primary/30 hover:border-primary",
    buttonClass: "bg-white hover:bg-primary hover:text-white text-background",
    features: [
      "General admission to all stages",
      "Access to food & drink vendors",
      "Festival app access",
    ],
    unavailableFeatures: [
      "Fast-track entry",
      "VIP areas",
    ]
  },
  {
    name: "VIP PASS",
    price: "$299",
    description: "3-day premium experience",
    popular: true,
    colorClass: "from-black/80 to-secondary/30 border-secondary",
    buttonClass: "bg-secondary hover:bg-white hover:text-background text-white",
    features: [
      "All Regular Pass benefits",
      "Fast-track entry to all areas",
      "Access to VIP lounges & viewing areas",
      "Complimentary drinks package",
      "Exclusive festival merchandise",
    ]
  },
  {
    name: "PLATINUM PASS",
    price: "$499",
    description: "Ultimate festival experience",
    colorClass: "from-black/80 to-accent/30 hover:border-accent",
    buttonClass: "bg-white hover:bg-accent hover:text-white text-background",
    features: [
      "All VIP Pass benefits",
      "Backstage access & artist meet-ups",
      "Luxury restroom facilities",
      "Dedicated concierge service",
      "Exclusive afterparty access",
    ]
  }
];

export const festivalLocation = {
  name: "Festival Zone C Grounds",
  address: "123 Festival Avenue",
  city: "Cityville, CV 12345",
  mapUrl: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
};

export const aboutStats = [
  { value: "5+", label: "Years" },
  { value: "100+", label: "Artists" },
  { value: "30K+", label: "Attendees" },
  { value: "3", label: "Days" }
];

export const aboutGalleryImages = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
];
