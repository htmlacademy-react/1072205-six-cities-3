import { Offer, Offers, FavoriteOffer, FavoriteOffers } from '../types/offer';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    "images": [
    "https://url-to-image/image.png"
    ],
    "maxAdults": 4
  },
  {
    id: 'b3f8d5a2-e19c-4789-9a4b-2c7e89f6a3d1',
    title: 'Modern 2-bedroom apartment near Central Park',
    type: 'room',
    price: 185,
    city: {
      name: 'Cologne',
      location: {
        latitude: 40.758016,
        longitude: -73.985460,
        zoom: 8
      }
    },
    location: {
      latitude: 40.758016,
      longitude: -73.985460,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: 'img/apartment-02.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    "images": [
    "https://url-to-image/image.png"
    ],
    "maxAdults": 4
  },
  {
    id: '7c9e4a2f-3b1d-4f56-b82a-9e6f3c45d789',
    title: 'Charming Parisian flat in Montmartre',
    type: 'house',
    price: 145,
    city: {
      name: 'Brussels',
      location: {
        latitude: 48.889738,
        longitude: 2.338594,
        zoom: 8
      }
    },
    location: {
      latitude: 48.889738,
      longitude: 2.338594,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    "images": [
    "https://url-to-image/image.png"
    ],
    "maxAdults": 4
  },
  {
    id: '9e2a7c6f-5d3b-4879-a12c-f78e4b56c9a4',
    title: 'Spacious penthouse with city views',
    type: 'hotel',
    price: 250,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 35.682839,
        longitude: 139.759455,
        zoom: 8
      }
    },
    location: {
      latitude: 35.682839,
      longitude: 139.759455,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 1,
    previewImage: 'img/apartment-01.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    "images": [
    "https://url-to-image/image.png"
    ],
    "maxAdults": 4
  }
]

function isFavoriteOffer(offer: Offer): offer is FavoriteOffer {
  return offer.isFavorite === true;
}

export const favoriteOffers: FavoriteOffers = offers.filter(isFavoriteOffer);
