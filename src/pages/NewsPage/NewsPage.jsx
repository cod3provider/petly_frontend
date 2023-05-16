import { Helmet, HelmetProvider } from 'react-helmet-async';
import News from '../../components/News/News.jsx';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>NewsPage</title>
        </Helmet>
        <News />
      </div>
    </HelmetProvider>
  );
}
