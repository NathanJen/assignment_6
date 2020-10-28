import React from 'react'
import styles from './ItemCard.module.css'
import { NavLink } from "react-router-dom"
import Favorites from '../../assets/emptyHeart.png'
import FilledFavorites from '../../assets/filledHeart.png'
import AddToCart from '../../assets/add-to-cart.png'
import { getFirstImage } from '../../shared/Utils'
import { CartConsumer } from '../../contexts/cart'

export default class ItemCard extends React.Component {
  render() {
    return (
      <CartConsumer>
        {({ favorites, addToFavorites, removeFromFavorites }) => (
          <div className={styles.itemCard}>
            <div className={styles.heroContainer}>
              <NavLink to='/item?id=0' >
                <img src={getFirstImage(this.props.item)} alt='item' className={styles.categoryImg} />
              </NavLink>
              {favorites.includes(this.props.item)
                ? <img className={styles.topRight} src={FilledFavorites} alt="Favorites Heart" onClick={() => removeFromFavorites(this.props.item)} />
                : <img className={styles.topRight} src={Favorites} alt="Favorites Heart" onClick={() => addToFavorites(this.props.item)} />
              }
              <img src={AddToCart} alt='add-to-cart-icon' className={`${styles.bottomRight} ${styles.addToCart}`} />
            </div>
            <div className='row'>
              <div>
                <p className={styles.itemName}>{this.props.item.name}</p>
                <p className={`${styles.itemCategory} gray`}>{this.props.item.type}</p>
              </div>
              <div>
                <div>
                  <div>
                    <span className={`${styles.circle} ${styles.pink}`}></span>
                    <span className={`${styles.circle} ${styles.black}`}></span>
                  </div>
                  <div>
                    <span className={`${styles.circle} ${styles.purple}`}></span>
                    <span className={`${styles.circle} ${styles.red}`}></span>              
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles.itemPrice} green`}>{`$${this.props.item.price}`}</p>
          </div>
        )}
      </CartConsumer>
    )
  }
}