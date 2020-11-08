import React from 'react'
import styles from './Modal.module.css'
import { NavLink } from "react-router-dom"
import { CartConsumer } from '../../contexts/cart'
import itemCardStyles from '../ItemCard/ItemCard.module.css'
import ColorSelection from '../ProductDetails/ColorSelection'
import SizeSelection from '../ProductDetails/SizeSelection'

export default function AddToCart ({ closeModal, selectedItem, selectedColor, selectedSize, changeColor, changeSize, state }) {
  return (
    <CartConsumer>
      {({ addToCart }) => (
        <React.Fragment>
          <div className='row'>
            <div className={styles.imgContainer}>
              <img src={selectedItem.colors[selectedColor]} className={styles.img} alt='item' />
            </div>
            <div className={styles.contentContainer}>
              <div className='row'>
                <div>
                  <NavLink to='/item?id=0' className={itemCardStyles.noUnderline}>
                    <p className={styles.itemName}>{selectedItem.name}</p>
                  </NavLink>
                  <p className={`${styles.itemCategory} gray`}>{selectedItem.type}</p>
                </div>
                <p className={`${styles.itemPrice} green`}>{`$${selectedItem.price}`}</p>
              </div>
              <ColorSelection 
                item = {selectedItem}
                selectedColor = {selectedColor}
                changeColor = {changeColor}
              />
              <SizeSelection 
                selectedSize = {selectedSize}
                changeSize = {changeSize}
              />
              <button 
                className = 'cartBtn'
                onClick = {() => {
                  addToCart(state)
                  closeModal()
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </CartConsumer>
  )
}