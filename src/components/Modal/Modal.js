import React from "react";
import styles from './Modal.module.css'
import { NavLink } from "react-router-dom"
import { CartConsumer } from '../../contexts/cart'
import itemCardStyles from '../ItemCard/ItemCard.module.css'
import ColorSelection from '../ProductDetails/ColorSelection'
import SizeSelection from '../ProductDetails/SizeSelection'
import Items from '../../shared/items'

function AddToCartModal ({ closeModal, selectedItem, selectedColor, selectedSize, changeColor, changeSize, state }) {
  return (
    <CartConsumer>
      {({ addToCart }) => (
        <React.Fragment>
          <div className={styles.close} onClick={() => closeModal()}>&times;</div>
          <div className='row'>
            <div className={styles.imgContainer}>
              <img src={selectedItem.colors[selectedColor]} className={styles.img} alt='item' />
            </div>
            <div className={styles.contentContainer}>
              <div className='row'>
                <div>
                  <NavLink to='/item?id=0' className={itemCardStyles.noUnderline}>
                    <p className={itemCardStyles.itemName}>{selectedItem.name}</p>
                  </NavLink>
                  <p className={`${itemCardStyles.itemCategory} gray`}>{selectedItem.type}</p>
                </div>
                <p className={`${itemCardStyles.itemPrice} green`}>{`$${selectedItem.price}`}</p>
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

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: Items[0],
      color: "Strawberry",
      quantity: 1,
      size: "Tiny",
    }

    this.changeColor = this.changeColor.bind(this)
    this.changeSize = this.changeSize.bind(this)
  }

  changeColor(color) {
    this.setState({
      color: color
    })
  }

  changeSize(size) {
    this.setState({
      size: size
    })
  }

  render() {
    if (this.props.showModal) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <AddToCartModal
              closeModal={this.props.closeModal}
              selectedItem={this.state.item}
              selectedColor={this.state.color}
              selectedSize={this.state.size}
              changeColor={this.changeColor}
              changeSize={this.changeSize}
              state={this.state}
            />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}