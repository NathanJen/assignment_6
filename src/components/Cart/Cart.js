import React from 'react'
import styles from './Cart.module.css'
import { CartConsumer } from '../../contexts/cart'
import { NavLink } from "react-router-dom"
import Edit from '../../assets/edit.png'
import { quantities } from '../../shared/Utils'

function CartItem ({item, removeFromCart, updateQuantity, index}) {
  const name = item.item.name
  const color = item.color
  const image = item.item.colors[color]
  const size = item.size

  return (
    <div className={styles.detailsRow}>
      <div className={styles.detailContainer} >
        <NavLink to="/item?id=0" className='breadcrumb green'><img src={image} className={styles.itemImg} alt='cart item' /></NavLink>
      </div>
      <div className={styles.detailContainer} >
        <h2>{name}</h2>
        <p className={styles.body}>Color: {color}</p>
        <p className={styles.body}>Size: {size}</p>
        <div className={styles.selectionRow}>
          <p className={styles.body}>Quantity:</p>
          <select value={item.quantity} onChange={(event) => updateQuantity(index, event.target.value)}>
            {quantities.map((option, i) => <option key={i} value={option}>{option}</option>)}
          </select>
        </div>
        <p className={styles.remove} onClick={() => removeFromCart(index)}>Remove</p>
      </div>
      <div className={styles.priceContainer} >
        <h2>{`$${item.item.price}`}</h2>
      </div>
    </div>
  )
}

function CheckoutDetails ({cart, clearCart}) {
  let subtotal = 0
  for (let i=0; i < cart.length; i++) {
    subtotal += cart[i].quantity * parseFloat(cart[i].item.price)
  }
  const shippingPrice = 5.00
  const tax = subtotal * .06
  const total = (subtotal + shippingPrice + tax)

  return (
    <div className={styles.checkoutContainer}>
      <CheckoutCard 
        title = "Guest Information"
        content = {["njen@andrew.cmu.edu"]}
      />
      <CheckoutCard 
        title = "Shipping Information"
        content = {["Nathan Jen", "5000 Forbes Ave, Pittsburgh, PA, 15213", "412-234-2234"]}
      />
      <CheckoutCard 
        title = "Payment Information"
        content = {["XXXX-XXXX-XXXX-1234"]}
      />
      <div className={styles.cartRow}>
        <p className={styles.shippingDetails}>Subtotal:</p>
        <p className={styles.shippingDetails}>{`$${subtotal.toFixed(2)}`}</p>
      </div>
      <div className={styles.cartRow}>
        <p className={styles.shippingDetails}>Shipping and Handling:</p>
        <p className={styles.shippingDetails}>{`$${shippingPrice.toFixed(2)}`}</p>
      </div>
      <div className={styles.cartRow}>
        <p className={styles.shippingDetails}>Taxes:</p>
        <p className={styles.shippingDetails}>{`$${tax.toFixed(2)}`}</p>
      </div>
      <div className={styles.totalRow}>
        <p className={styles.total}>Total:</p>
        <p className={styles.total}>{`$${total.toFixed(2)}`}</p>
      </div>
      <NavLink to='/orders'>
        <button 
          className = {styles.cartBtn}
          onClick = {() => clearCart()}
          // Add to orders context on click
        >
          Place Your Order
        </button>
      </NavLink>
    </div>
  )
}

function CheckoutCard ({ title, content }) {
  return (
    <div className={styles.checkoutCard}>
      <div className={styles.cartRow}>
        <h3 className={styles.checkoutTitle}>{title}</h3>
        <img src={Edit} className={styles.editIcon} alt='edit icon' />
      </div>
      {content.map((text, i) => 
        <p className={styles.bodySmall} key={i}>{text}</p>
      )}
    </div>
  )
}

export default function Cart() {
  return (
    <CartConsumer>
      {({ cart, removeFromCart, updateQuantity, clearCart }) => (
        <div className='content-breadcrumb-container'>
          <div className='breadcrumb-row'>
            <NavLink to="/" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
          </div>
          <div className='category-name-container'>
            <h1 className="category-name">Your Cart {`(${cart.length})`}</h1>
          </div>
          <div className={styles.cartRow}>
            <div className={styles.itemCol}>
              {cart.map((item, i) => 
                <CartItem 
                  item = {item}
                  removeFromCart = {removeFromCart}
                  updateQuantity = {updateQuantity}
                  index = {i}
                  key = {i} 
                />
              )}
            </div>
            <CheckoutDetails 
              cart={cart}
              clearCart={clearCart}
            />
          </div>
        </div>
      )}
    </CartConsumer>
  )
}