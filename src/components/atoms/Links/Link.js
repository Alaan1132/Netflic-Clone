import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Links.module.css';
import { options } from '../../../constants';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ children, to, type, size }) => {
  return (
    <RouterLink
      to={to}
      className={classNames(styles.link, {
        [styles[type]]: type,
        [styles[`size-${size}`]]: size,
      })}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types),
};

Link.defaultProps = {
  children: 'Link',
  color: 'base',
};
