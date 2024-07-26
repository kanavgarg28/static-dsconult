import Link from 'next/link';
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <div className={styles.logo}>Purple Buzz</div>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <div className={styles.social}>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-flickr"></i></a>
                    <a href="#"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            <div className={styles.column}>
                <h3 className={styles.heading}>Our Company</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}><Link href="/" className={styles.link}>Home</Link></li>
                    <li className={styles.listItem}><Link href="/about" className={styles.link}>About Us</Link></li>
                    <li className={styles.listItem}><Link href="/services" className={styles.link}>Services</Link></li>
                    <li className={styles.listItem}><Link href="/testimonials" className={styles.link}>Testimonials</Link></li>
                    <li className={styles.listItem}><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3 className={styles.heading}>For Client</h3>
                <p className={styles.text}>📞 010-020-0340</p>
                <p className={styles.text}>✉️ info@company.com</p>
            </div>
        </footer>
    );
};

export default Footer;
