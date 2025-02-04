"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute w-full h-screen bg-black bg-opacity-40" />
        <div className="absolute w-full h-full -z-10">
          <Image
            src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="bg-white p-32">Blog</div>
    </section>
  );
}
