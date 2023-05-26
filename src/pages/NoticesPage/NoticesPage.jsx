import { Helmet, HelmetProvider } from 'react-helmet-async';
import Notices from '../../components/NoticesPageComponents/Notices/Notices';
import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled';

export default function NoticesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>NoticesPage</title>
        </Helmet>
        <Notices />
      </div>
      {isLoading && <Loader />}
      <BackgroundImageDiv />
    </HelmetProvider>
  );
}
