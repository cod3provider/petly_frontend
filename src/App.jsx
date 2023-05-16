import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import RegisterForm from './components/AuthForm/RegisterForm/RegisterForm.jsx';
import News from './components/News/News.jsx';
import FindPets from './components/FindPets/FindPets.jsx';
import OurFriends from './components/OurFriends/OurFriends.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import AddPet from './components/AddPet/AddPet.jsx';

import { ROUTES } from './utils/keys.js';
import UserPage from './pages/UserPage/UserPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { lazy, Suspense } from 'react';


// import Spinner from './pages/Spinner/Spinner';
// import SharedLayout from './pages/SharedLayout/SharedLayout';

import UserPage from './pages/UserPage/UserPage.jsx';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


//! import AddPet from './components/AddPet/AddPet';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


// Удалять по мере подключения компонентов
// const SharedLayout = () => {
//   return <></>;
// };

const Spinner = () => {
  return <></>;
};

const NewsPage = () => {
  return <></>;
};

const NoticesPage = () => {
  return <></>;
};

const FriendsPage = () => {
  return <></>;
};

const NotFoundPage = () => {
  return <></>;
};
// ===================================

// Работу роутов редактировать в процессе работы

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <SharedLayout>
        <Routes>
          <Route
            path={ROUTES.HOMEPAGE}
            element={<Navigate to={ROUTES.MAIN} />}
          />
          <Route path={ROUTES.MAIN} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterForm />} />
          <Route path={ROUTES.NEWS} element={<News />} />
          <Route path={ROUTES.NOTICES} element={<FindPets />} />
          <Route path={ROUTES.FRIENDS} element={<OurFriends />} />
          <Route path={ROUTES.ADDPET} element={<AddPet />} />
          <Route
            path={ROUTES.USER}
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </SharedLayout>
    </Suspense>
  );
}

export default App;
