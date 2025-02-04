"use client";

import React, { useEffect, useState } from "react";
import { dataCarrousel } from "@/app/components/Destinations/Datas/DataCarrousel";
import { destinationOptions } from "@/app/components/Destinations/Datas/DataDestination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import CardCarrousel from "@/app/components/Destinations/CardCarrousel";
import SearchDestination from "@/app/components/SearchDestination/SearchDestination";
import Link from "next/link";
import { partners } from "@/app/components/Destinations/Datas/DataPartners";

export default function DestinationsPage() {
  const [showExplanation, setShowExplanation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataCarrousel().length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataCarrousel().length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        <CardCarrousel
          imgCarrousel={dataCarrousel()}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>

      <SearchDestination />

      {/* Section des Destinations */}

      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Horizons Insolites : Les Voyages qui Vous Inspireront
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinationOptions.map((destination) => (
              <div
                key={destination.title}
                className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage: `url(${destination.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 duration-300 z-10" />

                <div className="absolute top-4 right-4 group z-20">
                  <div
                    className={`flex items-center px-3 py-1 opacity-75 rounded-full text-sm font-semibold cursor-pointer ${
                      destination.difficulty.level === "Facile"
                        ? "bg-green-100 text-green-800"
                        : destination.difficulty.level === "Modéré"
                        ? "bg-yellow-100 text-yellow-800"
                        : destination.difficulty.level === "Difficile"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {destination.difficulty.level}
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-2" />

                    {/* Tooltip */}
                    <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-[92%] md:-translate-x-80 translate-y-52 mb-2 bg-gray-800 text-white px-3 py-2 rounded-lg w-64 z-40 text-center shadow-lg">
                      <h3 className="font-bold mb-2">Niveau de Difficulté</h3>
                      <p className="text-sm">
                        {destination.difficulty.explanation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contenu principal de la carte */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                  <h2 className="text-2xl font-bold mb-2 text-left drop-shadow-lg">
                    {destination.title}
                  </h2>
                  <p className="text-gray-200 mb-4 text-left drop-shadow-md">
                    {destination.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-green-200 font-semibold drop-shadow-md">
                      {destination.price}
                    </span>
                    <Link
                      href={`/destination/${destination.title}`}
                      className="mt-2 px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
                    >
                      Find More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Choisir des Voyages Insolites ? */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Pourquoi Choisir des Voyages Insolites ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Expériences Uniques
              </h3>
              <p className="text-gray-600">
                Découvrez des destinations hors des sentiers battus qui vous
                offriront des souvenirs inoubliables et des perspectives
                nouvelles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Sécurité Garantie
              </h3>
              <p className="text-gray-600">
                Nos voyages sont soigneusement sélectionnés et préparés pour
                assurer votre sécurité tout en maximisant votre plaisir et votre
                découverte.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.293-1.47-.764-2M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.293-1.47.764-2M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Communauté de Voyageurs
              </h3>
              <p className="text-gray-600">
                Rejoignez une communauté de voyageurs passionnés, partagez vos
                expériences et créez des connexions durables.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 inline-block text-lg"
            >
              Commencez Votre Aventure
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="bg-yellow-500 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nos Partenaires
          </h2>

          {/* Carrousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-16">
              {/* Première ligne de logos */}
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16"
                />
              ))}
              {/* Deuxième ligne de logos (identiques à la première) */}
              {partners.map((partner, index) => (
                <img
                  key={`second-${index}`}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Prêt à explorer le monde ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Rejoignez notre communauté et recevez des offres exclusives, des
            idées de voyages et des conseils pour des aventures inoubliables.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="px-4 py-3 w-full md:w-1/3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
