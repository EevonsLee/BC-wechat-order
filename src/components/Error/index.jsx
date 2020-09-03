import React, { Component } from "react"

import ErrorBoundary from "./ErrorBoundary.jsx"
import Error from "./Error.jsx"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <ErrorBoundary>
      <Error />
    </ErrorBoundary>

  }
}


export default App