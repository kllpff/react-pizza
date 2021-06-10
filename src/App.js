import React, { useEffect, useState } from "react"
import { Route } from "react-router"
import { Header } from "./components"
import { Home, Cart } from "./pages"

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      fetch('db.json')
      .then((res) => res.json())
      .then(json => {
        setPizzas(json.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App
