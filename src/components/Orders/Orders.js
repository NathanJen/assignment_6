import React from 'react'
import styles from './Orders.module.css'
import { NavLink } from "react-router-dom"
import DogHarness from "../../assets/dogHarness.png"
import Collar from "../../assets/gpsCollar.png"
import FoodStorage from "../../assets/foodStorage.png"
import CarHarness from "../../assets/catHarness.png"
import Processed from "../../assets/processed.png"
import Shipped from "../../assets/shipped.png"
import Delivered from "../../assets/deliveredGreen.png"


export default function Orders() {
  return (
    <div className='content-container'>
      <NavLink to="./" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
      <div className='category-name-container'>
        <h1 className='category-name'>My Orders</h1>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.imagesContainer}>
          <img src={DogHarness} className={styles.image} alt="Dog Harness" />
          <img src={Collar} className={styles.image} alt="Dog Harness" />
          <img src={FoodStorage} className={styles.image} alt="Dog Harness" />
        </div>
        <div className={styles.statusContainer}>
          <h2 className={styles.orderNum}>Order: 12345</h2>
          <p className={styles.body}>Order Date: August 5, 2020</p>
          <p className={styles.body}>Order Status:</p>
          <div className={styles.iconRow}>
            <div className={styles.statusIconContainer}>
              <img src={Processed} className={styles.statusIcon} alt="Dog Harness" />
              <p className={styles.statusText}>Processing</p>
            </div>
            <div className={styles.statusIconContainer}>
              <img src={Shipped} className={styles.statusIcon} alt="Dog Harness" />
              <p className={styles.statusText}>Shipped</p>
            </div>
            <div className={styles.statusIconContainer}>
              <img src={Delivered} className={styles.statusIcon} alt="Dog Harness" />
              <p className={styles.statusText}>Delivered</p>
            </div>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.detailsCategory}><b>Shipped To:</b></p>
          <p className={styles.body}>Nathan Jen</p>
          <p className={styles.detailsCategory}><b>Total:</b></p>
          <p className={styles.body}>$60.00</p>
          <button className={styles.detailsBtn}>View Details</button>
        </div>
      </div>
    </div>
  )
}