export default {
  home: {
    menu: {
      home: "Home",
      destinations: "Destinations",
      blog: "Blog",
      galleries: "Galleries",
      contact: "Contact",
    },
    hero: {
      title: "Discover the World",
      subtitle: "Travel through the most beautiful destinations",
      cta: "Start the adventure",
    },
    destinations: {
      title: "Popular Destinations",
      paris: {
        title: "Paris",
        description: "The city of love and light",
        link: "learn more",
      },
      tokyo: {
        title: "Tokyo",
        description: "Where tradition meets modernity",
        link: "learn more",
      },
      nyc: {
        title: "New York",
        description: "The city that never sleeps",
        link: "learn more",
      },
      mexico: {
        title: "Mexico",
        description: "The land of the Aztecs and the sun",
        link: "learn more",
      },
      london: {
        title: "London",
        description: "The city of the queen",
        link: "learn more",
      },
      prague: {
        title: "Prague",
        description: "The city of a hundred spires",
        link: "learn more",
      },
    },
    blogs: {
      title: "Why Choose Us",
      expert: {
        title: "Expert Guides",
        description: "Passionate professionals",
      },
      quality: {
        title: "Premium Quality",
        description: "Best service guaranteed",
      },
      support: {
        title: "24/7 Support",
        description: "Always there for you",
      },
    },
    cta: {
      title: "Ready to Go?",
      subtitle: "Book your next adventure now",
      button: "Book Now",
    },
  },
  destinations: {
    carrousel: {
      santorini: {
        title: "Santorini, Greece",
        description:
          "White houses clinging to cliffs, where every sunset paints the horizon in fiery hues, revealing the magic of a Mediterranean island.",
      },
      kyoto: {
        title: "Kyoto, Japan",
        description:
          "Ancestral temples where tradition dances with modernity, while cherry blossoms create an ephemeral cloud of Japanese beauty.",
      },
      sahara: {
        title: "Sahara Desert, Morocco",
        description:
          "An ocean of golden sand where silence reigns, dunes ripple under an unrelenting sun, and night transforms the desert into a celestial theater.",
      },
      patagonia: {
        title: "Patagonia, Argentina",
        description:
          "Wild territory where jagged mountains and ancient glaciers tell a story of primal nature and untamed beauty.",
      },
      bora_bora: {
        title: "Bora Bora, French Polynesia",
        description:
          "A Pacific jewel where overwater bungalows float between sky and lagoon, offering a luxurious refuge in the heart of a tropical paradise.",
      },
    },
    destination: {
      title: "Unusual Horizons: The Journeys That Will Inspire You",
      options: {
        title: "Levels of Difficulty",
        cta: "Find More",
        safari_nature: {
          title: "Safari and Nature",
          description: "Encounter wildlife in their natural habitat",
          price: "Starting at €2500",
          difficulty: {
            level: "Moderate",
            explanation:
              "Physically and mentally demanding journey. Rustic conditions, varied terrain. Requires good physical fitness and adaptability to challenging environments.",
          },
        },
        villes_culture: {
          title: "Cities and Culture",
          description:
            "Discover the history and architectural treasures of the world",
          price: "Starting at €1500",
          difficulty: {
            level: "Easy",
            explanation:
              "Accessible trip for everyone. Cultural and urban visits. Minimal physical effort required. Ideal for history and art enthusiasts.",
          },
        },
        aventures_tropicales: {
          title: "Tropical Adventures",
          description: "Explore lush jungles and paradisiacal beaches",
          price: "Starting at €1200",
          difficulty: {
            level: "Easy",
            explanation:
              "Trip accessible to all. No special physical skills required. Ideal for families and first-time travelers. Complete and secure tourist infrastructure.",
          },
        },
        montagnes_grands_espaces: {
          title: "Mountains and Wide Open Spaces",
          description: "Challenge the most mythical summits on the planet",
          price: "Starting at €2800",
          difficulty: {
            level: "Expert",
            explanation:
              "Highest level of difficulty. High altitude, complex climbing techniques. Exceptional physical condition required. Significant risks requiring extensive experience.",
          },
        },
        detente_bien_etre: {
          title: "Relaxation and Well-being",
          description: "Relax in paradisiacal and rejuvenating places",
          price: "Starting at €2000",
          difficulty: {
            level: "Easy",
            explanation:
              "Trip focused on relaxation and well-being. No physical effort required. Ideal for yoga retreats, spas, and restful vacations.",
          },
        },
        aventures_extremes: {
          title: "Extreme Adventures",
          description: "Explore unusual territories and challenge your limits",
          price: "Starting at €3000",
          difficulty: {
            level: "Difficult",
            explanation:
              "Extreme experience in severe weather conditions. Intensive physical and mental preparation. Specialized equipment mandatory. Significant environmental risks.",
          },
        },
      },
    },
    blogs: {
      title: "Why Choose Unusual Trips?",
      avantage1: {
        title: "Unique Experiences",
        description:
          "Discover off-the-beaten-path destinations that will give you unforgettable memories and new perspectives.",
      },
      avantage2: {
        title: "Guaranteed Safety",
        description:
          "Our trips are carefully selected and prepared to ensure your safety while maximizing your enjoyment and discovery.",
      },
      avantage3: {
        title: "Community of Travelers",
        description:
          "Join a community of passionate travelers, share your experiences, and create lasting connections.",
      },
      blogs_cta: {
        label: "Start Your Adventure",
      },
    },
    partners: {
      title: "Our Partners",
      description:
        "Discover the companies and organizations that trust us to offer unique experiences.",
    },
    newsletter: {
      title: "Ready to Explore the World?",
      description:
        "Join our community and receive exclusive offers, travel ideas, and tips for unforgettable adventures.",
      placeholder: "Your email address",
      button: {
        label: "Subscribe",
      },
    },
  },
  footer: {
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    contact: "Contact",
    about: "About",
    terms: "Terms of Use",
  },
} as const;
