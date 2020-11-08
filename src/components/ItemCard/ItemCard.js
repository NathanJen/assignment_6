import React from 'react'
import styles from './ItemCard.module.css'
import { NavLink } from "react-router-dom"
import Favorites from '../../assets/emptyHeart.png'
import FilledFavorites from '../../assets/filledHeart.png'
import AddToCart from '../../assets/add-to-cart.png'
import { CartConsumer } from '../../contexts/cart'
import { getItemIndex } from '../../shared/Utils'

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "Strawberry"
    }
  }

  changePhoto = (color) => {
    this.setState({
      color: color,
    })
  }

  render() {
    return (
      <CartConsumer>
        {({ favorites, addToFavorites, removeFromFavorites }) => (
          <div className={styles.itemCard}>
            <div className={styles.heroContainer}>
              <NavLink to={`/item?id=${getItemIndex(this.props.item)}`} >
                {/* <img src={this.props.item.colors[this.state.color]} alt='item' className={styles.categoryImg} /> */}
                <img src={this.props.item.colors['Strawberry']} alt='item' className={styles.categoryImg} />
              </NavLink>
              {favorites.includes(this.props.item)
                ? <img className={styles.topRight} src={FilledFavorites} alt="Favorites Heart" onClick={() => removeFromFavorites(this.props.item)} />
                : <img className={styles.topRight} src={Favorites} alt="Favorites Heart" onClick={() => addToFavorites(this.props.item)} />
              }
              {this.props.openModal
                ? <img 
                    src={AddToCart} 
                    alt='add-to-cart-icon' 
                    className={`${styles.bottomRight} ${styles.addToCart}`} 
                    onClick={() => this.props.openModal(this.props.item)}
                  />
                : null
              }
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