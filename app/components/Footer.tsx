import { useI18n } from "@/locales/client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const t = useI18n();
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>{t("footer.rights")}</p>
          <div className="space-x-6">
            {/* Social Links*/}
            <Link
              target="_blank"
              href="https://github.com/Paul-Uchenna"
              className="hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-all">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-all">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link href="#" className="hover:text-red-500 transition-all">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="space-x-6">
            <Link href="#" className="hover:text-gray-100">
              {t("footer.about")}
            </Link>
            <Link href="#" className="hover:text-gray-100">
              {t("footer.contact")}
            </Link>
            <Link href="#" className="hover:text-gray-100">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
