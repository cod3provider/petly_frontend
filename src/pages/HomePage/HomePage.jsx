import { useMedia } from 'react-use';

import { HeroImage, MainTitle, Wrap } from './HomePage.styled.js';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled.js';

import { theme } from '../../utils/theme.jsx';


import HeroMobileImage from './img/hero/hero-mobile.png';
import HeroTabletAndDeskImage from './img/hero/hero-tablet-desk.png';

const HomePage = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  return (
    <>
      <BackgroundImageDiv />
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