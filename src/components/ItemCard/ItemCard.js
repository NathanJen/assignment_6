import React from 'react'
import styles from './ItemCard.module.css'
import { NavLink } from "react-router-dom"
import Favorites from '../../assets/emptyHeart.png'
import FilledFavorites from '../../assets/filledHeart.png'
import AddToCart from '../../assets/add-to-cart.png'
import { getFirstImage } from '../../shared/Utils'
import { CartConsumer } from '../../contexts/cart'

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: getFirstImage(this.props.item)
    }
  }

  changePhoto = (color) => {
    if (this.props.item.colors) {
      this.props.item.colors[color] && this.setState({ image: this.props.item.colors[color] })
    }
  }

  render() {
    return (
      <CartConsumer>
        {({ favorites, addToFavorites, removeFromFavorites }) => (
          <div className={styles.itemCard}>
            <div className={styles.heroContainer}>
              <NavLink to='/item?id=0' >
                <img src={this.state.image} alt='item' className={styles.categoryImg} />
              </NavLink>
              {favorites.includes(this.props.item)
                ? <img className={styles.topRight} src={FilledFavorites} alt="Favorites Heart" onClick={() => removeFromFavorites(this.props.item)} />
                : <img className={styles.topRight} src={Favorites} alt="Favorites Heart" onClick={() => addToFavorites(this.props.item)} />
              }
              <img src={AddToCart} alt='add-to-cart-icon' className={`${styles.bottomRight} ${styles.addToCart}`} />
            </div>
            <div className='row'>
              <div>
                <NavLink to='/item?id=0' className={styles.noUnderline}>
                  <p className={styles.itemName}>{this.props.item.name}</p>
                </NavLink>
                <p className={`${styles.itemCategory} gray`}>{this.props.item.type}</p>
              </div>
              <div>
                <div>
                  <span className={`${styles.circle} ${styles.pink}`} onClick={() => this.changePhoto("Strawberry")}></span>
                  <span className={`${styles.circle} ${styles.black}`} onClick={() => this.changePhoto("Blackberry")}></span>
                </div>
                <div>
                  <span className={`${styles.circle} ${styles.purple}`} onClick={() => this.changePhoto("Crazyberry")}></span>
                  <span className={`${styles.circle} ${styles.red}`} onClick={() => this.changePhoto("Fire Orange")}></span>              
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