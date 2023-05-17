import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  IconButton,
  ImageNotFound,
  Title,
} from './NotFound.styled.js';
import { BackgroundImage } from '../../components/common/BgImage/BgImage.styled.js';

import { theme } from '../../utils/theme.jsx';

import bgImageMobile from '../../pages/HomePage/img/background/bg_mobile.jpg';
import bgImageTablet from '../HomePage/img/background/bg_tablet.jpg';
import bgImageDesktop from '../HomePage/img/background/bg_desktop.jpg';
import notFoundImg from './img/notfound.png';

const NotFoundPage = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <>
      {isMobile && (
        <BackgroundImage
          src={bgImageMobile}
          alt="image hero: two dogs and one cat"
          loading="lazy"
        />
      )}

      {isTablet && (
        <BackgroundImage
          src={bgImageTablet}
          alt="image hero: two dogs and one cat"
          loading="lazy"
        />
      )}

      {isDesktop && (
        <BackgroundImage
          src={bgImageDesktop}
          alt="image hero: two dogs and one cat"
          loading="lazy"
        />
      )}

      <Container>
        <Title>Ooops! This page not found :(</Title>
        <div>
          <ImageNotFound src={notFoundImg} alt="image not found page" />
        </div>
        <Link to="/">
          <Button type="button">
            To main page
            <IconButton></IconButton>
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default NotFoundPage;
