import { useMedia } from 'react-use';

import { HeroImage, MainTitle, Wrap } from './HomePage.styled.js';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled.js';

import { theme } from '../../utils/theme.jsx';

import HeroMobileImage from './img/hero/hero-mobile.png';
// import HeroMobileImage2 from './img/hero/hero-mobile@2x.png';
// import HeroMobileImageWebp from './img/hero/hero-mobile.webp';
import HeroTabletAndDeskImage from './img/hero/hero-tablet-desk.png';
// import HeroTabletAndDeskImage2 from './img/hero/hero-tablet-desk@2x.png';
// import HeroTabletAndDeskImageWebp from './img/hero/hero-tablet-desk.webp';
// import bgImageMobile from '../../assets/img/background/bg_mobile.png';
// import bgImageTablet from '../../assets/img/background/bg_tablet.png';
// import bgImageDesktop from '../../assets/img/background/bg_desktop.png';

const HomePage = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <>
      {/*{isMobile && (*/}
      {/*  <BackgroundImage*/}
      {/*    src={bgImageMobile}*/}
      {/*    alt="image hero: two dogs and one cat"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*)}*/}

        <BackgroundImageDiv />
      {/*{isTablet && (*/}
      {/*  // <BackgroundImage*/}
      {/*  //   src={bgImageTablet}*/}
      {/*  //   alt="image hero: two dogs and one cat"*/}
      {/*  //   loading="lazy"*/}
      {/*  // />*/}
      {/*)}*/}

      {/*{isDesktop && (*/}
      {/*  <BackgroundImage*/}
      {/*    src={bgImageDesktop}*/}
      {/*    alt="image hero: two dogs and one cat"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*)}*/}

      <Wrap>
        <MainTitle>Take good care of your small pets</MainTitle>
        {isMobile && (
          <HeroImage src={HeroMobileImage} alt="pets" loading="lazy" />
        )}
        {isTablet && (
          <HeroImage src={HeroTabletAndDeskImage} alt="pets" loading="lazy" />
        )}
        {isDesktop && (
          <HeroImage src={HeroTabletAndDeskImage} alt="pets" loading="lazy" />
        )}
      </Wrap>
    </>
  );
};

export default HomePage;