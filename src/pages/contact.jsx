import styles from '../styles/pages.module.css'

export default function Contact() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Contact</h1>
            <p className={styles.p}>Check out my profile on <a href="https://github.com/margaretpope">GitHub</a>.</p>
            <p className={styles.p}>Connect with me on <a href="https://www.linkedin.com">LinkedIn</a>.</p>
        </main>
    )    
}