import PlaceCard from "./place-card";

export default function PlacesList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </div>
  );
}
