// import React, { useState } from 'react';
import {
  UserTitle,
  PetsWrapper,
  AddMyPetBtn,
  PetImg,
  UserPetWrap,
  PetCardText,
  PetText,
} from './UserProfile.styled';

const UserPets = () => {
  return (
    <div>
      <PetsWrapper>
        <UserTitle>My Pets:</UserTitle>
        <AddMyPetBtn>Add Pet +</AddMyPetBtn>
      </PetsWrapper>

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
