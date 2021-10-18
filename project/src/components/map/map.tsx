import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { OfferType } from '../../types/offer';
import { DEFAULT_MARKER_URL } from '../../const';
import { Icon, Marker } from 'leaflet';

type AppScreenProps = {
  offersList: OfferType[];
}

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER_URL,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

function Map({offersList}: AppScreenProps): JSX.Element {
  const {city} = offersList[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      offersList.forEach((offer) => {
        const {location} = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offersList]);


  return (
    <div
      style={{minHeight: '100%', minWidth: '100%'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
