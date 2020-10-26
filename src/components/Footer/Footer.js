import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from "react-router-dom"
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Insta from '../../assets/instagram.png'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerCategory}>
        <p className={`${styles.footerTitle} green`}>Muddy Paws</p>
        <div className={styles.row}>
          <img src={Phone} alt='phone-logo' className={styles.footerIcon} />
          <p className={styles.footerLink}>412-123-4567</p>
        </div>
        <div className={styles.row}>
          <img src={Email} alt='email-logo' className={styles.footerIcon} />
          <a href="mailto:info@example.com" className={styles.footerLink}>support@muddypaws.com</a>
        </div>
      </div>
      <div className={styles.footerCategory}>
        <p className={`${styles.footerTitle} green`}>Products</p>
        <NavLink to='/products'><p className={styles.footerLink}>Cats</p></NavLink>
        <NavLink to='/products'><p className={styles.footerLink}>Dogs</p></NavLink>
      </div>
      <div className={styles.footerCategory}>
        <p className={`${styles.footerTitle} green`}>Company</p>
        <p className={styles.footerLink}>About Us</p>
        <NavLink to='/contact'><p className={styles.footerLink}>Contact Us</p></NavLink>
      </div>
      <div className={styles.footerCategory}>
        <p className={`${styles.footerTitle} green`}>Social Media</p>
        <div className={styles.socialIconRow}>
          <a href='https://www.facebook.com/'><img src={Facebook} alt='facebook-logo' /></a>
          <a href='https://www.twitter.com/'><img src={Twitter} alt='twitter-logo' /></a>
          <a href='https://www.instagram.com/'><img src={Insta} alt='instagram-logo' /></a>
        </div>
      </div>
    </footer>
  )
}