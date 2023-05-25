import { Helmet, HelmetProvider } from 'react-helmet-async';

import NewsList from './NewsList/NewsList.jsx';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';

export default function NewsPage() {
  return (
    <HelmetProvider>
      <ContainerStyled>
        {/*<Helmet>*/}
        {/*  <title>NewsPage</title>*/}
        {/*</Helmet>*/}
        <NewsList />
      </ContainerStyled>
    </HelmetProvider>
  );
}
