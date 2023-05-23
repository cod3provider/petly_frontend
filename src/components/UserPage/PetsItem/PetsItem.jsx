import React, { useState } from 'react';

import {
  Item,
  DeleteBtn,
  Span,
  BtnWrap,
  Icon,
  Image,
  TextWrap,
  Text,
} from './PetsItem.styled';

import { TbTrash } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { deletePetsData } from '../../../redux/petsData/petsDataOperations';

const PetsItem = ({ pet }) => {
  const [setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onDeleteBtn = () => {
    dispatch(deletePetsData(pet._id));
  };

  const date = new Date(pet.birthday).toLocaleDateString();

  return (
    <>
      <Item>
        <Image
          src={pet.petsImage}
          alt="pet's avatar"
          width="240"
          height="240"
        />
        <div>
          <BtnWrap>
            <TextWrap>
              <Text>
                Name: <Span>{pet.name}</Span>
              </Text>
            </TextWrap>
            <DeleteBtn type="button" onClick={onDeleteBtn}>
              <TbTrash size={24} />
            </DeleteBtn>
            {/* {isModalOpen && <ModalDelete onClick={onDeleteBtn}/> } */}
          </BtnWrap>
          <TextWrap>
            <Text>
              Date of birth: <Span>{date}</Span>
            </Text>
          </TextWrap>
          <TextWrap>
            <Text>
              Breed: <Span>{pet.breed}</Span>
            </Text>
          </TextWrap>
          <TextWrap>
            <Text>
              Comments: <Span>{pet.comments}</Span>
            </Text>
          </TextWrap>
        </div>
      </Item>
    </>
  );
};

export default PetsItem;
