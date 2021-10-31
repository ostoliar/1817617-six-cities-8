import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import useMap from '../../hooks/use-map';
import { OfferType } from '../../types/offer';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { State } from '../../types/state';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_SELECT = 'img/pin-active.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

const selectCustomIcon = new Icon({
  iconUrl: URL_MARKER_SELECT,
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

type MapProps = {
  offersList: OfferType[];
}

const mapStateToProps = ({currentCity, offers, currentOffer}: State) => ({
  currentCity,
  offers,
  currentOffer,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MapProps;

function Map({offersList, currentOffer}: ConnectedComponentProps): JSX.Element {
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
            .setIcon(
              offer.id === currentOffer?.id
                ? selectCustomIcon
                : defaultCustomIcon,
            )
            .addTo(markerLayerRef.current as LayerGroup);
        });
      }

    }
  }, [currentOffer?.id, map, offersList]);

  return (
    <div
      style={{minHeight: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export { Map };
export default connector(Map);
