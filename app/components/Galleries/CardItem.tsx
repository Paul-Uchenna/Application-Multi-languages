"use client";

import React from "react";
import Image from "next/image";

interface CardItemProps {
  imgUrl: string;
}

export default function CardItem({ imgUrl }: CardItemProps) {
  return (
    <div className="relative h-64 group overflow-hidden rounded-lg">
      <Image
        src={imgUrl}
        fill
        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        alt="Gallery Image"
      />
    </div>
  );
}
