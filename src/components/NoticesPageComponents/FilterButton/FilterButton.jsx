import PropTypes from 'prop-types';

import { FilterButtonIcon, FilterBtn } from './FilterButton.styled';

const FilterButton = ({ onClick }) => {
  return (
    <FilterBtn onClick={onClick}>
      <FilterButtonIcon />
      Filter
    </FilterBtn>
  );
};

export default FilterButton;
