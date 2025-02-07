"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import { useScopedI18n } from "@/locales/client";

export default function Contact() {
  const t = useScopedI18n("contact");

  const contactInfo = [
    {
      icon: faGlobeEurope,
      label: t("card.information"),
      value: "www.pauluchenna.com",
    },
    { icon: faPhone, label: t("card.callOn"), value: "+13132008109" },
    { icon: faMapMarkerAlt, label: t("card.office"), value: "Luxembourg" },
    {
      icon: faEnvelope,
      label: t("card.email"),
      value: "pauluchenna20@gmail.com",
    },
  ];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage(
        "Thank you for reaching out! We'll get back to you as soon as possible."
      );
      setIsFormVisible(true);
    } catch (error) {
      console.error(error);
      setMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-black opacity-95 text-white font-bold">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center my-16">
          <h2 className="text-3xl md:text-5xl text-center">{t("title")}</h2>
          <p>{t("subtitle")} </p>
        </div>
        <h3 className="text-2xl text-center text-yellow-500 mb-2">
          {t("titleTwo")}
        </h3>
        <h4 className="text-md text-center text-white mb-10">
          {t("subtitleTwo")}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
          {contactInfo.map((item, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="text-yellow-500 text-3xl mb-2">
                <FontAwesomeIcon icon={item.icon} aria-label={item.label} />
              </div>
              <h4 className="text-lg font-semibold">{item.label}</h4>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {isFormVisible ? (
          <p className="text-center text-green-500 mt-14 text-2xl">{message}</p>
        ) : (
          <div>
            <h3 className="text-xl text-center mb-10">{t("titleThree")} </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("form.name")}
                  className="w-full text-black p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  minLength={2}
                />
                <input
                  type="email"
                  placeholder={t("form.email")}
                  className="w-full text-black p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <input
                type="text"
                placeholder={t("form.subject")}
                className="w-full text-black p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                required
                minLength={5}
              />
              <textarea
                placeholder={t("form.message")}
                className="w-full text-black font-semibold p-3 border rounded-lg h-32 outline-none focus:ring-2 focus:ring-yellow-400"
                required
                minLength={10}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : t("form.button")}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
