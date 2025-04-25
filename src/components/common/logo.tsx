import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  listClassPrefix: string;
}

export default function Logo({listClassPrefix}: LogoProps): JSX.Element {
  return (
    <Link className={`${listClassPrefix}__logo-link`} to={AppRoute.Root}>
      <img className={`${listClassPrefix}__logo`} src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}
