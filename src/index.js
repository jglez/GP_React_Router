import React from 'react'
import { render } from 'react-dom'
/* 👉 STEP 1 - Import React Router's Router */
// We can do routing either with the history API using BrowserRouter
// Or using hashes with the HashRouter
// We are renaming BrowserRouter to Router for convenience
// (we can do this because we are only using one router)
import { BrowserRouter as Router } from 'react-router-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>,
  // Now we can use Router anywhere inside our app because
  // <App /> is our parent component and data trickles down
  document.querySelector('#root')
)