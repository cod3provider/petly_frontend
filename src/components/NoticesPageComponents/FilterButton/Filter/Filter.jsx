import { useEffect, useState } from 'react';

import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import {
  FilterBox,
  FilterTitle,
  FilterItem,
  FilterItemTitle,
  CheckBox,
} from './Filter.styled';

const Checkbox = ({ label, checked, onChange: change }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ appearance: 'none', display: 'flex', alignItems: 'center' }}>
      <label
        style={{
          cursor: 'pointer',
        }}
      >
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(prev => !prev);
            change();
          }}
          style={{
            // appearance: 'none',
            width: '16px',
            height: '16px',
            border: '2px solid #54ADFF',
            borderRadius: '4px',
            marginRight: '10px',
            marginLeft: '40px',
            cursor: 'pointer',
          }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

const Filter = ({ setFilterParams }) => {
  const [GenderOpen, setGenderOpen] = useState(false);
  const [AgeOpen, setAgeOpen] = useState(false);

  const [SexFilter, setSexFilter] = useState([
    { filter: 'male', checked: false },
    { filter: 'female', checked: false },
  ]);

  const [AgeFilter, setAgeFilter] = useState([
    { filter: '< 1', checked: false },
    { filter: '1', checked: false },
    { filter: '2', checked: false },
  ]);

  useEffect(() => {
    let filter = '';

    SexFilter.forEach(item => {
      if (!item.checked) {
        return;
      }

      if (item.checked) {
        filter = filter + `${item.filter}=${item.filter}&`;
      }
    });

    AgeFilter.forEach(item => {
      if (!item.checked) {
        return;
      }

      if (item.checked && item.filter === '<1') {
        filter = filter + `min=0`;
      }

      if (item.checked && item.filter === '1') {
        filter = filter + `min=1`;
      }
    });

    console.log(filter);

    if (filter === '') {
      return;
    }

    setFilterParams(filter);
  }, [AgeFilter, SexFilter, setFilterParams]);

  const handleChange = (filter, setFilter, checked, i) => {
    let tmp = filter[i];
    tmp.checked = !checked;
    let filterClone = [...filter];
    filterClone[i] = tmp;
    setFilter([...filterClone]);
  };

  const toggleGenderOpen = () => {
    setGenderOpen(prev => !prev);
  };

  const toggleAgeOpen = () => {
    setAgeOpen(prev => !prev);
  };

  return (
    <FilterBox>
      <FilterTitle />
      <FilterItem>
        <div
          onClick={() => {
            toggleGenderOpen(true);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            cursor: 'pointer',
          }}
        >
          {GenderOpen ? (
            <HiOutlineChevronUp size={24} color="#54adff" />
          ) : (
            <HiOutlineChevronDown size={24} color="#54adff" />
          )}
          <FilterItemTitle>By gender</FilterItemTitle>
        </div>

        {GenderOpen && (
          <div>
            {SexFilter.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.filter}
                  onChange={() =>
                    handleChange(SexFilter, setSexFilter, item.checked, i)
                  }
                  checked={item.checked}
                />
              );
            })}
          </div>
        )}
      </FilterItem>
      <FilterItem>
        <div
          onClick={() => {
            toggleAgeOpen(true);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            cursor: 'pointer',
          }}
        >
          {AgeOpen ? (
            <HiOutlineChevronUp size={24} color="#54adff" />
          ) : (
            <HiOutlineChevronDown size={24} color="#54adff" />
          )}
          <FilterItemTitle>By gender</FilterItemTitle>
        </div>

        {AgeOpen && (
          <div>
            {AgeFilter.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.filter}
                  onChange={() =>
                    handleChange(AgeFilter, setAgeFilter, item.checked, i)
                  }
                  checked={item.checked}
                />
              );
            })}
          </div>
        )}
      </FilterItem>
    </FilterBox>
  );
};

export default Filter;
