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
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
// import AddPet from './components/AddPet/AddPet.jsx';
import { ROUTES } from './utils/keys.js';
import { lazy, Suspense } from 'react';


// import Spinner from './pages/Spinner/Spinner';
// import SharedLayout from './pages/SharedLayout/SharedLayout';

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

const UserPage = () => {
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
        {/*<Route path="/" element={<SharedLayout />}>*/}
          <Route index element={<HomePage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
          <Route path={ROUTES.FRIENDS} element={<FriendsPage />} />
          <Route path={ROUTES.USER} element={<UserPage />} />
          {/*<Route path={ROUTES.ADDPET} element={<AddPet />} />*/}
          <Route path="*" element={<NotFoundPage />} />
        {/*</Route>*/}
      </Routes>
    </Suspense>
  );
}

export default App;
