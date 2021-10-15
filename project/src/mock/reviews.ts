type User = {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }

type CommentType = {
    comment: string,
    date: string,
    id: number,
    rating: number,
    user: User,
  }

export const comments: CommentType[] = [
  {
    comment: 'id-1-1. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-07T14:13:56.569Z',
    id: 1,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'id-1-2. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-06T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar.svg',
      id: 6,
      isPro: true,
      name: 'Sveta',
    },
  },
  {
    comment: 'id-2. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-05T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'id-3. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-04T14:13:56.569Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
];
