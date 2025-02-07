"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { articles } from "@/app/components/Blog/DataArticles";
import { useScopedI18n } from "@/locales/client";

export default function Blog() {
  const t = useScopedI18n("blog");

  useEffect(() => {
    gsap.fromTo(
      ".animate-fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute w-full h-screen bg-black bg-opacity-20" />
        <div className="absolute w-full h-full -z-10">
          <Image
            src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center md:pl-20">
          <div className="text-white max-w-2xl text-center md:text-left">
            <h2 className="text-6xl font-bold mb-5 animate-fade-in">
              {t("titleOne")}
            </h2>
            <p className="text-2xl animate-fade-in">{t("subtitleOne")}</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12 bg-gray-900 border-b border-gray-700">
        <div className="w-full max-w-3xl mx-auto text-center text-white leading-normal">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-3">
            {t("titleTwo")}
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            {t("subtitleTwo")}
          </p>
        </div>

        {/* Article cards */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="mx-auto w-full max-w-[23rem] bg-gray-700 text-white mt-8 rounded-2xl shadow-lg p-4 border border-gray-400 border-opacity-50 flex flex-col"
            >
              <div className="w-full overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1000}
                  height={600}
                  className="w-full h-48"
                />
              </div>
              <div className="mt-4 flex flex-col flex-grow">
                <span className="w-16 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                  {t("titleThree")}
                </span>
                <h3 className="text-xl font-bold mt-2">{article.title}</h3>
                <p className="text-gray-400 text-sm mt-2 flex-grow">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-sm text-gray-200 font-semibold">
                        {article.author}
                      </p>
                      <p className="text-xs text-gray-400">
                        {article.date} - {article.readTime}
                      </p>
                    </div>
                    <Link href="#">
                      <button className="ml-auto text-yellow-500 hover:underline">
                        {t("readMore")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </section>
  );
}
