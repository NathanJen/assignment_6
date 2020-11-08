import React from "react";
import styles from './Modal.module.css'
import Items from '../../shared/items'
import AddToCart from './AddToCart'


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
            <div className={styles.close} onClick={() => this.props.closeModal()}>&times;</div>
            <AddToCart
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