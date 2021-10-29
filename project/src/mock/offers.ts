import { OfferType } from '../types/offer';

export const offers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Amsterdam-1: A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 1,
    title: 'Amsterdam-1: Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Amsterdam-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 5,
      isPro: false,
      name: 'Anna',
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 140,
    rating: 2,
    title: 'Amsterdam-2: Beautiful & luxurious studio at great location',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Amsterdam-3: A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 3,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Amsterdam-3: Beautiful & luxurious studio at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Amsterdam-4: A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 4,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 100,
    rating: 4.8,
    title: 'Amsterdam-4: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Paris-1: A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris.',
    goods: ['Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 5,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 150,
    rating: 4.8,
    title: 'Paris-1: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Paris-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 6,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.8606111,
      longitude: 2.337644,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Paris-2: Beautiful & luxurious studio at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.9422,
        longitude: 6.9577,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: 'Cologne-1: A quiet cozy and picturesque that hides behind a river by the unique lightness of Cologne.',
    goods: ['Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 7,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.9422,
      longitude: 6.9577,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 150,
    rating: 4.8,
    title: 'Cologne-1: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.9422,
        longitude: 6.9577,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: 'Cologne-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Cologne.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 8,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.9412784,
      longitude: 6.9582814,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Cologne-2: Beautiful & luxurious studio at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.84667,
        longitude: 4.3525,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'Brussels-1: A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 9,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.84667,
      longitude: 4.3525,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 150,
    rating: 4.8,
    title: 'Brussels-1: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.84667,
        longitude: 4.3525,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'Brussels-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 10,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.84,
      longitude: 4.3525,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Brussels-2: Beautiful & luxurious studio at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'Hamburg-1: A quiet cozy and picturesque that hides behind a river by the unique lightness of Hamburg.',
    goods: ['Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 11,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 150,
    rating: 4.8,
    title: 'Hamburg-1: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 53.5753200,
        longitude: 10.0153400,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'Hamburg-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 12,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 53.57,
      longitude: 10.0153400,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Hamburg-2: Beautiful & luxurious studio at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 51.2166,
        longitude: 6.8166,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'Dusseldorf-1: A quiet cozy and picturesque that hides behind a river by the unique lightness of Dusseldorf.',
    goods: ['Dishwasher'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: false,
      name: 'Sveta',
    },
    id: 13,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 51.2166,
      longitude: 6.8166,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 150,
    rating: 4.8,
    title: 'Dusseldorf-1: Beautiful & luxurious studio at great location',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 51.2166,
        longitude: 6.8166,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'Dusseldorf-2: A quiet cozy and picturesque that hides behind a river by the unique lightness of Dusseldorf.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max',
    },
    id: 14,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 51.227,
      longitude: 6.8166,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Dusseldorf-2: Beautiful & luxurious studio at great location',
    type: 'room',
  },
];
