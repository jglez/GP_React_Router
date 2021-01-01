import React, { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Route, Link and Switch)
// Route, Link, Switch are React components from the react-router-dom library
import { Route, Link, Switch } from 'react-router-dom'

// Components used for the different routes
// These components will be rendered CONDITIONALLY using React Router
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='/items-list'>Shop</Link>

          {/* A regular anchor will cause a refresh to the page */}
          {/* We can use preventDefault() to prevent the reload */}
          {/* And use pushState on history API to cosmetically modify the URL */}
          {/* <a onClick={evt => {
            evt.preventDefault()
            history.pushState(null, null, '/foo')
          }} href='/'>Foo</a> */}
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      {/* What path needs to match correctly in order to render the component? */}
      {/* We can pass the exact prop so the component will render only when it matches that exact URL */}

      <Switch>

        {/* The colon demarcates a parameter (dynamic URL) */}
        {/* id acts as a sort of variable name - it can take any value */}
        <Route path='/items-list/:id'>
          <Item />
        </Route>

        <Route path='/items-list'>
          <ItemsList items={stock} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>

      {/* Switch works by rendering the component with the path that matches first. */}
      {/* In this case, that will be our <Home /> component because it has the least specific path. (this removes the need to include the exact prop) */}

      {/* Typical procedure is to place the least specific Route at the bottom because it acts as a sort of default. */}

      {/* Without <Switch />, ALL <Route />s with paths that match are rendered */}

      {/* ALTERNATE SYNTAX: */}
      {/* <Route component={Home} path='/' />
      <Route render={props => <Home />} path='/'/> */}
    </div>
  )
}
