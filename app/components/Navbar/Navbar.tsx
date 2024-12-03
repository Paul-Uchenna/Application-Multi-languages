import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScopedI18n } from "@/locales/client";
import {
  faHome,
  faGlobe,
  faCogs,
  faImages,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import SwitchLanguage from "@/app/components/SwitchLanguage";
import Link from "next/link";
import Logo from "../Logo";

export default function Navbar() {
  const tScorpe = useScopedI18n("menu");

  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menu = [
    { icon: faHome, name: tScorpe("home"), href: "/" },
    { icon: faGlobe, name: tScorpe("destinations"), href: "/" },
    { icon: faCogs, name: tScorpe("features"), href: "/" },
    { icon: faImages, name: tScorpe("galleries"), href: "/" },
    { icon: faEnvelope, name: tScorpe("contact"), href: "/" },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 10) setHasScrolled(true);
    else setHasScrolled(false);

    if (currentScrollY > lastScrollY) setIsVisible(false);
    else setIsVisible(true);

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 w-full h-16 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      } ${hasScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Logo />

          <nav>
            <ul className="flex gap-8">
              {menu.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="flex items-center text-white hover:text-yellow-400 transition-all">
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    <Link href={item.href} className="group relative">
                      <span>{item.name}</span>
                      <span className="ease absolute bottom-0 left-0 w-0 border-b-2 border-yellow-400 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <SwitchLanguage />
        </div>
      </div>
    </section>
  );
}
