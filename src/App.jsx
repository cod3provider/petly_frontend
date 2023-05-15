import './App.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import GlobalStyles from './utils/globalStyles.js';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

function App() {
  return (
    <>
      <GlobalStyles />
      <HomePage />
      <RegisterPage />
      <LoginPage />
    </>
  );
}

export default App;
