import React from 'react'
import styles from './ItemCard.module.css'
import Favorites from '../../assets/heart.png'
import AddToCart from '../../assets/add-to-cart.png'
import RedCircle from '../../assets/redCircle.png'
import PinkCircle from '../../assets/pinkCircle.png'
import BlackCircle from '../../assets/blackCircle.png'
import PurpleCircule from '../../assets/PurpleCircle.png'
import { getFirstImage } from '../../shared/Utils'

export default class ItemCard extends React.Component {
  render() {
    return (
      <a className={styles.itemCard} href='./dog-harness.html'>
        <div className={styles.heroContainer}>
          <img src={getFirstImage(this.props.item)} alt='item' className={styles.categoryImg} />
          <img src={Favorites} alt='heart-icon' className={styles.topRight} />
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
                <img src={PinkCircle} alt='pink-color' className={styles.colorCircle} />
                <img src={BlackCircle} alt='black-color' className={styles.colorCircle} />                 
              </div>
              <div>
                <img src={PurpleCircule} alt='purple-color' className={styles.colorCircle} />
                <img src={RedCircle} alt='red-color' className={styles.colorCircle} />                 
              </div>
            </div>
          </div>
        </div>
        <p className={`${styles.itemPrice} green`}>{`$${this.props.item.price}`}</p>
      </a>
    )
  }
}