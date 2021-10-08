import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Links.module.css';
import { options } from '../../constants';

export const Link = ({ children, type, size }) => {
  return (
    <a
      className={classNames(styles.link, {
        [styles[type]]: type,
        [styles[`size-${size}`]]: size,
      })}>
      {children}
    </a>
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
