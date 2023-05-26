import React, { useState } from 'react';

import {
  Item,
  DeleteBtn,
  Span,
  BtnWrap,
  Image,
  TextWrap,
  Text, Wrapper,
} from './PetsItem.styled';

import { TbTrash } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { deletePetsData } from '../../../redux/petsData/petsDataOperations';
import ModalDeletePets from '../../Modals/ModalDeletePets/ModalDeletePets';
import ModalBack from '../../Modals/ModalBack';
import { useToggle } from '../../../hooks/useToggle';

const PetsItem = ({ pet }) => {
  const [setIsModalOpen] = useState(false);
  const { isOpen, open, close } = useToggle();

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
        <Wrapper>
          <BtnWrap>
            <TextWrap>
              <Text>
                Name: <Span>{pet.name}</Span>
              </Text>
            </TextWrap>
            <DeleteBtn type="button" onClick={open}>
              <TbTrash size={24} />
            </DeleteBtn>
            {isOpen && (
              <ModalBack onClose={close}>
                <ModalDeletePets
                  onClick={onDeleteBtn}
                  onClose={close}
                ></ModalDeletePets>
              </ModalBack>
            )}
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
        </Wrapper>
      </Item>
    </>
  );
};

export default PetsItem;
