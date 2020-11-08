import React from 'react'
// import styles from './Products.module.css'
import { NavLink } from "react-router-dom"
import ItemCard from '../ItemCard/ItemCard'
import Modal from '../Modal/Modal'
import queryString from 'query-string'
import { getFilteredItems } from '../../shared/Utils'

export default class Products extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      items: [],
      showModal: false,
      selectedItem: null,
    }

    const { category } = queryString.parse(this.props.location.search)
    console.log(getFilteredItems(category))

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  componentDidMount() {
    const { category } = queryString.parse(this.props.location.search)

    this.setState({ 
      items: getFilteredItems(category)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const urlMatch = queryString.parse(this.props.location.search).category === queryString.parse(prevProps.location.search).category

    if (!urlMatch) {
      const { category } = queryString.parse(this.props.location.search)

      this.setState({ 
        items: getFilteredItems(category)
      })
    }
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
      <div className='content-breadcrumb-container'>
        <NavLink to="./" className='breadcrumb green'><p><span className='gray'>&lt; </span>Home</p></NavLink>
        <div className='category-name-container'>
          <h1 className="category-name">Dogs</h1>
        </div>
        <div className='startRow'>
          {this.state.items.map((item, i) => 
            <ItemCard 
              item={item}
              openModal={this.openModal}
              key={i} 
            />
          )}
        </div>
        {this.renderModal()}
      </div>
    )
  }
}