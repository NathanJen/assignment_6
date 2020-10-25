import React from 'react'
import styles from './ProductDetails.module.css'
import { NavLink } from "react-router-dom"
import { getFirstImage, sizes } from '../../shared/Utils'
import queryString from 'query-string'
import Items from '../../shared/items'

function CloseUps ({item, photos}) {
  return (
    <div className={styles.CloseupRow}>
      <div className='row'>
        {Object.keys(photos).map((photo, i) => 
          <div className={styles.colorBox} key={i}>
            <img src={item.closeups[photo]} alt='harness-buckle' className={styles.itemImg} key={i} />
          </div>)}
      </div>
    </div>
  )
}

function ImageSection ({item}) {
  return (
    <div className='row'>
      <div className={styles.itemImgContainer}>
        <img src={getFirstImage(item)} alt='Large Harness' className={styles.itemImg} />
        <CloseUps item={item} photos={item.closeups} />
      </div>
      <div className={styles.itemDetailsContainer}>
        <div className='row'>
          <h1 className={styles.itemDetailName}>{item.name}</h1>
          <h1 className={`${styles.itemDetailName} green`}>{`$${item.price}`}</h1>
        </div>
        <h2 className={styles.category}>{item.type}</h2>
        <h2 className={styles.optionName}>Color:</h2>
        <div className='row'>
          {Object.keys(item.colors).map((color, i) => 
            <div className={styles.colorBox} key={i}>
              <img src={item.colors[color]} alt='harness colors' className={styles.itemImg} />
            </div>)
          }
        </div>
        <h2 className={styles.optionName}>Size:</h2>
        <div className='row'>
          {sizes.map((size, i) => 
            <div className={styles.sizeContainer} key={i}>
              <p className={styles.size}>{size}</p>
            </div>)
          }
        </div>
        <button className={styles.cartBtn}>Add to Cart</button>
      </div>
    </div>
  )
}

function Information ({item}) {
  return (
    <div className={styles.infoMargins}>
      <div className={styles.infoContainer}>
        <h1 className={`${styles.itemName} green`}>Product Details</h1>
        <p className={styles.body}>{item.details}</p>
      </div>
      <div className={styles.infoContainer}>
        <h1 className={`${styles.itemName} green`}>Product Specifications</h1>
        <p className={styles.body}><b>{Object.keys(item.specs)[0]}</b></p>
        <p className={styles.body}>{item.specs.Materials}</p>
      </div>
    </div>

  )
}

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props)

    const { id } = queryString.parse(this.props.location.search)
    this.state = {
      item: Items[id],
      color: null,
      size: null,
    }
  }
  
  render() {
    return (
      <div className='content-breadcrumb-container'>
        <div className='breadcrumb-row'>
          <NavLink to="/" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
          <NavLink to="/products" className='breadcrumb green'><p><span className='gray'>&lt; </span>Dogs</p></NavLink>
        </div>
        <ImageSection item={this.state.item} />
        <Information item={this.state.item} />
      </div>
    )
  }
}