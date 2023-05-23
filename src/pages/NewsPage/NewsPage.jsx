import { Helmet, HelmetProvider } from 'react-helmet-async';
{/*import News from '../../components/News/News.jsx';*/}
import PageNews from './NewsList.jsx';

export default function NewsPage() {
  return (
    <HelmetProvider>
      <div>
        {/*<Helmet>*/}
        {/*  <title>NewsPage</title>*/}
        {/*</Helmet>*/}
        <PageNews />
        {/*<News />*/}
      </div>
    </HelmetProvider>
  );
}
