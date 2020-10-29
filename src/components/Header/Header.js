import React from 'react'
import styles from './Header.module.css'
import { NavLink } from "react-router-dom"
import Search from '../../assets/search.png'
import Favorites from '../../assets/favorite.png'
import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'
import { CartConsumer } from '../../contexts/cart'

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

function Icons({ cart }) {
  return (
    <div>
      <ul className={styles.navLinks}>
        {/* <li><img src={Search} alt='search-icon' className={styles.navIcon} /></li> */}
        <li><NavLink to='/favorites'><img src={Favorites} alt='favorites-icon' className={styles.navIcon} /></NavLink></li>
        <li>
          <NavLink to='/cart'>
            <div className={`${styles.navIcon} row`}>
              <img src={Cart} alt='cart-icon' />
              <p className={styles.cartCounter}>{`(${cart.length})`}</p>
            </div>
          </NavLink>
        </li>
        <li><NavLink to='/orders'><img src={User} alt='favorites-icon' className={styles.navIcon} /></NavLink></li>
      </ul>
    </div>
  )
}

export default function Header() {
  return (
    <CartConsumer>
      {({ cart }) => (
        <header>
          <NavLink to='./'><h1 className={`${styles.logo} green`}>Muddy Paws</h1></NavLink>
          <Nav />
          <Icons cart={cart} />
        </header>
      )}
    </CartConsumer>
  )
}