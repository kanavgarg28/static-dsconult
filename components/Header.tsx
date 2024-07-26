import Link from './ActiveLink'
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
            <div className={styles.logo}>DSCONSULTANT</div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>
                    Home
                </Link>
                <Link href="/about" className={styles.navLink}>
                    About Us
                </Link>
                <Link href="/services" className={styles.navLink}>
                    Services
                </Link>
                <Link href="/testimonials" className={styles.navLink}>
                    Testimonials
                </Link>
                <Link href="/contact" className={styles.navLink}>
                    Contact Us
                </Link>
            </nav>
        </header>
  )
}

export default Header
