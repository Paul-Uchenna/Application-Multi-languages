"use client";

import React from "react";
import { Loader2, LoaderPinwheel } from "lucide-react";

export default function Loader() {
  return (
    <div className="animate-spin">
      <LoaderPinwheel size={56} />
    </div>
  );
}
