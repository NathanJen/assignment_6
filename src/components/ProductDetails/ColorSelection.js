import React from 'react'
import styles from './ProductDetails.module.css'

export default function ColorSelection ({item, selectedColor, changeColor}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}