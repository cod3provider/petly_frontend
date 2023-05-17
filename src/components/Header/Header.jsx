import { useState, useEffect } from 'react';
import { HeaderStyled } from './Header.styled.js';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import AuthNav from '../Navigations/AuthNav/AuthNav.jsx';
import Navigation from '../Navigations/Navigation/Navigation.jsx';
import { useMedia } from 'react-use';
import { theme } from '../../utils/theme.jsx';
import { ModalStyled } from './Header.styled.js';
import { TfiClose } from 'react-icons/tfi';
import UserPageLogo from '../UserPageLogo/UserPageLogo.jsx';

import { getIsLoggedIn } from '../../redux/auth/authSelectors.js';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  // const userName = useSelector(getName);
  // userName={userName?.name}

  useEffect(() => {
    const handleResize = () => {
      setShowModal(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setShowModal(!showModal);
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <HeaderStyled>
      <nav>
        <Logo onClick={handleClick} />
        {showModal && <TfiClose color="#FFC107" onClick={handleCloseModal} />}
        {isLoggedIn && (
          <>
            {isMobile && <UserPageLogo iconSize="40" />}
            {isTablet && <UserPageLogo iconSize="20" />}
            {isDesktop && <UserPageLogo iconSize="20" />}
          </>
        )}
        {isTablet && !showModal && !isLoggedIn && (
          <AuthNav onClick={handleCloseModal} />
        )}
        {!isDesktop && !showModal && <BurgerMenu onClick={handleClick} />}
        {isLoggedIn && isMobile && showModal && (
          <ModalStyled>
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {!isLoggedIn && isMobile && showModal && (
          <ModalStyled>
            <AuthNav onClick={handleCloseModal} />
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {isLoggedIn && isTablet && showModal && (
          <ModalStyled>
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {!isLoggedIn && isTablet && showModal && (
          <ModalStyled>
            <AuthNav onClick={handleCloseModal} />
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {isLoggedIn && isDesktop && <Navigation onClick={handleCloseModal} />}
        {!isLoggedIn && isDesktop && (
          <>
            <Navigation onClick={handleCloseModal} />
            <AuthNav onClick={handleCloseModal} />
          </>
        )}
      </nav>
    </HeaderStyled>
  );
}
