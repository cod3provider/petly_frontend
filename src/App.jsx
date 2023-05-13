
import './App.css'
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx"
import AddPet from './components/AddPet/AddPet';
function App() {
  return (
    <>
      <HomePage />
      <RegisterPage />
      <LoginPage/>
  <AddPet />
    </>
  );
}

export default App;
