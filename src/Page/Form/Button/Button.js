import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <button {...props} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;