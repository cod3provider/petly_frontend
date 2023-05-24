import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CloseIcons, HeaderStyled, NavStyled, PaddingWrapper} from './Header.styled.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import AuthNav from '../Navigations/AuthNav/AuthNav.jsx';
import Navigation from '../Navigations/Navigation/Navigation.jsx';
import { useMedia } from 'react-use';
import { theme } from '../../utils/theme.jsx';
import { ModalStyled } from './Header.styled.js';

import { getIsLoggedIn, getName } from '../../redux/auth/authSelectors.js';
import UserPageLogo from '../UserPageLogo/UserPageLogo.jsx';
import { getCurrentUser } from '../../redux/auth/authOperations.js';

export default function Header() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getName);


  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      dispatch(getCurrentUser()).finally(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, isLoggedIn]);

  const handleResize = () => {
    setShowModal(false);
  };

  useEffect(() => {
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
      <PaddingWrapper>
        <HeaderStyled>
          <NavStyled>
            <Logo onClick={handleClick} />
            {showModal && <CloseIcons onClick={handleCloseModal} />}
            {isLoggedIn && !isLoading && (
                <UserPageLogo
                    iconSize="28"
                    userName={userName}
                    isMobile={isMobile}
                    showModal={showModal}
                />
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
          </NavStyled>
        </HeaderStyled>

      </PaddingWrapper>

  );
}
