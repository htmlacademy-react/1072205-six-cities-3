import { useRef, useEffect } from 'react';
import { Offers } from '../../types/offer';
import { CITIES } from '../../const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: typeof CITIES[number];
  places: Offers;
  activeCard: string | null;
  classPrefix: string;
}

const defaultIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const activeIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

export default function Map({ city, places, activeCard, classPrefix }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      places.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon: point.id === activeCard ? activeIcon : defaultIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, places, activeCard]);

  return (
    <section
      className={`${classPrefix}__map map`}
      style={{ height: classPrefix === 'offer' ? '579px' : '100%' }}
      ref={mapRef}
    />
  );
}
