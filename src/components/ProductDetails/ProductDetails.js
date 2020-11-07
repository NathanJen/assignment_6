import React from 'react'
import styles from './ProductDetails.module.css'
import { NavLink } from "react-router-dom"
import { sizes } from '../../shared/Utils'
import queryString from 'query-string'
import Items from '../../shared/items'
import { CartConsumer } from '../../contexts/cart'
import Carousel from '../Carousel/Carousel'

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

function ImageSection ({item, changeColor, selectedColor, changeSize, selectedSize, addToCart, state}) {
  return (
    <div className='row'>
      <div className={styles.itemImgContainer}>
        <img src={item.colors[selectedColor]} alt='Large Harness' className={styles.itemImg} />
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
            <div className={styles.colorBox} key={i} onClick={() => changeColor(color)}>
              <img 
                src={item.colors[color]} 
                alt='harness colors' 
                className={color === selectedColor ? `${styles.itemImg} ${styles.selected}` : styles.itemImg} 
              />
            </div>)
          }
        </div>
        <h2 className={styles.optionName}>Size:</h2>
        <div className='row'>
          {sizes.map((size, i) => 
            <div 
              className={size === selectedSize ? `${styles.sizeContainer} ${styles.selected}` : styles.sizeContainer}
              key={i} 
              onClick={() => changeSize(size)}
            >
              <p className={styles.size} >{size}</p>
            </div>)
          }
        </div>
        <button 
          className = {styles.cartBtn}
          onClick = {() => addToCart(state)}
        >
          Add to Cart
        </button>
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
      color: "Strawberry",
      size: "Tiny",
      quantity: 1,
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
    return (
      <CartConsumer>
        {({ addToCart }) => (
          <div className='content-breadcrumb-container'>
            <div className='breadcrumb-row'>
              <NavLink to="/" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
              <NavLink to="/products" className='breadcrumb green'><p><span className='gray'>&lt; </span>Dogs</p></NavLink>
            </div>
            <ImageSection 
              item = {this.state.item} 
              changeColor = {this.changeColor} 
              selectedColor = {this.state.color}
              changeSize = {this.changeSize}
              selectedSize = {this.state.size}
              addToCart = {addToCart}
              state = {this.state}
            />
            <Information item={this.state.item} />
            <Carousel />
          </div>
        )}
      </CartConsumer>
    )
  }
}