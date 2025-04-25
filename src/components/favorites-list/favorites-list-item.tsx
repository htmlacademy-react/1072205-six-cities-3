import { Link } from 'react-router-dom';
import { FavoriteOffers } from '../../types/offer';
import { CITIES } from '../../const';
import PlaceCard from '../places/place-card';

type FavoritesListItemProps = {
  city: typeof CITIES[number];
  favoriteCityOffers: FavoriteOffers;
}

export default function FavoritesListItemProps({city, favoriteCityOffers}: FavoritesListItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteCityOffers.map((offer) => (
          <PlaceCard offer={offer} listClassPrefix="favorites" />
        ))}
      </div>
    </li>
  )
}
