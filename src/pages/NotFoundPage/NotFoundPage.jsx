import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  IconButton,
  ImageNotFound,
  Title,
} from './NotFound.styled.js';
import {  BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled.js';

import { theme } from '../../utils/theme.jsx';

// import bgImageMobile from '../../assets/img/background/bg_mobile.png';
// import bgImageTablet from '../../assets/img/background/bg_tablet.png';
// import bgImageDesktop from '../../assets/img/background/bg_desktop.png';
import notFoundImg from './img/notfound.png';

const NotFoundPage = () => {
  // const isMobile = useMedia(theme.breakpoints.mobile.media);
  // const isTablet = useMedia(theme.breakpoints.tablet.media);
  // const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <>
      {/*{isMobile && (*/}
      {/*  <BackgroundImage*/}
      {/*    src={bgImageMobile}*/}
      {/*    alt="image hero: two dogs and one cat"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*)}*/}

      {/*{isTablet && (*/}
      {/*  <BackgroundImage*/}
      {/*    src={bgImageTablet}*/}
      {/*    alt="image hero: two dogs and one cat"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*)}*/}

      {/*{isDesktop && (*/}
      {/*  <BackgroundImage*/}
      {/*    src={bgImageDesktop}*/}
      {/*    alt="image hero: two dogs and one cat"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*)}*/}

      <BackgroundImageDiv />

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
