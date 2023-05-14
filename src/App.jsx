import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterForm from './components/AuthForm/RegisterForm/RegisterForm.jsx';
import News from './components/News/News.jsx';
import FindPets from './components/FindPets/FindPets.jsx';
import OurFriends from './components/OurFriends/OurFriends.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import AddPet from './components/AddPet/AddPet.jsx';
import { ROUTES } from './utils/keys.js';

function App() {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.HOMEPAGE}
          element={
            <SharedLayout>
              <Navigate to={ROUTES.MAIN} />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.MAIN}
          element={
            <SharedLayout>
              <HomePage />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <SharedLayout>
              <LoginPage />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <SharedLayout>
              <RegisterForm />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.NEWS}
          element={
            <SharedLayout>
              <News />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.NOTICES}
          element={
            <SharedLayout>
              <FindPets />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.FRIENDS}
          element={
            <SharedLayout>
              <OurFriends />
            </SharedLayout>
          }
        />
        <Route
          path={ROUTES.ADDPET}
          element={
            <SharedLayout>
              <AddPet />
            </SharedLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
