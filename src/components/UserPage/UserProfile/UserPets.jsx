// import React, { useState } from 'react';
import {
  UserTitle,
  UserPetsWrap,
  PetsWrapper,
  AddMyPetBtn,
  UserImg,
} from './UserProfile.styled';

const UserPets = () => {
  return (
    <div>
      <PetsWrapper>
        <UserTitle>My Pets:</UserTitle>
        <AddMyPetBtn>Add Pet +</AddMyPetBtn>
      </PetsWrapper>

      <UserPetsWrap>
        <UserImg></UserImg>
        <p>Name: Jack</p>
        <p>Date of birth: 22.04.2018</p>
        <p>Breed: Persian cat</p>
        <p>
          Comments: Jack is a gray Persian cat with green eyes. He loves to be
          pampered and groomed, and enjoys playing with toys. Although a bitshy,
          his a loyal and affectionate lap cat.
        </p>
        <button></button>
      </UserPetsWrap>
    </div>
  );
};

export default UserPets;
