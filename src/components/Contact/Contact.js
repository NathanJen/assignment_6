import React from 'react'
import styles from './Contact.module.css'
import PhoneIcon from '../../assets/greenPhone.png'
import AddressIcon from '../../assets/greenPin.png'
import EmailIcon from '../../assets/greenEmail.png'

export default function Contact () {
  return (
    <div className='content-container'>
      <div className='category-name-container'>
        <h1 className='category-name'>Contact Us</h1>
      </div>
      <div className='row'>
        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfoRow}>
            <img src={PhoneIcon} alt='phone' />
            <p className={styles.contactInfo}>412-123-4567</p>
          </div>
          <div className={styles.contactInfoRow}>
            <img src={AddressIcon} alt='location' />
            <p className={styles.contactInfo}>
              5000 Forbes Ave,<br />
              Pittsburgh, PA 15213
            </p>          
          </div>
          <div className={styles.contactInfoRow}>
            <img src={EmailIcon} alt='email' />
            <p className={styles.contactInfo}>support@muddypaws.com</p>            
          </div>
        </div>
        <div className={styles.formContainer}>
          <form>
            <p className={styles.formLabel}>Full Name <span className={styles.required} >*</span></p>
            <input type="text" name="name" /><br />
            <p className={styles.formLabel}>Email Address <span className={styles.required} >*</span></p>
            <input type="text" name="email" /><br />
            <p className={styles.formLabel}>Message <span className={styles.required} >*</span></p>
            <textarea name="message"></textarea>
            <button className={styles.formBtn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}