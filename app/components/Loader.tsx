"use client";

import React from "react";
import { waveform } from "ldrs";

waveform.register();
export default function Loader() {
  return (
    <div>
      <l-waveform
        size="64"
        stroke="4"
        speed="1"
        color="yellow"
        aria-label="Loading"
      ></l-waveform>
    </div>
  );
}
