import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { theme } from '../../utils/theme.jsx';

import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import FriendList from '../../components/OurFriends/FriendList/FriendList.jsx';

import getFriends from '../../utils/getFriends.js';
import { SectionStyled } from '../../components/common/Section/Section.styled.jsx';
import Loader from '../../components/Loader/Loader';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled';

const Friends = () => {
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

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
      {isLoading && <Loader />}
      <BackgroundImageDiv />
    </SectionStyled>
  );
};

export default Friends;
