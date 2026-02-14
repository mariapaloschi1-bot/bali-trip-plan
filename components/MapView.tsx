'use client';

import dynamic from 'next/dynamic';
import { MapPin, DollarSign, AlertTriangle } from 'lucide-react';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface Location {
  lat: number;
  lng: number;
  name: string;
  type: string;
  description?: string;
}

interface MapViewProps {
  locations: Location[];
  selectedDay?: number | null;
}

export default function MapView({ locations, selectedDay }: MapViewProps) {
  const filteredLocations = selectedDay 
    ? locations.filter(loc => loc.type === `day-${selectedDay}`)
    : locations;

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border-2 border-ice-blue/30">
      <Map locations={filteredLocations} />
    </div>
  );
}
