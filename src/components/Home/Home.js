import React from 'react'
import styles from './Home.module.css'
import { NavLink } from "react-router-dom"
import HeroImage from '../../assets/HeroImage.png'
import CatCategoryImg from '../../assets/catCategory.jpg'
import DogCategoryImg from '../../assets/dogCategory.jpg'
import ItemCard from '../ItemCard/ItemCard'
import Items from '../../shared/items'

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


export default function Home () {
  return (
    <React.Fragment>
      <Hero image={HeroImage} />
      <CategoryContainer name="Category">
        <div className='row'>
          <CategoryCard imageSrc={CatCategoryImg} name="Cats" path="./" />
          <CategoryCard imageSrc={DogCategoryImg} name="Dogs" path="./" />
        </div>
      </CategoryContainer>
      <CategoryContainer name="Trending">
        <div className='row'>
          {Items.map((item, i) => <ItemCard item={item} key={i} />)}
        </div>
      </CategoryContainer>
    </React.Fragment>
  )
}