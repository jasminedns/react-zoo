import styles from "./footer.module.css"
import { InstagramLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react"
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                <h4>+46 123 456 78</h4>
                <h4>Stockholm</h4>
                <h4>info@futuregames.com</h4>
            </div>
            <div className={styles.more}>
                <h4>Know more about Australia and its beautiful animals!</h4>
                <button>Know More</button>
            </div>
            <div className={styles.socials}>
                <InstagramLogo size={32} />
                <XLogo size={32} />
                <YoutubeLogo size={32} />
            </div>
        </footer>
    )
}