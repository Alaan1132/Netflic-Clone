import React from 'react';

import styles from './Navbar.module.css';

export const Navbar = ({ children, ...restProps }) => {
  return (
    <nav className={styles.navbar} {...restProps}>
      {children}
    </nav>
  );
};

Navbar.InnerContainer = ({ children, ...restProps }) => {
  return (
    <div className={styles.inner_container} {...restProps}>
      {children}
    </div>
  );
};

Navbar.Primary = ({ children, ...restProps }) => {
  return (
    <div className={styles.primary} {...restProps}>
      {children}
    </div>
  );
};

Navbar.Secondary = ({ children, ...restProps }) => {
  return (
    <div className={styles.secondary} {...restProps}>
      {children}
    </div>
  );
};

Navbar.Logo = ({ children, ...restProps }) => {
  return <div className={styles.logo}>{children}</div>;
};
