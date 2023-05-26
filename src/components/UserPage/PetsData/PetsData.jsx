import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { getPetsData } from '../../../redux/petsData/petsDataOperations';
import { getPets } from '../../../redux/petsData/petsDataSelectors';

import PetsList from '../PetsList/PetsList';
import { PetsWrap, BtnWrap, Button } from './PetsData.styled';
import { Title } from '../../../pages/UserPage/UserPage.styled';


const PetsData = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const pets = useSelector(getPets);

  useEffect(() => {
    if (!pets) {
      dispatch(getPetsData());
    }
  }, [dispatch, pets]);

  return (
    <PetsWrap>
      <BtnWrap>
        <Title>My pets:</Title>
        <Link to="/AddPet" state={{ from: location }}>
          <Button type="button">
            Add Pet
            <AiOutlinePlusCircle size={24} />
          </Button>
        </Link>
      </BtnWrap>
      <PetsList pets={pets} />
    </PetsWrap>
  );
};

export default PetsData;
