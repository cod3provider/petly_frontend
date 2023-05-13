import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Spinner from './pages/Spinner/Spinner';
// import SharedLayout from './pages/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import AddPet from './components/AddPet/AddPet';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.css';

// Удалить когда будут компоненты
const SharedLayout = () => {
  return <></>;
};

const Spinner = () => {
  return <></>;
};

const NotFoundPage = () => {
  return <></>;
};
// ===================================

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
