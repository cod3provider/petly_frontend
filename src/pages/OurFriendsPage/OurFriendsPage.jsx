import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function OurFriendsPage() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>OurFriendsPage</title>
        </Helmet>
        <h1>Hello Pasha це сторінка OurFriendsPage</h1>
      </div>
    </HelmetProvider>
  );
}
