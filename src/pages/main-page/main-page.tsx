import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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

export default function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [filteredOffers, setFilteredOffers] = useState(offers);

  const activeCity = useSelector((state: RootState) => state.activeCity);

  useEffect(() => {
    const cityOffers = offers.filter((offer) => offer.city.name === activeCity);
    setFilteredOffers(cityOffers);
  }, [activeCity]);

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
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
              <Sort />
              <PlacesList offers={filteredOffers} classPrefix="cities" setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} classPrefix="cities" places={filteredOffers} activeCard={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
