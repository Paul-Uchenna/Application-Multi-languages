"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardDestinationProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

export default function CardDestination({
  src,
  title,
  description,
  link,
}: CardDestinationProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-64">
        <Image src={src} fill className="object-cover" alt={title} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black/80">{title}</h3>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600 ">{description}</p>
          <Link
            href={""}
            className="text-emerald-500 hover:text-emerald-600 hover:tracking-wide transition-all"
          >
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
}
