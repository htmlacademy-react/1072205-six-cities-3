import { useState } from 'react';
import { Offers } from '../../types/offer';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places/places-list';
import Map from '../../components/map/map';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
}

export default function MainPage({ placesCount, offers }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

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
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <Sort />
              <PlacesList offers={offers} classPrefix="cities" setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <Map city={'Amsterdam'} classPrefix="cities" places={offers} activeCard={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
