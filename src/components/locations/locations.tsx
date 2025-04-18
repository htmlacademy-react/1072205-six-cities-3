import { CITIES } from "../../const";
import LocationsItem from "./locations-item";

export default function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <LocationsItem cityName={city} />
        ))}
      </ul>
    </section>
  );
}
