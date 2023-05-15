import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionStyled } from '../common/Section/Section.styled';
import {
  WrapperPet,
  TitlePet,
  WrapperStep,
  Textstep,
  StyledLink,
} from './AddPet.styled';
//Треба глянути тут ще як і що додати краще
const AddPet = () => {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const fromRef = useRef(location?.state?.from);

  const isActive = () => active.target;
  const toggle = () => {
    if (!isActive) {
      setActive(false);
    }
  };

  const handleClickNext = e => {
    if (isActive) {
      e.preventDefault();
      //Дописати функцію
    }
  };

  return (
    <SectionStyled>
      <WrapperPet>
        <TitlePet>Add pet</TitlePet>
        <WrapperStep>
          <ul>
            <li>
              <Textstep>Choose option</Textstep>
            </li>
            <li>
              <Textstep>Personal details</Textstep>
            </li>

            <li>
              <Textstep>More info</Textstep>
            </li>
          </ul>
        </WrapperStep>
        <div>
          <ul>
            <li>
              <button onClick={toggle} type="button">
                your pet
              </button>
            </li>
            <li>
              <button onClick={toggle} type="button">
                sell
              </button>
            </li>
            <li>
              <button onClick={toggle} type="button">
                lost/found
              </button>
            </li>
            <li>
              <button onClick={toggle} type="button">
                in good hands
              </button>
            </li>
          </ul>
        </div>
        <div>
          <StyledLink to={fromRef?.current} state={{ from: location }}>
            Сancel
            {/* {isLoading && <Loader />} */}
          </StyledLink>
          <button onClick={handleClickNext} type="button">
            Next
          </button>
        </div>
      </WrapperPet>
    </SectionStyled>
  );
};

export default AddPet;
