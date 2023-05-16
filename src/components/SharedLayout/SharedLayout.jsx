import Header from '../Header/Header.jsx';

import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Suspense>
        {children}
        <Outlet />
      </Suspense>
    </>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
