import { Helmet, HelmetProvider } from 'react-helmet-async';

import NewsList from './NewsList/NewsList.jsx';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import { SectionStyled } from '../../components/common/Section/Section.styled.jsx';

export default function NewsPage() {
  return (
    <HelmetProvider>
      <SectionStyled>
        <ContainerStyled>
          {/*<Helmet>*/}
          {/*  <title>NewsPage</title>*/}
          {/*</Helmet>*/}
          <NewsList />
        </ContainerStyled>
      </SectionStyled>
    </HelmetProvider>
  );
}
