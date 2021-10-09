import PropTypes from 'prop-types';

import styles from './Dropdown.module.css';
import { Icon } from '../../atoms/Icons';
import { options } from '../../../constants';
import classNames from 'classnames';

export const Dropdown = ({ size }) => {
  return (
    <div className={styles.container}>
      <Icon size={size} name="global" color="inverted" style={{ position: 'absolute', left: 5 }} />
      <select
        className={classNames(styles['select-language'], {
          [styles[`size-${size}`]]: size,
        })}>
        <option lang="es" value="/mx/" data-language="es" data-country="MX">
          Español
        </option>
        <option lang="en" value="/mx-en/" data-language="en" data-country="MX">
          English
        </option>
      </select>
      <Icon size={size} color="inverted" style={{ position: 'absolute', right: 5 }} />
    </div>
  );
};

Dropdown.propTypes = {
  size: PropTypes.oneOf(options.sizes),
};

Dropdown.defaultProps = {
  size: 'xs',
};
