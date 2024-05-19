import styles from '../styles/pages.module.css'

export default function Project() {
    return (
        <>
            <h1 className={styles.h1}>Check out my portolio!</h1>
            <h2><a className={styles.bodyLink} href='https://margaretpope.github.io/AbbottElementary/'>Abbot Elementary</a></h2>
            <p className={styles.p}>Group project in which we used HTML and CSS to create a website about our favorite show.</p>
            <h2><a className={styles.bodyLink} href='https://margaretpope.github.io/m5-hw5-pope-margaret/'>About Me</a></h2>
            <p className={styles.p}>Used HTML and CSS to create a porfolio site.</p>
            <h2><a className={styles.bodyLink} href='https://margaretpope.github.io/com6338-8-8-Pope-Margaret/'>Weather App</a></h2>
            <p className={styles.p}>Used JavaScript to render data from an external API.</p>
        </>
    )
}