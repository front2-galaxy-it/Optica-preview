"use client"

import React, { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import { useMap, useMapEvent } from "react-leaflet"

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), {
  ssr: false,
})
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false })

interface MapBlockProps {
  coords: [number, number]
}

const ChangeMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(coords, 14)
  }, [coords, map])
  return null
}

const SetViewOnClick = ({ animateRef }: { animateRef: React.MutableRefObject<boolean> }) => {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    })
  })
  return null
}

export const MapBlock: React.FC<MapBlockProps> = ({ coords }) => {
  const animateRef = useRef(false)
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        const icon = L.icon({
          iconUrl: "/images/svg/map-pin.svg",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        })
        setCustomIcon(icon)
      })
    }
  }, [])

  return (
    <MapContainer
      center={coords}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView coords={coords} />
      {customIcon && (
        <Marker
          position={coords}
          icon={customIcon}
        />
      )}
      <SetViewOnClick animateRef={animateRef} />
    </MapContainer>
  )
}
