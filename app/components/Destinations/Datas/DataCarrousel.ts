import { useScopedI18n } from "@/locales/client";

export const dataCarrousel = () => {
  const t = useScopedI18n("destinations.carrousel");

  return [
    {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("santorini.title"),
      description: t("santorini.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("kyoto.title"),
      description: t("kyoto.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("sahara.title"),
      description: t("sahara.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("patagonia.title"),
      description: t("patagonia.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("bora_bora.title"),
      description: t("bora_bora.description"),
    },
  ];
};
