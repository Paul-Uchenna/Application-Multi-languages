import React from "react";
import CardItem from "./CardItem";

export default function Galleries() {
  const galleries: string[] = [
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleries.map((imgUrl, index) => (
            <CardItem key={index} imgUrl={imgUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
