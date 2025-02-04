import { useScopedI18n } from "@/locales/client";
import {
  faHome,
  faGlobe,
  faImages,
  faEnvelope,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

export const getMenu = () => {
  const tScorpe = useScopedI18n("home.menu");
  return [
    { icon: faHome, label: tScorpe("home"), href: "/" },
    { icon: faGlobe, label: tScorpe("destinations"), href: "/destinations" },
    { icon: faNewspaper, label: tScorpe("blog"), href: "/blog" },
    { icon: faImages, label: tScorpe("galleries"), href: "/galleries" },
    { icon: faEnvelope, label: tScorpe("contact"), href: "/contact" },
  ];
};
