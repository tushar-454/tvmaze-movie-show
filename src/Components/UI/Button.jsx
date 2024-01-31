import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ path, children, ...rest }) => {
  return (
    <Link to={path}>
      <button
        {...rest}
        className='hover:bg-deep-teal-100 active:bg-deep-teal-200 mt-4 w-full rounded-full bg-white p-2 transition'
      >
        {children}
      </button>
    </Link>
  );
};
Button.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
