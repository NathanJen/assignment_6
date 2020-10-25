import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Products from './components/Products/Products'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
        </Switch>
        <Footer />
      </div>
    )
  }
}