import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

// import AddPet from './components/AddPet/AddPet.jsx';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
// import AddPet from './components/AddPet/AddPet.jsx';

import { ROUTES } from './utils/keys.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { lazy, Suspense } from 'react';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage.jsx';
import NoticesPage from './pages/NoticesPage/NoticesPage.jsx';
import UserPage from './components/UserPage/UserPage.jsx';
import NewsPage from './pages/NewsPage/NewsPage.jsx';

// import Spinner from './pages/Spinner/Spinner';

// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

//! import AddPet from './components/AddPet/AddPet';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Spinner = () => {
  return <></>;
};

const FriendsPage = () => {
  return <></>;
};

// const NotFoundPage = () => {
//   return <></>;
// };

// ===================================

// Работу роутов редактировать в процессе работы

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path={ROUTES.HOMEPAGE}
            element={<Navigate to={ROUTES.HOMEPAGE} />}
          />
          <Route index element={<HomePage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
          <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
          {/*// <Route path={ROUTES.ADDPET} element={<AddPet />} />*/}
          <Route
            path={ROUTES.USER}
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        {/* //</Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
