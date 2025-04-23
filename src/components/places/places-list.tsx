import { Offer } from '../../types/offer';
import { useState, ChangeEvent } from 'react';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: Offer[];
}

export default function PlacesList({offers}: PlacesListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard offer={offer} activeCardId={activeCard} />
        ))}
    </div>
  );
}
