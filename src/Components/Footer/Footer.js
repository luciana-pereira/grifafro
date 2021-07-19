import React from 'react';
import styles from './Footer.module.css';
// import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>✊🏾👨🏾‍🦱 GrifAfro.</p>
      <p className={styles.text}>Criado por <a href={"https://github.com/luciana-pereira"}>Luciana Pereira</a></p>
    </footer>
  );
};

export default Footer;