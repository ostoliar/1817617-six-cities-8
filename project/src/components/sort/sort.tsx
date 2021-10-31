import { useState } from 'react';
import cn from 'classnames';

type AppScreenProps = {
  offerSortTypes: {[key: string]: string,};
  handleChangeSortType: (sortType: string) => void;
  selectSortType: string;
}

function Sort({offerSortTypes, handleChangeSortType, selectSortType}: AppScreenProps): JSX.Element {
  const [isOpenSortList, setOpenSortList] = useState(false);


  const ulClass = cn(
    'places__options places__options--custom',
    {
      'places__options--opened': isOpenSortList,
    },
  );

  const handleClickIconArrow = () => {
    setOpenSortList(!isOpenSortList);
  };

  const handleSortType = (sortType: string) => {
    setOpenSortList(!isOpenSortList);
    handleChangeSortType(sortType);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleClickIconArrow}
      >
      &nbsp;{selectSortType}&nbsp;
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ulClass}>
        {Object.keys(offerSortTypes).map((key) => {
          const liActive = cn(
            'places__option',
            {
              'places__option--active': offerSortTypes[key] === selectSortType,
            });

          return (
            <li
              className={liActive}
              tabIndex={0}
              key={offerSortTypes[key]}
              onClick={() => handleSortType(offerSortTypes[key])}
            >
              {offerSortTypes[key]}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default Sort;
