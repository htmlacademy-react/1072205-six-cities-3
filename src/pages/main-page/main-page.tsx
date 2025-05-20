import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import { RootState } from '../../store/store';
import { Offers } from '../../types/offer';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places/places-list';
import Map from '../../components/map/map';

type MainPageProps = {
  offers: Offers;
}

const sortOffers = (offers: Offers, sortType: string): Offers => {
  switch (sortType) {
    case 'Price: low to high':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export default function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState('Popular');

  const activeCity = useSelector((state: RootState) => state.activeCity);

  const cityOffers = useMemo(() =>
    offers.filter((offer) => offer.city.name === activeCity),
  [offers, activeCity]);

  const sortedOffers = useMemo(() =>
    sortOffers(cityOffers, activeSort),
  [cityOffers, activeSort]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
              <Sort activeSort={activeSort} onChangeSort={setActiveSort} />
              <PlacesList offers={sortedOffers} classPrefix="cities" setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} classPrefix="cities" places={sortedOffers} activeCard={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
