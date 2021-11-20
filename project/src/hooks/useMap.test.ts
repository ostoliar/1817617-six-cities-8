import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map';
import {mockOffer} from '../utils/mock';

describe('Hook: useMap', () => {
  it('should return array with 2 elements', () => {
    const mapRef = {current: document.createElement('div')};
    const {city} = mockOffer;
    const {result} = renderHook(() =>
      useMap(mapRef, city),
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Object);
  });
});
