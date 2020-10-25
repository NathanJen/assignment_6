import React from 'react'
import styles from './Products.module.css'
import { NavLink } from "react-router-dom"
import Items from '../../shared/items'
import ItemCard from '../ItemCard/ItemCard'

export default class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: null
    }
  }

  render() {
    return (
      <div className='content-breadcrumb-container'>
        <NavLink to="./" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
        <div className='category-name-container'>
          <h1 className={styles.categoryName}>Dogs</h1>
        </div>
        <div className='row'>
          {Items.map((item, i) => <ItemCard item={item} key={i} />)}
        </div>
      </div>
    )
  }
}