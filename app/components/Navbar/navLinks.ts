import { useScopedI18n } from "@/locales/client";
import {
  faHome,
  faGlobe,
  faCogs,
  faImages,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const getMenu = () => {
  const tScorpe = useScopedI18n("home.menu");
  return [
    { icon: faHome, name: tScorpe("home"), href: "/" },
    { icon: faGlobe, name: tScorpe("destinations"), href: "/destinations" },
    { icon: faCogs, name: tScorpe("features"), href: "/features" },
    { icon: faImages, name: tScorpe("galleries"), href: "/galleries" },
    { icon: faEnvelope, name: tScorpe("contact"), href: "/contact" },
  ];
};
