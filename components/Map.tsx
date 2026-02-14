'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Location {
  lat: number;
  lng: number;
  name: string;
  type: string;
  description?: string;
}

interface MapProps {
  locations: Location[];
}

export default function Map({ locations }: MapProps) {
  const center: [number, number] = [64.5, -19.0]; // Center of Iceland
  
  // Create route polyline from locations
  const routeCoordinates: [number, number][] = locations
    .filter(loc => loc.type.startsWith('day-'))
    .map(loc => [loc.lat, loc.lng]);

  return (
    <MapContainer
      center={center}
      zoom={7}
      className="w-full h-full"
      style={{ background: '#000' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {routeCoordinates.length > 0 && (
        <Polyline 
          positions={routeCoordinates} 
          color="#00D9FF" 
          weight={3}
          opacity={0.7}
        />
      )}
      
      {locations.map((location, index) => (
        <Marker 
          key={index} 
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-ice-blue bg-black p-2">
              <h3 className="font-bold text-lg">{location.name}</h3>
              {location.description && (
                <p className="text-sm mt-1">{location.description}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
