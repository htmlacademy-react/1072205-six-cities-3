import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

type LocationsItemProps = {
  cityName: string;
};

export default function LocationsItem({ cityName }: LocationsItemProps): JSX.Element {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state: RootState) => state.activeCity);

  const handleClick = () => {
    dispatch(changeCity(cityName));
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${
          cityName === selectedCity ? 'tabs__item--active' : ''
        }`}
        to="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
