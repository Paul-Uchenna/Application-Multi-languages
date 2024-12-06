"use client";

import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map({
  coordinates,
}: {
  coordinates: [number, number];
}) {
  useEffect(() => {
    //! Resetting the Leaflet container if necessary
    return () => {
      const mapContainer = document.querySelector(".leaflet-container") as any;
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div id="map-container" className="w-full h-[400px]">
      <MapContainer
        center={coordinates}
        zoom={4}
        style={{ height: "400px", width: "100%", borderRadius: "0.375rem" }}
        className="z-0"
        worldCopyJump={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} icon={icon} />
      </MapContainer>
    </div>
  );
}
