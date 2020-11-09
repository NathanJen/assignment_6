import React from "react";
import styles from './Modal.module.css'
import AddToCart from './AddToCart'


export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item,
      color: "Strawberry",
      quantity: 1,
      size: "Tiny",
    }

    this.changeColor = this.changeColor.bind(this)
    this.changeSize = this.changeSize.bind(this)
  }

  componentDidUpdate(prevProps) {
    const productMatch = (this.props.item === prevProps.item)

    if (!productMatch) {
      this.setState({ 
        item: this.props.item,
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
    if (this.props.showModal) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.close} onClick={() => this.props.closeModal()}>&times;</div>
            <AddToCart
              closeModal={this.props.closeModal}
              selectedItem={this.props.item}
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