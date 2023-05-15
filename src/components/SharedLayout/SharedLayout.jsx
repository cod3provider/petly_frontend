import Header from '../Header/Header.jsx';

import PropTypes from 'prop-types';
import { Suspense } from 'react';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Suspense>{children}</Suspense>
    </>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
