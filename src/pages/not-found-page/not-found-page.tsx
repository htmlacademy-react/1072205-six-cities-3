import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function NotFoundPage(): JSX.Element {
  return (
    <section style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0 0 20px' }}>404</h1>
      <p style={{ fontSize: '24px', margin: '0 0 30px' }}>Oops! Page not found.</p>
      <Link to={AppRoute.Root} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Go back to home
      </Link>
    </section>
  );
}
