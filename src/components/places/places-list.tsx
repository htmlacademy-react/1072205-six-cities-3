import { Offer } from '../../types/offer';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: Offer[];
  listClassPrefix?: string;
  setActiveCard: (id: string | null) => void;
}

export default function PlacesList({ offers, listClassPrefix, setActiveCard }: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setActiveCard={setActiveCard}
          listClassPrefix={listClassPrefix}
        />
      ))}
    </div>
  );
}
