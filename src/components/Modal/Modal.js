import React from "react";
import styles from './Modal.module.css'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shirt: this.props.shirt,
      color: this.props.firstColor,
      quantity: 1,
      size: "Size",
    }

    this.changeColor = this.changeColor.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeSize = this.changeSize.bind(this)
  }

  changeColor(color) {
    this.setState({
      color: color,
    })
  }

  changeQuantity(event) {
    this.setState({ quantity: event.target.value })
  }

  changeSize(event) {
    this.setState({ size: event.target.value })
  }

  render() {
    if (this.props.showModal) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}