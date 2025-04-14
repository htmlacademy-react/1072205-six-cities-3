import Main from '../pages/main';

type MainPageProps = {
  placesCount: number;
}

function App({placesCount}: MainPageProps): JSX.Element {
  return (
    <Main placesCount={placesCount} />
  );
}

export default App;
