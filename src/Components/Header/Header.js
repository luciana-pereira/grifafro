import styles from './Header.module.css';
import Logo from '../../Assets/Logo.jfif'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <img className={styles.img} src={Logo} />
          <h2 className={styles.title}>GrifAfro</h2>
          <ul className={styles.options}>
            <li>Sobre |</li>
            <li>Acessórios 💍 |</li>
            <li>Promoções |</li>
            <li>Meus Pedidos 🛍️</li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;