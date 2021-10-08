import styles from './Dropdown.module.css';
import { Icon } from '../../atoms/Icons';

export const Dropdown = () => {
  return (
    <div className={styles.container}>
      <Icon size="xs" name="global" color="inverted" style={{ position: 'absolute', left: 5 }} />
      <select className={styles['select-language']}>
        <option lang="es" value="/mx/" data-language="es" data-country="MX">
          Español
        </option>
        <option lang="en" value="/mx-en/" data-language="en" data-country="MX">
          English
        </option>
      </select>
      <Icon size="xs" color="inverted" style={{ position: 'absolute', right: 5 }} />
    </div>
  );
};

Dropdown.propTypes = {};
