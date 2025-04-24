import { Offer } from '../../types/offer';
import { useState, ChangeEvent } from 'react';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: Offer[];
  listClassPrefix?: string;
}

export default function PlacesList({offers, listClassPrefix}: PlacesListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState(''); // позже будет меняться отображение маркеров на карте

  return (
    <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard offer={offer} activeCardId={activeCard} listClassPrefix={listClassPrefix} />
        ))}
    </div>
  );
}
