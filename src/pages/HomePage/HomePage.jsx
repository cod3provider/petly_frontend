import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';
import { HeroImage, HomeSection, MainTitle, Wrap } from './HomePage.styled.js';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled.js';
import Loader from '../../components/Loader/Loader';
import { theme } from '../../utils/theme.jsx';

import HeroMobileImage from './img/hero/hero-mobile.png';
import HeroTabletAndDeskImage from './img/hero/hero-tablet-desk.png';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
// import { SectionStyled } from '../../components/common/Section/Section.styled.jsx';

const HomePage = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

  return (
    <>
      <ContainerStyled>
        <HomeSection>
          <BackgroundImageDiv />
          {isLoading && <Loader />}
          <Wrap>
            <MainTitle>Take good care of your small pets</MainTitle>
            {isMobile && (
              <HeroImage src={HeroMobileImage} alt="pets" loading="lazy" />
            )}
            {isTablet && (
              <HeroImage
                src={HeroTabletAndDeskImage}
                alt="pets"
                loading="lazy"
              />
            )}
            {isDesktop && (
              <HeroImage
                src={HeroTabletAndDeskImage}
                alt="pets"
                loading="lazy"
              />
            )}
          </Wrap>
        </HomeSection>
      </ContainerStyled>
    </>
  );
};

export default HomePage;
