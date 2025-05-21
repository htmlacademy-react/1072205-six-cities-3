import { useState } from 'react';
import { SORT_TYPES } from '../../const';
import SortOption from './sort-option';

type SortProps = {
  activeSort: string;
  onChangeSort: (type: string) => void;
};

export default function Sort({activeSort, onChangeSort}: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (type: string) => {
    onChangeSort(type);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SORT_TYPES.map((sortType) => (
          <SortOption
            key={sortType}
            sortType={sortType}
            isActive={sortType === activeSort}
            onClick={handleOptionClick}
          />
        ))}
      </ul>
    </form>
  );
}
