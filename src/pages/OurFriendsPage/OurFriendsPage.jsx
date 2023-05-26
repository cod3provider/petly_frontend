import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { theme } from '../../utils/theme.jsx';

import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import FriendList from '../../components/OurFriends/FriendList/FriendList.jsx';

import getFriends from '../../utils/getFriends.js';
import { SectionStyled } from '../../components/common/Section/Section.styled.jsx';


const Friends = () => {
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
    <SectionStyled>
      <ContainerStyled>
        <FriendList partners={partners} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Friends;
