import React, { useEffect, useState } from "react"
import { Route } from "react-router"
import { Header } from "./components"
import { Home, Cart } from "./pages"
import axios from 'axios'

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      axios.get('db.json').then(({data}) => {
        setPizzas(data.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas } />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App
