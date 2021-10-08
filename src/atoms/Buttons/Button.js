import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { options } from '../../constants';

export const Button = ({ children, type }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles[type]]: type,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types).isRequired,
};

Button.defaultProps = {
  children: 'hello',
  type: 'primary',
};
