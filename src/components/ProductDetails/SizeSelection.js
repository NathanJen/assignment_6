import React from 'react'
import styles from './ProductDetails.module.css'
import { sizes } from '../../shared/Utils'

export default function Contact ({selectedSize, changeSize}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}