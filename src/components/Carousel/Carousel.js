import React from 'react'
import styles from './Carousel.module.css'
import Items from '../../shared/items'
import ItemCard from '../ItemCard/ItemCard'
import Arrow from '../../assets/arrow.png'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startIndex: 0,
      pageItems: Items.slice(0, 4),
    }
  }

  updateStartIndex = (direction) => {
    direction === "forward"
      ? this.setState({ 
          startIndex: this.state.startIndex + 1,
          pageItems: Items.slice(this.state.startIndex + 1, this.state.startIndex + 5),
        })
      : this.setState({ 
          startIndex: this.state.startIndex - 1,
          pageItems: Items.slice(this.state.startIndex - 1, this.state.startIndex + 3),
        })
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Customers Also Bought:</h1>
        <div className='row'>
          <button 
            className={this.state.startIndex === 0 ? `${styles.arrowBtn} ${styles.disabled}` : styles.arrowBtn}
            disabled={this.state.startIndex === 0 }
            onClick={() => this.updateStartIndex("backward")}
          >
            <img src={Arrow} className={styles.arrowImg} alt='Carousel arrow' />
          </button>
          <div className={styles.itemRow}>
            {this.state.pageItems.map((item, i) => <ItemCard item={item} key={i} openModal={null} />)}
          </div>
          <button 
            className={(this.state.startIndex + 4 === Items.length) ? `${styles.arrowBtn} ${styles.disabled}` : styles.arrowBtn}
            disabled={this.state.startIndex + 4 === Items.length}
            onClick={() => this.updateStartIndex("forward")}
          >
            <img src={Arrow} className={styles.arrowImg} alt='Carousel arrow' />
          </button>
        </div>
      </div>
    )
  }
}