import { useState, useEffect } from 'react';
import { HeaderStyled, DivStyled } from './Header.styled.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
// import closeModal from '../../images/cross-small.jpg';
import AuthNav from '../Navigations/AuthNav/AuthNav.jsx';
import Navigation from '../Navigations/Navigation/Navigation.jsx';
import { useMedia } from 'react-use';
import { theme } from '../../utils/theme.jsx';
import { ModalStyled } from './Header.styled.js';
// import { GrClose } from 'react-icons/gr';
import { TfiClose } from 'react-icons/tfi';
import UserPageLogo from '../UserPageLogo/UserPageLogo.jsx';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

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
      <DivStyled>
        <Logo onClick={handleClick} />
        {showModal && <TfiClose color="#FFC107" onClick={handleCloseModal} />}
        {isTablet && !showModal && (
          <>
            <AuthNav onClick={handleCloseModal} />
            <UserPageLogo iconSize="20" />
          </>
        )}
        {!isDesktop && !showModal && <BurgerMenu onClick={handleClick} />}
        {isMobile && showModal && (
          <ModalStyled>
            <UserPageLogo iconSize="40" />
            <AuthNav onClick={handleCloseModal} />
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {isTablet && showModal && (
          <ModalStyled>
            <Navigation onClick={handleCloseModal} />
          </ModalStyled>
        )}
        {isDesktop && (
          <>
            <Navigation onClick={handleCloseModal} />
            <AuthNav onClick={handleCloseModal} />
          </>
        )}
      </DivStyled>
    </HeaderStyled>
  );
}
