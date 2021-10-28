import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { OfferType } from '../../types/offer';
import { DEFAULT_MARKER_URL } from '../../const';
import { Icon, Marker, LayerGroup } from 'leaflet';

type MapProps = {
  offersList: OfferType[];
}

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER_URL,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

function Map({offersList}: MapProps): JSX.Element {
  const [{ city }] = offersList;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayerRef = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      if (markerLayerRef.current) {
        markerLayerRef.current.clearLayers();
      }

      markerLayerRef.current = new LayerGroup().addTo(map);

      if (markerLayerRef.current) {
        offersList.forEach((offer) => {
          const {location} = offer;
          const marker = new Marker({
            lat: location.latitude,
            lng: location.longitude,
          });

          marker
            .setIcon(defaultCustomIcon)
            .addTo(markerLayerRef.current as LayerGroup);
        });
      }

    }
  }, [map, offersList]);

  return (
    <div
      style={{minHeight: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
