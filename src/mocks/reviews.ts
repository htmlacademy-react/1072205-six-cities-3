import { Reviews } from '../types/review';

export const reviews: Reviews = [
  {
    id: 'a12ec83b-0d45-40b2-a74b-1234567890ab',
    date: '2020-07-21T10:45:30.123Z',
    user: {
      name: 'Emily Doe',
      avatarUrl: 'img/avatar.svg',
      isPro: true
    },
    comment: 'An amazing place with great atmosphere and friendly host. Definitely worth a visit!',
    rating: 5
  },
  {
    id: 'f9e7b8c1-29e3-4dcb-a8a7-abcdef123456',
    date: '2021-01-15T18:20:00.000Z',
    user: {
      name: 'John Smith',
      avatarUrl: 'img/avatar.svg',
      isPro: false
    },
    comment: 'Cozy and well-located, but a bit noisy at night due to nearby bars.',
    rating: 3
  },
  {
    id: '3b7f9a61-f1a4-4fd0-8425-deadbeefcaf0',
    date: '2022-11-02T09:00:00.456Z',
    user: {
      name: 'Alice Johnson',
      avatarUrl: 'img/avatar.svg',
      isPro: true
    },
    comment: 'The apartment was clean and matched the photos. Would book again!',
    rating: 4
  }
];
