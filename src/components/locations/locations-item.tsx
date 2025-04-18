import { Link } from "react-router-dom";

type LocationsItemProps = {
  cityName: String;
}

export default function LocationsItem({cityName}: LocationsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

// добавлять класс tabs__item--active для активного пункта
