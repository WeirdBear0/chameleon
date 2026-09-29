import React from "react";
import styles from './footer.module.css'

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                            <address className={styles.addressBlock}>
                                <span className={styles.contactIcon} aria-hidden="true">📍</span>
                                <a
                                    className={styles.contactLink}
                                    href="https://www.google.com/maps/search/?api=1&query=1811+211th+Ave+SE,+Sammamish,+WA+98075-9260"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    1811 211th Ave SE<br />
                                    Sammamish, WA 98075-9260
                                </a>
                            </address>
                            <a href="mailto:info@chameleoncamps.org" className={styles.contactLink}>
                                <span className={styles.contactIcon}>✉️</span>
                                info@chameleoncamps.org
                            </a>
                            <a href="tel:+14252954118" className={styles.contactLink}>
                                <span className={styles.contactIcon}>📞</span>
                                425.295.4118
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
                                href="https://www.instagram.com/chameleoncamps/"
                            >
                                <span className={styles.socialIcon}><InstagramIcon /></span>
                                Instagram
                            </a>
                            <a
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/company/chameleon-camps"
                            >
                                <span className={styles.socialIcon}><LinkedInIcon /></span>
                                LinkedIn
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
                        <p className={styles.copyright}>© 2026 Chameleon Camps · 501(c)(3) nonprofit · EIN 99-3456787</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;