import { useI18n } from "@/locales/client";
import { Destination, Feature } from "./Types/types";

const t = useI18n();

export const heroImage: string =
  "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const destinations: Destination[] = [
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.paris.title"),
    description: t("destinations.paris.description"),
    link: t("destinations.paris.link"),
  },
  {
    src: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.tokyo.title"),
    description: t("destinations.tokyo.description"),
    link: t("destinations.tokyo.link"),
  },
  {
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.nyc.title"),
    description: t("destinations.nyc.description"),
    link: t("destinations.nyc.link"),
  },
  {
    src: "https://images.unsplash.com/photo-1473726867722-6b8a5e529d76?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.mexico.title"),
    description: t("destinations.mexico.description"),
    link: t("destinations.mexico.link"),
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1694475482575-fcf2e5e64655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.london.title"),
    description: t("destinations.london.description"),
    link: t("destinations.london.link"),
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661963139522-22525f644234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: t("destinations.prague.title"),
    description: t("destinations.prague.description"),
    link: t("destinations.prague.link"),
  },
];

export const features: Feature[] = [
  {
    src: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37",
    title: t("features.expert.title"),
    description: t("features.expert.description"),
  },
  {
    src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
    title: t("features.quality.title"),
    description: t("features.quality.description"),
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: t("features.support.title"),
    description: t("features.support.description"),
  },
];

export const galleries: string[] = [
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
  "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
