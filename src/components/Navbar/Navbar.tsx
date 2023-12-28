import logo from '../../assets/logo.svg';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt='logo' />
    </nav>
  );
};
