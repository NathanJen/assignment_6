import React from 'react'
// import styles from './Favorites.module.css'
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
        <Modal 
          showModal = {this.state.showModal} 
          closeModal = {this.closeModal} 
        />
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
            <div className='startRow'>
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