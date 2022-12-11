import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;