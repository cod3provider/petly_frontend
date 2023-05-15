import {
  BackgroundImage,
  MainTitle, MobileHero, Wrap,
} from './HomePage.styled.js';
// import { useMedia } from 'react-use';
// import { theme } from '../../utils/theme.jsx';

import HeroMobileImage from './img/hero/hero-mobile.png';
// import HeroTabletAndDeskImage from './img/hero/hero-tablet-desk.png';

import bgImageMobile from './img/background/bg_mobile.jpg';
// import bgImageTablet from './img/background/bg_tablet.jpg';
// import bgImageDesktop from './img/background/bg_desktop.jpg';


const HomePage = () => {
  // const isMobile = useMedia(theme.breakpoints.mobile.media);
  // const isTablet = useMedia(theme.breakpoints.tablet.media);
  // const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <>
      {/*{isMobile && (*/}
      {/*  <BackgroundImage src={bgImageMobile} />*/}
      {/*)}*/}

      {/*{isTablet && (*/}
      {/*	<BackgroundImage src={bgImageTablet} />*/}
      {/*)}*/}

      {/*{isDesktop && (*/}
      {/*	<BackgroundImage src={bgImageDesktop} />*/}
      {/*)}*/}

      {/*{isMobile && (*/}
      {/*  <>*/}

      {/*    <MobileHero src={HeroMobileImage} />*/}
      {/*    <ImagesWrap />*/}
      {/*  </>*/}
      {/*)}*/}

      {/*{isTablet && (*/}
      {/*  <>*/}
      {/*    <BackgroundImage src={bgImageTablet} />*/}
      {/*    <MobileHero src={HeroMobileImage} />*/}
      {/*  </>*/}
      {/*)}*/}

      {/*{isDesktop && (*/}
      {/*  <>*/}
      {/*    <BackgroundImage src={bgImageDesktop} />*/}
      {/*    <MobileHero src={HeroMobileImage} />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*</ImagesWrap>*/}

      <BackgroundImage
        src={bgImageMobile}
        alt="image hero: two dogs and one cat"
        loading="lazy"
      />
      <Wrap>
        <MainTitle>Take good care of your small pets</MainTitle>
        <MobileHero src={HeroMobileImage} alt="pets" loading="lazy" />
      </Wrap>
    </>
  );
};

export default HomePage;
