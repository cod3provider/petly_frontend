import { Helmet, HelmetProvider } from 'react-helmet-async';
import Notices from "../../components/NoticesPageComponents/Notices/Notices"

export default function NoticesPage() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>NoticesPage</title>
        </Helmet>
        <Notices/>
      </div>
    </HelmetProvider>
  );
}
