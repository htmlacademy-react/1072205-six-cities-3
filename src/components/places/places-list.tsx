import { Offer } from '../../types/offer';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: Offer[];
  classPrefix?: string;
  setActiveCard?: (id: string | null) => void;
}

export default function PlacesList({ offers, classPrefix, setActiveCard }: PlacesListProps): JSX.Element {
  return (
    <div className={`${classPrefix}${classPrefix === 'cities' ? '__places-' : '__'}list places__list ${classPrefix === 'cities' ? 'tabs__content' : ''}`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setActiveCard={setActiveCard}
          classPrefix={classPrefix}
        />
      ))}
    </div>
  );
}
