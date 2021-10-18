type City = {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  }

export type User = {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }

  type Location = {
    latitude: number,
    longitude: number,
    zoom: number,
  }

export type OfferType = {
    bedrooms: number,
    city: City,
    description: string,
    goods: string[],
    host: User,
    id: number,
    images: string[],
    isFavorite: boolean,
    isPremium: boolean,
    location: Location,
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string,
  }

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
      latitude: 52.39095539435088,
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
      longitude: 4.8530966640619,
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
];
