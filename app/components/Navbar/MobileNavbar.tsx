"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import Logo from "../Logo";
import SwitchLanguage from "@/app/components/SwitchLanguage";
import Image from "next/image";
import Link from "next/link";
import svg_open_Menu from "@/public/align-left-svgrepo-com.svg";
import svg_close_menu from "@/public/close-circle-svgrepo-com.svg";
import { getMenu } from "./navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNavbar() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setHasScrolled(currentScrollY > 10);
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY === 0);

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen, handleClickOutside]);

  return (
    <div className="md:hidden">
      <div
        className={`fixed top-0 left-0 right-0 w-full h-16 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-16"
        } ${hasScrolled ? "bg-black" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg p-2"
            >
              <Image
                src={svg_open_Menu}
                width={25}
                height={25}
                alt={isMenuOpen ? "Close Menu" : "Open Menu"}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex justify-end transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="relative w-72 bg-black py-12 px-6 h-full">
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute top-4 right-4 hover:-rotate-180 duration-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg p-2"
            aria-label="Close Menu"
          >
            <Image
              src={svg_close_menu}
              width={25}
              height={25}
              alt="Close Menu"
            />
          </button>
          <nav className="mb-6">
            <ul className="flex flex-col gap-2">
              {getMenu().map((item, index) => (
                <li key={index} className="flex flex-col space-x-2">
                  <div className="flex items-center text-white hover:text-yellow-400 transition-all duration-500">
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    <Link
                      href={item.href}
                      className="group relative focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg p-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="ease absolute bottom-0 left-0 w-0 border-b-2 border-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
}
