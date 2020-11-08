import React from 'react'
import styles from './Favorites.module.css'
import itemCardStyles from '../ItemCard/ItemCard.module.css'
import { CartConsumer } from '../../contexts/cart'
import { NavLink } from "react-router-dom"
import ItemCard from '../ItemCard/ItemCard'
import Modal from '../Modal/Modal'

export default class Favorites extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      showModal: false,
      selectedItem: null,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  openModal = (item) => {
    this.setState({
      showModal: true,
      selectedItem: item,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  renderModal = () => {
    if (this.state.selectedItem) {
      return (
        <Modal showModal = {this.state.showModal} closeModal = {this.closeModal}>
          <div className={styles.close} onClick={() => this.closeModal()}>&times;</div>
          <div className='row'>
            <div className={styles.imgContainer}>
              <img src={this.state.selectedItem.colors['Strawberry']} className={styles.img} alt='item' />
            </div>
            <div className={styles.contentContainer}>
              <div className='row'>
                <div>
                  <NavLink to='/item?id=0' className={itemCardStyles.noUnderline}>
                    <p className={itemCardStyles.itemName}>{this.state.selectedItem.name}</p>
                  </NavLink>
                  <p className={`${itemCardStyles.itemCategory} gray`}>{this.state.selectedItem.type}</p>
                </div>
                <p className={`${itemCardStyles.itemPrice} green`}>{`$${this.state.selectedItem.price}`}</p>
              </div>
            </div>
          </div>
        </Modal>
      )
    }
  }

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
              {favorites.map((item, i) => 
                <ItemCard 
                  item={item}
                  openModal={this.openModal}
                  key={i} 
                />
              )}
            </div>
            {this.renderModal()}
          </div>
        )}
      </CartConsumer>
    )
  }
}