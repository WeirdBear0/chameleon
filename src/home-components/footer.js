import React, {useState} from "react";
import styles from './footer.module.css'
import img from './logoAlt.svg'

const Footer = () => {
    return(
        <div>
            <div className={styles.footer}>
                <div>
                    <div className={styles.content}>
                        <div className={styles.socials}>
                            <div className={styles.card}>
                                <p className={styles.title}>CONTACT</p>
                                <div className={styles.links}>
                                    <p>Reach us at <span className={styles.email}>camps.chameleon@gmail.com</span></p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.title}>LINKS</p>
                                <div className={styles.links}>
                                    <p>Facebook</p>
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blurb}>
                            <p><span className={styles.title}>CHAMELEON</span> acknowledges that we are on the Indigenous Land of Coast Salish peoples who have reserved treaty rights to this land, specifically the Snoqualmie Indian Tribe.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                    <img className = {styles.img} src = {img} alt = "CHAMELEON"></img>
                </div>
            </div>
            <div className={styles.credits}>
                <div className={styles.creditContainer}>
                    <p><span className={styles.title}>Ayush</span> Agarwal</p>
                    <p><span className={styles.title}>Andrew</span> Wang</p>
                    <p><span className={styles.title}>Kruthik</span> Ankam</p>
                </div>
                <p>chameleon 2024</p>
            </div>
        </div>
    )
}

export default Footer;