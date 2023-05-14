import './App.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

import AddPet2 from './components/AddPet2/AddPet2';

function App() {
  return (
    <>
      <HomePage />
      <RegisterPage />
      <LoginPage />

      <AddPet2 />
    </>
  );
}

export default App;
