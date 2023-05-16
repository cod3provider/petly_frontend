import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function NoticesPage() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>NoticesPage</title>
        </Helmet>
        <h1>Hello Pasha це сторінка NoticesPage</h1>
      </div>
    </HelmetProvider>
  );
}
