import { useState, useEffect } from 'react';


import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import FriendList from '../../components/OurFriends/FriendList/FriendList.jsx';

import getFriends from '../../utils/getFriends.js';

const Friends = () => {
  // const [friends, setFriends] = useState([]);
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFriends()
      .then(response => {
        setPartners(response);
      })
      .catch(error => setError(error.message));
  }, []);


  return (
    <ContainerStyled>
      <FriendList partners={partners} />
    </ContainerStyled>
  );
};

export default Friends;
