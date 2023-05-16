import Header from '../Header/Header.jsx';
import PropTypes from 'prop-types';

function SharedLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
