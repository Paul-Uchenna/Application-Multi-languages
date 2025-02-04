"use client";

import React from "react";
import Image from "next/image";

interface CardItemProps {
  src: string;
  title: string;
  description: string;
}

export default function CardItem({ src, title, description }: CardItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white py-4">
      <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
        <Image src={src} fill className="object-cover" alt={title} />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl text-black/80 font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
