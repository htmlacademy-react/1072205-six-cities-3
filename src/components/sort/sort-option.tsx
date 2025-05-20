type SortOptionProps = {
  sortType: string;
  isActive: boolean;
  onClick: (type: string) => void;
};

export default function SortOption({sortType, isActive, onClick}: SortOptionProps): JSX.Element {
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => onClick(sortType)}
    >
      {sortType}
    </li>
  );
}
