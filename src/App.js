import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom"
import { CartProvider } from './contexts/cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Contact from './components/Contact/Contact'
import Orders from './components/Orders/Orders'
import Cart from './components/Cart/Cart'
import Favorites from './components/Favorites/Favorites';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
      favorites: [],
      orders: [],
      addToCart: (newItem) => {
        this.setState({
          cart: [newItem, ...this.state.cart],
        })
      },
      removeFromCart: (index) => {
        const newCart = [...this.state.cart]
        newCart.splice(index, 1)

        this.setState({
          cart: newCart,
        })
      },
      addToFavorites: (item) => {
        this.setState({ favorites: [item, ...this.state.favorites] })
      },
      removeFromFavorites: (item) => {
        const newFavs = [...this.state.favorites]
        const index = newFavs.indexOf(item)
        newFavs.splice(index, 1)

        this.setState({
          favorites: newFavs,
        })
      },
    }
  }

  render() {
    return (
      <CartProvider value={this.state}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/products' component={Products} />
            <Route exact path='/item' component={ProductDetails} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/favorites' component={Favorites} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </div>
      </CartProvider>
    )
  }
}