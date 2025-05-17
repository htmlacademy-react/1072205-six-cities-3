import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { RootState } from '../../store/store';
import { setOffers } from '../../store/action';
import { offers as allOffers } from '../../mocks/offers';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places/places-list';
import Map from '../../components/map/map';

export default function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const dispatch = useDispatch();

  const city = useSelector((state: RootState) => state.city);
  const offers = useSelector((state: RootState) => state.offers);

  useEffect(() => {
    const filteredOffers = allOffers.filter((offer) => offer.city.name === city);
    dispatch(setOffers(filteredOffers));
  }, [city, dispatch]);

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
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <Sort />
              <PlacesList offers={offers} classPrefix="cities" setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <Map city={city} classPrefix="cities" places={offers} activeCard={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
