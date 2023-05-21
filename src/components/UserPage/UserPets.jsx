// import React, { useState } from 'react';
import { theme } from '../../utils/theme';

import {
  UserTitle,
  PetsWrapper,
  AddMyPetBtn,
  PetImg,
  UserPetWrap,
  PetCardText,
  PetText,
  DeletePet,
} from './UserProfile.styled';
// import AddPetButton from '../NoticesPageComponents/AddPetButton/AddPetButton';

import { AiOutlinePlus, RiDeleteBin6Line } from 'react-icons/all';

const UserPets = () => {
  return (
    <div>
      <PetsWrapper>
        <UserTitle>My Pets:</UserTitle>
        <AddMyPetBtn type="button">
          Add Pet{' '}
          <AiOutlinePlus
            style={{
              marginLeft: '8px',
            }}
            size="15px"
            color={theme.baseColors.buttonTextColor}
          />
        </AddMyPetBtn>
      </PetsWrapper>

      <UserPetWrap>
        <PetImg></PetImg>
        <PetText>
          <PetCardText>Name: </PetCardText>
          Jack
          <DeletePet>
            <RiDeleteBin6Line
              style={{ outline: 'none' }}
              size="20px"
              color={theme.baseColors.accentButtonColor}
            />
          </DeletePet>
        </PetText>
        <PetText>
          <PetCardText>Date of birth: </PetCardText>22.04.2018
        </PetText>
        <PetText>
          <PetCardText>Breed: </PetCardText>Persian cat
        </PetText>
        <PetText>
          <PetCardText>Comments: </PetCardText>
          Jack is a gray Persian cat with green eyes. He loves to be pampered
          and groomed, and enjoys playing with toys. Although a bitshy, his a
          loyal and affectionate lap cat.
        </PetText>
        <button></button>
      </UserPetWrap>
      <UserPetWrap>
        <PetImg></PetImg>
        <PetText>
          <PetCardText>Name: </PetCardText>Jack
        </PetText>
        <PetText>
          <PetCardText>Date of birth: </PetCardText>22.04.2018
        </PetText>
        <PetText>
          <PetCardText>Breed: </PetCardText>Persian cat
        </PetText>
        <PetText>
          <PetCardText>Comments: </PetCardText>
          Jack is a gray Persian cat with green eyes. He loves to be pampered
          and groomed, and enjoys playing with toys. Although a bitshy, his a
          loyal and affectionate lap cat.
        </PetText>
        <button></button>
      </UserPetWrap>
    </div>
  );
};

export default UserPets;
