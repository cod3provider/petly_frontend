import { Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage.jsx'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage.jsx')
);
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage.jsx'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

// import HomePage from './pages/HomePage/HomePage.jsx';
// import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
// import LoginPage from './pages/LoginPage/LoginPage.jsx';
// import NoticesPage from './pages/NoticesPage/NoticesPage.jsx';
// import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage.jsx';
// import NewsPage from './pages/NewsPage/NewsPage.jsx';
// import UserPage from './components/UserPage/UserPage.jsx';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

import AddPet from './components/AddPet2/AddPet2.jsx';

import { ROUTES } from './utils/keys.js';

// import Spinner from './pages/Spinner/Spinner';

import './App.css';

// import Spinner from './pages/Spinner/Spinner';

const Spinner = () => {
  return <></>;
};

// ===================================

// Работу роутов редактировать в процессе работы

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/*<Route*/}
            {/*  path={ROUTES.HOMEPAGE}*/}
            {/*  element={<Navigate to={ROUTES.HOMEPAGE} />}*/}
            {/*/>*/}
            <Route index element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.NEWS} element={<NewsPage />} />
            <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
            <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
            <Route
              path={ROUTES.ADDPET}
              element={
                <PrivateRoute>
                  <AddPet />
                </PrivateRoute>
              }
            />

            <Route
              path={ROUTES.USER}
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
