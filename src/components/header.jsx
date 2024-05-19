import { Link } from 'react-router-dom'
import styles from '../styles/pages.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.headerLink}>Home</Link>
            <Link to="/about" className={styles.headerLink}>About</Link>
            <Link to="/contact" className={styles.headerLink}>Contact</Link>
        </header>
    )
}