import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Contact from './components/Contact/Contact'
import Orders from './components/Orders/Orders'
import { CartProvider } from './contexts/cart'
import Cart from './components/Cart/Cart'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
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
    }
  }

  render() {
    return (
      <CartProvider value={this.state}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/item' component={ProductDetails} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
          <Footer />
        </div>
      </CartProvider>
    )
  }
}