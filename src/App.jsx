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
// import AddPet from './components/AddPet/AddPet';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<FindPets />} />
        <Route path="/friends" element={<OurFriends />} />
      </Routes>

      {/*<AddPet />*/}
    </>
  );
}

export default App;
