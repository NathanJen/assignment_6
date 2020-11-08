import React from 'react'
import styles from './ProductDetails.module.css'
import { NavLink } from "react-router-dom"
import queryString from 'query-string'
import Items from '../../shared/items'
import { CartConsumer } from '../../contexts/cart'
import Carousel from '../Carousel/Carousel'
import SizeSelection from './SizeSelection'
import ColorSelection from './ColorSelection'

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
        {item.closeups ? <CloseUps item={item} photos={item.closeups} /> : null}
      </div>
      <div className={styles.itemDetailsContainer}>
        <div className='row'>
          <h1 className={styles.itemDetailName}>{item.name}</h1>
          <h1 className={`${styles.itemDetailName} green`}>{`$${item.price}`}</h1>
        </div>
        <h2 className={styles.category}>{item.type}</h2>
        <ColorSelection 
          item = {item}
          selectedColor = {selectedColor}
          changeColor = {changeColor}
        />
        <SizeSelection 
          selectedSize = {selectedSize}
          changeSize = {changeSize}
        />
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

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    this.setState({ 
      item: Items[id],
    })
  }

  componentDidUpdate(prevProps) {
    const urlMatch = queryString.parse(this.props.location.search).id === queryString.parse(prevProps.location.search).id

    if (!urlMatch) {
      const { id } = queryString.parse(this.props.location.search)

      this.setState({ 
        item: Items[id],
        color: "Strawberry",
        size: "Tiny",
      })
    }
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
              <NavLink to="/products?category=dog" className='breadcrumb green'><p><span className='gray'>&lt; </span>Dogs</p></NavLink>
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