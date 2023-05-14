import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
