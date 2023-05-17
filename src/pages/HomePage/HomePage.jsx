import {
  BackgroundImage, HeroImage,
  MainTitle, Wrap,
} from './HomePage.styled.js';
import { useMedia } from 'react-use';
import { theme } from '../../utils/theme.jsx';

import HeroMobileImage from './img/hero/hero-mobile.png';
import HeroTabletAndDeskImage from './img/hero/hero-tablet-desk.png';

import bgImageMobile from './img/background/bg_mobile.jpg';
import bgImageTablet from './img/background/bg_tablet.jpg';
import bgImageDesktop from './img/background/bg_desktop.jpg';

const HomePage = () => {
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