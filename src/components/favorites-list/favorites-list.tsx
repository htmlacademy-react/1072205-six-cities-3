import { FavoriteOffers } from '../../types/offer';
import { CITIES } from '../../const';
import FavoritesListItem from './favorites-list-item'

type FavoritesListProps = {
  favoriteOffers: FavoriteOffers;
}

export default function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {
  const offersByCity = CITIES.reduce<Record<string, FavoriteOffers>>((acc, city) => {
    const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);
    if (cityOffers.length > 0) {
      acc[city] = cityOffers;
    }
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, offers]) => (
        <FavoritesListItem key={city} city={city} favoriteCityOffers={offers} />
      ))}
    </ul>
  )
}
