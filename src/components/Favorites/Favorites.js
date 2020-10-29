import React from 'react'
// import styles from './Favorites.module.css'
import { CartConsumer } from '../../contexts/cart'
import { NavLink } from "react-router-dom"
import ItemCard from '../ItemCard/ItemCard'

export default class Favorites extends React.Component {
  render() {
    return (
      <CartConsumer>
        {({ favorites }) => (
          <div className='content-container'>
            <NavLink to="./" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
            <div className='category-name-container'>
              <h1 className='category-name'>My Favorites</h1>
            </div>
            <div className='row'>
              {favorites.map((item, i) => <ItemCard item={item} key={i} />)}
            </div>
          </div>
        )}
      </CartConsumer>
    )
  }
}