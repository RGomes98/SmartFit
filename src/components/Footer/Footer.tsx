import logo from '../../assets/logo.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={logo} alt='logo' />
      <span className={styles.text}>Todos os direitos reservados - {new Date().getFullYear()}</span>
    </footer>
  );
};
