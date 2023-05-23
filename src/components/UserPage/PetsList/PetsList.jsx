import { List } from './PetsList.styled';

import PetsItem from '../PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <>
      {pets && pets.length !== 0 ? (
        <List>
          {pets.map(pet => (
            <PetsItem key={pet._id} pet={pet} />
          ))}
        </List>
      ) : (
        <p>No pets yet 😔</p>
      )}
    </>
  );
};

export default PetsList;
