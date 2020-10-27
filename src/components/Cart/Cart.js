import React from 'react'
import styles from './Cart.module.css'
import { CartConsumer } from '../../contexts/cart'
import { NavLink } from "react-router-dom"

function CartItem ({item, removeFromCart, index}) {
  const name = item.item.name
  const color = item.color
  const size = item.size
  const quantity = item.quantity

  return (
    <div>
      <div>{name}</div>
      <div>{color}</div>
      <div>{size}</div>
      <div>{quantity}</div>
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  )
}

export default function Cart() {
  return (
    <CartConsumer>
      {({ cart, removeFromCart }) => (
        <div className='content-breadcrumb-container'>
          <div className='breadcrumb-row'>
            <NavLink to="/" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
          </div>
          <div className='category-name-container'>
            <h1 className="category-name">Your Cart {`(${cart.length})`}</h1>
          </div>
          {cart.map((item, i) => 
            <CartItem 
              item = {item}
              removeFromCart = {removeFromCart}
              index = {i}
              key = {i} 
          />
          )}
        </div>
      )}
    </CartConsumer>
  )
}