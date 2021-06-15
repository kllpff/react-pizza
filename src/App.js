import React, { useEffect, useState, Component } from "react"
import { Route } from "react-router"
import { Header } from "./components"
import { Home, Cart } from "./pages"
import axios from 'axios'
import { connect } from 'react-redux'
import store from './redux/store'
import { setPizzas } from './redux/actions/pizzas'

// function App() {
//   useEffect(() => {
//       axios.get('db.json').then(({data}) => {
//         setPizzas(data.pizzas)
//       })
//   }, [])

//   return ;
// }

class App extends Component {

  componentDidMount() {
    axios.get('db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App)