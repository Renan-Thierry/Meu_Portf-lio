import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.desktop_nav}>
        <p className={styles.logo}>Renan Thierry</p>
        <div>
          <ul className={styles.nav_links}>
            <li><a href='#About'>About</a></li>
            <li><a href='#Experience'>Experience</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav className={styles.hamburguer_nav}>
        <p className={styles.logo}>Renan Thierry</p>
        <div className={styles.hamburguer_menu}>
          <div className={`${styles.hamburguer_icon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.menu_links} ${isMenuOpen ? styles.open : ''}`}>
            <li><a href="#About" onClick={toggleMenu}>About</a></li>
            <li><a href="#Experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
