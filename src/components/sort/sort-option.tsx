type SortOptionProps = {
  sortType: string;
}

export default function SortOption({sortType}: SortOptionProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>{sortType}</li>
  );
}

// класс для выбранного типа сортировки places__option--active
