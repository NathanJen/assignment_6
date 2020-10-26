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

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/item' component={ProductDetails} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/orders' component={Orders} />
        </Switch>
        <Footer />
      </div>
    )
  }
}