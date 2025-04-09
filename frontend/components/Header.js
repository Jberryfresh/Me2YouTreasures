import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Me2You Treasures</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/product">Products</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;