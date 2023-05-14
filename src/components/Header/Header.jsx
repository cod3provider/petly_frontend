import { useState } from 'react';
import { HeaderStyled, DivStyled } from './Header.styled.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import closeModal from '../../images/cross-small.jpg';
import AuthNav from '../Navigations/AuthNav/AuthNav.jsx';
import Navigation from '../Navigations/Navigation/Navigation.jsx';
import { useMedia } from 'react-use';
import { theme } from '../../utils/theme.jsx';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

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

  const isMobile = useMedia(theme.breakpoints.tablet.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <HeaderStyled>
      <DivStyled>
        <Logo onClick={handleClick} />
        {isTablet && !showModal && <AuthNav onClick={handleCloseModal} />}
        {!isDesktop && !showModal && <BurgerMenu onClick={handleClick} />}
        {isMobile && showModal && (
          <div>
            <AuthNav onClick={handleCloseModal} />
            <Navigation onClick={handleCloseModal} />
            <img
              src={closeModal}
              alt="Close Modal"
              onClick={handleCloseModal}
              style={{ width: '24px', height: '24px' }}
            />
          </div>
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
