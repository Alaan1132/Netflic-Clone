import PropTypes from 'prop-types';
import classNames from 'classnames';

import { mapSize } from './helpers';
import { iconsMap, options } from '../../constants';
import styles from './Icon.module.css';

export const Icon = ({ name, size, color, ...props }) => {
  const icon = iconsMap[name];
  const mappedSize = mapSize(size);

  return (
    <div className={styles.icon} {...props}>
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={classNames({
          [styles[`color-${color}`]]: color,
        })}
        style={{ width: mappedSize, height: mappedSize }}>
        <desc>{name}</desc>
        {icon.path}
      </svg>
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(options.names).isRequired,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
};

Icon.defaultProps = {
  name: 'caretDown',
  size: 'md',
  color: 'base',
};
