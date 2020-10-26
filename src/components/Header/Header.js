import React from 'react'
import styles from './Header.module.css'
import { NavLink } from "react-router-dom"
import Search from '../../assets/search.png'
import Favorites from '../../assets/favorite.png'
import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'

function Nav() {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li><NavLink to='/products'><p className={styles.navLink}>Cats</p></NavLink></li>
        <li><NavLink to='/products'><p className={styles.navLink}>Dogs</p></NavLink></li>
      </ul>
    </nav>
  )
}

function Icons() {
  return (
    <div>
      <ul className={styles.navLinks}>
        <li><img src={Search} alt='search-icon' className={styles.navLink} /></li>
        <li><NavLink to='./'><img src={Favorites} alt='favorites-icon' className={styles.navLink} /></NavLink></li>
        <li><img src={Cart} alt='cart-icon' className={styles.navLink} /></li>
        <li><NavLink to='/orders'><img src={User} alt='favorites-icon' className={styles.navLink} /></NavLink></li>
      </ul>
    </div>
  )
}

export default function Header() {
  return (
    <header>
      <NavLink to='./'><h1 className={`${styles.logo} green`}>Muddy Paws</h1></NavLink>
      <Nav />
      <Icons />
    </header>
  )
}