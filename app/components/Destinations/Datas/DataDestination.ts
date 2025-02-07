import { useScopedI18n } from "@/locales/client";

export const destinationOptionsData = () => {
  const t = useScopedI18n("destinations.destination.options");

  return [
    {
      title: t("safari_nature.title"),
      description: t("safari_nature.description"),
      price: t("safari_nature.price"),
      difficulty: {
        level: t("safari_nature.difficulty.level"),
        explanation: t("safari_nature.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1558791985-4241e4011215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: t("villes_culture.title"),
      description: t("villes_culture.description"),
      price: t("villes_culture.price"),
      difficulty: {
        level: t("villes_culture.difficulty.level"),
        explanation: t("villes_culture.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
    },
    {
      title: t("aventures_tropicales.title"),
      description: t("aventures_tropicales.description"),
      price: t("aventures_tropicales.price"),
      difficulty: {
        level: t("aventures_tropicales.difficulty.level"),
        explanation: t("aventures_tropicales.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1520483725102-a4daafec9a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXZlbnR1cmVzJTIwVHJvcGljYWxlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: t("montagnes_grands_espaces.title"),
      description: t("montagnes_grands_espaces.description"),
      price: t("montagnes_grands_espaces.price"),
      difficulty: {
        level: t("montagnes_grands_espaces.difficulty.level"),
        explanation: t("montagnes_grands_espaces.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: t("detente_bien_etre.title"),
      description: t("detente_bien_etre.description"),
      price: t("detente_bien_etre.price"),
      difficulty: {
        level: t("detente_bien_etre.difficulty.level"),
        explanation: t("detente_bien_etre.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1560233026-ad254fa8da38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEQlQzMlQTl0ZW50ZSUyMGV0JTIwQmllbiUyMCVDMyVBQXRyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: t("aventures_extremes.title"),
      description: t("aventures_extremes.description"),
      price: t("aventures_extremes.price"),
      difficulty: {
        level: t("aventures_extremes.difficulty.level"),
        explanation: t("aventures_extremes.difficulty.explanation"),
      },
      backgroundImage:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    },
  ];
};
