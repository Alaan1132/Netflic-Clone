import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../Icons';
import { options } from '../../../constants';

import styles from './Button.module.css';

export const IconButton = ({ label, type, size, iconName, iconColor, isRounded, ...props }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles[type]]: type,
        [styles[`size-${size}`]]: size,
        [styles.isRounded]: isRounded,
      })}
      {...props}>
      {label}
      <Icon name={iconName} size={size} color={iconColor} />
    </button>
  );
};

IconButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(options.types).isRequired,
  isRounded: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'primary',
  size: 'md',
  iconName: 'caretDown',
  isRounded: false,
};
