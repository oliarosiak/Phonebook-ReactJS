import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';

import { RxPaperPlane } from 'react-icons/rx';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => dispatch(filterValue(event.target.value));
  return (
    <FilterContainer>
      <FilterLabel>
        <RxPaperPlane /> Find contacts by name
        <FilterInput
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Use only letters, apostrophe, dash and spaces."
          onChange={handleFilterChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
