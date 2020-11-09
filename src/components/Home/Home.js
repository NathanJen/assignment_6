import React from 'react'
import styles from './Home.module.css'
import { NavLink } from "react-router-dom"
import HeroImage from '../../assets/HeroImage.png'
import CatCategoryImg from '../../assets/catCategory.jpg'
import DogCategoryImg from '../../assets/dogCategory.jpg'
import ItemCard from '../ItemCard/ItemCard'
import Items from '../../shared/items'
import Modal from '../Modal/Modal'

function Hero ({ image }) {
  return (
    <div className={styles.heroContainer}>
      <img className={styles.heroImg} alt='Hero' src={image} />
      <div className={styles.heroTxt}>Experience Wilderness Together</div>
    </div>
  )
}

function CategoryContainer ({ name, children }) {
  return (
    <div className='content-container'>
      <div className={styles.categoryNameContainer}>
        <h4 className={styles.categorySubname}>Shop by</h4>
        <h1 className={`${styles.categoryName} green`}>{name}</h1>
      </div>
      {children}
    </div>
  )
}

function CategoryCard ({ imageSrc, name, path }) {
  return (
    <div className={styles.categoryCard}>
      <NavLink to={path}><img className={styles.categoryImg} src={imageSrc} alt='Category' /></NavLink>
      <p className={styles.categoryTitle}>{name}</p>
    </div>
  )
}


export default class Home extends React.Component {
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
          item = {this.state.selectedItem}
        />
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <Hero image={HeroImage} />
        <CategoryContainer name="Category">
          <div className='row'>
            <CategoryCard imageSrc={CatCategoryImg} name="Cats" path='/products?category=cat' />
            <CategoryCard imageSrc={DogCategoryImg} name="Dogs" path='/products?category=dog' />
          </div>
        </CategoryContainer>
        <CategoryContainer name="Trending">
          <div className='row'>
            {Items.slice(0, 4).map((item, i) => 
              <ItemCard 
                item={item}
                openModal={this.openModal}
                key={i} 
              />
            )}
          </div>
        </CategoryContainer>
        {this.renderModal()}
      </React.Fragment>
    )
  }
}