import Logo from './logo';
import UserNavigation from './user-navigation';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <UserNavigation />
        </div>
      </div>
    </header>
  );
}
