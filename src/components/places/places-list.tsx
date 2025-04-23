import { Offer } from '../../types/offer';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: Offer[];
}

export default function PlacesList({offers}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard offer={offer} />
        ))}
    </div>
  );
}
