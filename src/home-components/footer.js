import React from "react";
import styles from './footer.module.css'
import img from './logoAlt.svg'

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
                                <span className={styles.socialIcon}><FacebookIcon /></span>
                                Facebook
                            </a>
                            <a 
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/chameleoncamps/"
                            >
                                <span className={styles.socialIcon}><InstagramIcon /></span>
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
                        <p className={styles.copyright}>© chameleon 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;