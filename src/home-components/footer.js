import React from "react";
import styles from './footer.module.css'
import img from './logoAlt.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Contact Us</h3>
                        <div className={styles.contactInfo}>
                            <a href="mailto:camps.chameleon@gmail.com" className={styles.contactLink}>
                                <span className={styles.contactIcon}>✉️</span>
                                camps.chameleon@gmail.com
                            </a>
                            <a href="tel:+14257382825" className={styles.contactLink}>
                                <span className={styles.contactIcon}>📞</span>
                                425.738.2825
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Follow Us</h3>
                        <div className={styles.socialLinks}>
                            <a 
                                className={styles.socialLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/profile.php?id=61559919316355"
                            >
                                <span className={styles.socialIcon}>📘</span>
                                Facebook
                            </a>
                            <a 
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/chameleoncamps/"
                            >
                                <span className={styles.socialIcon}>📸</span>
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Land Acknowledgement</h3>
                        <p className={styles.landAck}>
                            CHAMELEON acknowledges that we are on the Indigenous Land of Coast Salish peoples who have reserved treaty rights to this land, specifically the Snoqualmie Indian Tribe.
                        </p>
                    </div>
                </div>

                <div className={styles.credits}>
                    <div className={styles.creditContainer}>
                        <div className={styles.creditNames}>
                            <span className={styles.creditName}><strong>Ayush</strong> Agarwal</span>
                            <span className={styles.creditName}><strong>Andrew</strong> Wang</span>
                            <span className={styles.creditName}><strong>Kruthik</strong> Ankam</span>
                        </div>
                        <p className={styles.copyright}>© chameleon 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;